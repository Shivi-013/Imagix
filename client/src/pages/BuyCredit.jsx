import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const BuyCredit = () => {
  const { user, backendUrl, loadCreditsData, token, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Credits Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + '/api/user/verify-razor',
            response,
            { headers: { token } }
          )
          if (data.success) {
            loadCreditsData()
            navigate('/')
            toast.success('Credit Added')
          }
        } catch (error) {
          toast.error(error.message)
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true)
      }
      const { data } = await axios.post(
        backendUrl + '/api/user/pay-razor',
        { planId },
        { headers: { token } }
      )

      if (data.success) {
        initPay(data.order)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <motion.div
      className="min-h-screen bg-[#0a192f] px-4 py-10 text-blue-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Heading */}
      <div className="flex justify-center mb-8">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-[#0a192f] font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300">
          Our Plans
        </button>
      </div>

      <motion.h1
        className="text-3xl font-bold text-center text-yellow-400 mb-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Choose the plan
      </motion.h1>

      {/* Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#112240] rounded-3xl shadow-lg p-6 flex flex-col items-center justify-between border border-yellow-400/40 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img src={assets.logo_icon} alt="" className="w-12 h-12 mb-4" />
            <p className="text-lg font-semibold text-yellow-400 mb-2">
              Plan {item.id}
            </p>
            <p className="text-sm text-blue-200 text-center mb-4">
              {item.desc}
            </p>
            <p className="text-md font-medium text-blue-100 mb-4">
              ${item.price} / {item.credits} credits
            </p>
            <button
              onClick={() => paymentRazorpay(item.id)}
              className="bg-yellow-400 hover:bg-yellow-500 text-[#0a192f] font-semibold px-5 py-2 rounded-full shadow transition-all duration-300"
            >
              {user ? 'Purchase' : 'Get Started'}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit
