"use client"

import { useState, useEffect } from "react"
import { X, MessageCircle, Send } from "lucide-react"

interface ChatMessage {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

interface ChatProfile {
  id: number
  name: string
  avatar: string
  status: "online" | "offline"
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState("")
  const [currentProfile, setCurrentProfile] = useState(0)

  // Different profiles that will appear at different times
  const profiles: ChatProfile[] = [
    {
      id: 0,
      name: "Support Agent 1",
      avatar: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23f472b6'/%3E%3Cpath d='M20 10c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5z' fill='white'/%3E%3C/svg%3E",
      status: "online"
    },
    {
      id: 1,
      name: "Support Agent 2", 
      avatar: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='20' fill='%2310b981'/%3E%3Cpath d='M20 12c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4z' fill='white'/%3E%3C/svg%3E",
      status: "online"
    },
    {
      id: 2,
      name: "Support Agent 3",
      avatar: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23dc2626'/%3E%3Cpath d='M20 14c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3z' fill='white'/%3E%3C/svg%3E",
      status: "online"
    }
  ]

  // Rotate profiles every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfile((prev) => (prev + 1) % profiles.length)
    }, 30000) // Change every 30 seconds

    return () => clearInterval(interval)
  }, [])

  // Initial message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: ChatMessage = {
        id: Date.now(),
        text: "স্যার, আমি কিভাবে সাহায্য করতে পারি?",
        isUser: false,
        timestamp: new Date()
      }
      setMessages([initialMessage])
    }
  }, [isOpen, messages.length])

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage: ChatMessage = {
        id: Date.now(),
        text: inputValue,
        isUser: true,
        timestamp: new Date()
      }
      
      setMessages([...messages, userMessage])
      setInputValue("")
      
      // Simulate agent response
      setTimeout(() => {
        const responses = [
          "ধন্যবদ্য়, আপনার সমস্যাটা কি? আমি আপনাকে সাহায্য করতে প্রস্তুতি করছি।",
          "অবশ্যব! আপনি কি ধরনের বিষয় খুঁজতে চান?",
          "আমাদের প্রোডাক্ট সম্পর্কে আপনার সাহায্য করতে পারছি। আপনি কি জানতে চান?",
          "ধন্যবাদ! কিভাবে আপনার কেনাক্ট করতে সাহায্য পেয়েছি।"
        ]
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        
        const agentResponse: ChatMessage = {
          id: Date.now() + 1,
          text: randomResponse,
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, agentResponse])
      }, 1000 + Math.random() * 2000) // Random delay between 1-3 seconds
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl flex flex-col border border-gray-200">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={profiles[currentProfile].avatar} 
              alt={profiles[currentProfile].name}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            {profiles[currentProfile].status === "online" && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            )}
          </div>
          <div>
            <div className="font-medium text-sm">{profiles[currentProfile].name}</div>
            <div className="text-xs opacity-90 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              অনলাইন
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="w-6 h-6 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}
          >
            {!message.isUser && (
              <img 
                src={profiles[currentProfile].avatar}
                alt="Agent"
                className="w-6 h-6 rounded-full mr-2"
              />
            )}
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.isUser 
                  ? 'bg-green-500 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
              } shadow-sm`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString('bn-BD', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
            {message.isUser && (
              <div className="w-6 h-6 rounded-full ml-2 bg-gray-300 flex items-center justify-center">
                <span className="text-xs text-gray-600">আপনি</span>
              </div>
            )}
          </div>
        ))}
        <div ref={(el) => {
          if (el) {
            setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
          }
        }} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="আপনার বার্তা লিখুন..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <Send className="w-4 h-4" />
            পাঠান
          </button>
        </div>
      </div>
    </div>
  )
}
