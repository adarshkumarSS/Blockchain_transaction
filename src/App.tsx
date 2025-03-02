import React, { useState } from 'react';
import { Shield, Upload, Clock, CheckCircle, FileText, X, ChevronRight, Search, Bell, User, Home, Folder, Share2, Activity, Plus, MoreHorizontal, PieChart, BarChart2, Users, Download, Lock, Calendar, Link, DollarSign, CreditCard, Send, Smartphone, Mail } from 'lucide-react';
import './App.css';

// Login Page Component
const LoginPage = ({ onLoginSuccess, onSwitchToRegister }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState('');

  const handleSendOtp = () => {
    if (!mobileNumber || mobileNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    // Simulate OTP sending
    setIsOtpSent(true);
    setError('');
  };

  const handleVerifyOtp = () => {
    if (otp === '1234') { // Simulated OTP
      onLoginSuccess();
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <div className="bg-[#181818] p-8 rounded-lg max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <Lock className="h-8 w-8 text-[#1DB954]" />
          <span className="text-xl font-bold text-white ml-2">SecureXchange Login</span>
        </div>

        {!isOtpSent ? (
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400 mb-1">Mobile Number</label>
              <div className="flex items-center bg-[#282828] rounded-md p-2">
                <Smartphone className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="bg-transparent text-white flex-1 focus:outline-none"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>
            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
            <button
              onClick={handleSendOtp}
              className="w-full bg-[#1DB954] hover:bg-[#1ED760] text-white py-2 rounded-md font-medium transition-colors"
            >
              Send OTP
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400 mb-1">Enter OTP</label>
              <div className="flex items-center bg-[#282828] rounded-md p-2">
                <CheckCircle className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="bg-transparent text-white flex-1 focus:outline-none"
                  placeholder="Enter OTP"
                />
              </div>
            </div>
            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-[#1DB954] hover:bg-[#1ED760] text-white py-2 rounded-md font-medium transition-colors"
            >
              Verify OTP
            </button>
          </div>
        )}

        <div className="text-center mt-4">
          <button
            onClick={onSwitchToRegister}
            className="text-[#1DB954] hover:underline"
          >
            Don't have an account? Register
          </button>
        </div>
      </div>
    </div>
  );
};

// Register Page Component
const RegisterPage = ({ onRegisterSuccess, onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!name || !email || !mobileNumber || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (mobileNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    // Simulate registration
    onRegisterSuccess();
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <div className="bg-[#181818] p-8 rounded-lg max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <User className="h-8 w-8 text-[#1DB954]" />
          <span className="text-xl font-bold text-white ml-2">SecureXchange Register</span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
            <div className="flex items-center bg-[#282828] rounded-md p-2">
              <User className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent text-white flex-1 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <div className="flex items-center bg-[#282828] rounded-md p-2">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-white flex-1 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Mobile Number</label>
            <div className="flex items-center bg-[#282828] rounded-md p-2">
              <Smartphone className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="bg-transparent text-white flex-1 focus:outline-none"
                placeholder="Enter your mobile number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
            <div className="flex items-center bg-[#282828] rounded-md p-2">
              <Lock className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent text-white flex-1 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            onClick={handleRegister}
            className="w-full bg-[#1DB954] hover:bg-[#1ED760] text-white py-2 rounded-md font-medium transition-colors"
          >
            Register
          </button>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={onSwitchToLogin}
            className="text-[#1DB954] hover:underline"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [showDropzone, setShowDropzone] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleRegisterSuccess = () => {
    setIsRegistering(false);
    alert('Registration successful! Please login.');
  };

  const handleSwitchToRegister = () => {
    setIsRegistering(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegistering(false);
  };

  // Calculate interest rate based on currency and amount
  const getInterestRate = () => {
    const amountNum = parseFloat(amount) || 0;
    if (currency === 'USD') {
      return amountNum > 1000 ? 2.5 : 3.0;
    } else if (currency === 'EUR') {
      return amountNum > 1000 ? 2.0 : 2.5;
    } else if (currency === 'GBP') {
      return amountNum > 1000 ? 1.8 : 2.2;
    }
    return 3.0;
  };

  return (
    <div>
      {!isLoggedIn ? (
        isRegistering ? (
          <RegisterPage onRegisterSuccess={handleRegisterSuccess} onSwitchToLogin={handleSwitchToLogin} />
        ) : (
          <LoginPage onLoginSuccess={handleLoginSuccess} onSwitchToRegister={handleSwitchToRegister} />
        )
      ) : (
        <div className="min-h-screen bg-[#121212] flex">
          {/* Sidebar */}
          <div className="w-64 bg-black text-white p-6 hidden md:block">
            <div className="flex items-center space-x-2 mb-8">
              <Shield className="h-8 w-8 text-[#1DB954]" />
              <span className="text-xl font-bold">SecureXchange</span>
            </div>
            
            <nav className="mb-8">
              <ul className="space-y-3">
                <li>
                  <button 
                    className={`flex items-center space-x-3 w-full py-2 px-3 rounded ${activeTab === 'home' ? 'bg-[#282828] text-white' : 'text-gray-400 hover:text-white'}`}
                    onClick={() => setActiveTab('home')}
                  >
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </button>
                </li>
                <li>
                  <button 
                    className={`flex items-center space-x-3 w-full py-2 px-3 rounded ${activeTab === 'dashboard' ? 'bg-[#282828] text-white' : 'text-gray-400 hover:text-white'}`}
                    onClick={() => setActiveTab('dashboard')}
                  >
                    <PieChart className="h-5 w-5" />
                    <span>Dashboard</span>
                  </button>
                </li>
                <li>
                  <button 
                    className={`flex items-center space-x-3 w-full py-2 px-3 rounded ${activeTab === 'transaction' ? 'bg-[#282828] text-white' : 'text-gray-400 hover:text-white'}`}
                    onClick={() => setActiveTab('transaction')}
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Make Transaction</span>
                  </button>
                </li>
                <li>
                  <button 
                    className={`flex items-center space-x-3 w-full py-2 px-3 rounded ${activeTab === 'activity' ? 'bg-[#282828] text-white' : 'text-gray-400 hover:text-white'}`}
                    onClick={() => setActiveTab('activity')}
                  >
                    <Activity className="h-5 w-5" />
                    <span>Activity</span>
                  </button>
                </li>
              </ul>
            </nav>
        
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="bg-[#181818] px-8 py-4 flex justify-between items-center sticky top-0 z-10">
              <div className="flex items-center space-x-4">
                <button className="md:hidden text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search files..."
                    className="bg-[#282828] text-white pl-10 pr-4 py-2 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#1DB954] w-64"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="relative">
                  <Bell className="h-6 w-6 text-gray-300" />
                  <span className="absolute -top-1 -right-1 bg-[#1DB954] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                </button>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-[#1DB954] flex items-center justify-center text-white">
                    <User className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-white">Adarsh</span>
                </div>
              </div>
            </header>

            <div className="flex-1 overflow-auto p-8">
              {activeTab === 'dashboard' && (
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-6 text-white">Dashboard</h1>
                  
                  {/* Stats Overview */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-[#181818] p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Total Transactions made</p>
                          <h3 className="text-2xl font-bold text-white mt-1">48</h3>
                        </div>
                        <div className="bg-[#282828] p-2 rounded-full">
                          <FileText className="h-5 w-5 text-[#1DB954]" />
                        </div>
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="text-[#1DB954] font-medium">+12%</span>
                        <span className="text-gray-400 ml-1">from last month</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#181818] p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Amount Deduced</p>
                          <h3 className="text-2xl font-bold text-white mt-1">$4200</h3>
                        </div>
                        <div className="bg-[#282828] p-2 rounded-full">
                          <BarChart2 className="h-5 w-5 text-[#1DB954]" />
                        </div>
                      </div>
                      <div className="w-full bg-[#282828] rounded-full h-2 mt-2 mb-1">
                        <div className="bg-[#1DB954] h-2 rounded-full" style={{ width: '13%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>0 GB</span>
                        <span>10 GB</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#181818] p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Shared Partners</p>
                          <h3 className="text-2xl font-bold text-white mt-1">36</h3>
                        </div>
                        <div className="bg-[#282828] p-2 rounded-full">
                          <Share2 className="h-5 w-5 text-[#1DB954]" />
                        </div>
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="text-[#1DB954] font-medium">+8</span>
                        <span className="text-gray-400 ml-1">from last month</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#181818] p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Transcations Failed</p>
                          <h3 className="text-2xl font-bold text-white mt-1">24</h3>
                        </div>
                        <div className="bg-[#282828] p-2 rounded-full">
                          <Link className="h-5 w-5 text-[#1DB954]" />
                        </div>
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="text-red-400 font-medium">-3</span>
                        <span className="text-gray-400 ml-1"> this week</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* File Activity Chart */}
                  <div className="bg-[#181818] p-6 rounded-lg mb-8">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold text-white">Transaction Activity</h3>
                      <div className="flex space-x-2">
                        <button className="bg-[#282828] text-white text-xs px-3 py-1 rounded-full">Week</button>
                        <button className="bg-[#1DB954] text-white text-xs px-3 py-1 rounded-full">Month</button>
                        <button className="bg-[#282828] text-white text-xs px-3 py-1 rounded-full">Year</button>
                      </div>
                    </div>
                    <div className="h-64 flex items-end space-x-2">
                      {[35, 45, 30, 60, 75, 50, 40, 30, 40, 55, 80, 60].map((height, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-full bg-[#1DB954] bg-opacity-20 hover:bg-opacity-40 rounded-t-sm transition-all duration-200"
                            style={{ height: `${height}%` }}
                          >
                            <div 
                              className="w-full bg-[#1DB954] rounded-t-sm"
                              style={{ height: `${height * 0.7}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-400 mt-2">{index + 1}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-gray-400">Apr</span>
                      <span className="text-xs text-gray-400">May</span>
                      <span className="text-xs text-gray-400">Jun</span>
                      <span className="text-xs text-gray-400">Jul</span>
                      <span className="text-xs text-gray-400">Aug</span>
                      <span className="text-xs text-gray-400">Sep</span>
                    </div>
                  </div>
                  
                  {/* Recent Activity and Storage Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-[#181818] p-6 rounded-lg md:col-span-2">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                        <button className="text-[#1DB954] text-sm font-medium flex items-center">
                          View All <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                      <div className="space-y-4">
                        {[
                          { action: 'Uploaded', file: 'Paid to Surya', time: '10 minutes ago', transactionId: '#TXN001', icon: <Upload className="h-4 w-4 text-blue-400" /> },
                          { action: 'Downloaded', file: 'Paid to Shree', time: '2 hours ago', transactionId: '#TXN002', icon: <Upload className="h-4 w-4 text-blue-400" /> },
                          { action: 'Shared', file: 'Got from Prakash Raam', time: 'Yesterday, 4:30 PM', transactionId: '#TXN003', icon: <Download className="h-4 w-4 text-green-400" /> },
                          { action: 'Secured', file: 'Paid to Prakash Raam', time: 'Yesterday, 2:15 PM', transactionId: '#TXN004', icon: <Upload className="h-4 w-4 text-blue-400" /> },
                          { action: 'Expired', file: 'Got from Surya', time: 'Mar 15, 2025', transactionId: '#TXN005', icon: <Download className="h-4 w-4 text-green-400" /> },
                        ].map((activity, index) => (
                          <div key={index} className="flex items-center py-3 border-b border-[#282828] last:border-0">
                            <div className="bg-[#282828] p-2 rounded-full mr-4">
                              {activity.icon}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-white">
                                <span className="font-medium">{activity.action}</span> {activity.file}
                              </p>
                              <p className="text-xs text-gray-400">{activity.time}</p>
                              <p className="text-xs text-gray-500">
                                Transaction ID: <span className="text-white">{activity.transactionId}</span>
                              </p>
                            </div>
                            <button className="text-gray-400 hover:text-white">
                              <MoreHorizontal className="h-5 w-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-[#181818] p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4 text-white">Transaction Breakdown</h3>
                      <div className="relative h-48 w-48 mx-auto mb-6">
                        <svg viewBox="0 0 36 36" className="h-full w-full">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#282828"
                            strokeWidth="3"
                            strokeDasharray="100, 100"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#1DB954"
                            strokeWidth="3"
                            strokeDasharray="45, 100"
                            className="storage-circle"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#3E2AD1"
                            strokeWidth="3"
                            strokeDasharray="25, 100"
                            strokeDashoffset="-45"
                            className="storage-circle"
                          />
                         
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <span className="text-2xl font-bold text-white">75%</span>
                          <span className="text-xs text-gray-400">of 100</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-[#1DB954] mr-2"></div>
                            <span className="text-sm text-gray-300">Payment received</span>
                          </div>
                          <span className="text-sm text-white">30%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-[#3E2AD1] mr-2"></div>
                            <span className="text-sm text-gray-300">Payment sent</span>
                          </div>
                          <span className="text-sm text-white">45%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="bg-[#181818] p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 text-white">Quick Actions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <button 
                        className="bg-[#282828] hover:bg-[#3E3E3E] p-4 rounded-lg flex flex-col items-center justify-center transition-colors"
                        onClick={() => setShowDropzone(true)}
                      >
                        <div className="bg-[#1DB954] bg-opacity-20 p-3 rounded-full mb-3">
                          <Upload className="h-6 w-6 text-[#1DB954]" />
                        </div>
                        <span className="text-sm font-medium text-white">make transaction</span>
                      </button>
                      <button className="bg-[#282828] hover:bg-[#3E3E3E] p-4 rounded-lg flex flex-col items-center justify-center transition-colors">
                        <div className="bg-[#3E2AD1] bg-opacity-20 p-3 rounded-full mb-3">
                          <Share2 className="h-6 w-6 text-[#3E2AD1]" />
                        </div>
                        <span className="text-sm font-medium text-white">Split payment</span>
                      </button>
                      <button className="bg-[#282828] hover:bg-[#3E3E3E] p-4 rounded-lg flex flex-col items-center justify-center transition-colors">
                        <div className="bg-[#E91E63] bg-opacity-20 p-3 rounded-full mb-3">
                          <Users className="h-6 w-6 text-[#E91E63]" />
                        </div>
                        <span className="text-sm font-medium text-white">Manage recipient</span>
                      </button>
                      <button className="bg-[#282828] hover:bg-[#3E3E3E] p-4 rounded-lg flex flex-col items-center justify-center transition-colors">
                        <div className="bg-[#FF9800] bg-opacity-20 p-3 rounded-full mb-3">
                          <Clock className="h-6 w-6 text-[#FF9800]" />
                        </div>
                        <span className="text-sm font-medium text-white">Transaction history</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'transaction' && (
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-6 text-white">Make Transaction</h1>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Currency Selection */}
                    <div className="bg-[#181818] p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4 text-white">Select Currency</h3>
                      <div className="space-y-4">
                        <button 
                          className={`w-full flex items-center p-4 rounded-lg transition-colors ${currency === 'USD' ? 'bg-[#1DB954] bg-opacity-20 border border-[#1DB954]' : 'bg-[#282828] hover:bg-[#3E3E3E]'}`}
                          onClick={() => setCurrency('USD')}
                        >
                          <div className={`p-2 rounded-full mr-3 ${currency === 'USD' ? 'bg-[#1DB954] bg-opacity-20' : 'bg-[#3E3E3E]'}`}>
                            <DollarSign className={`h-5 w-5 ${currency === 'USD' ? 'text-[#1DB954]' : 'text-gray-300'}`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-medium">US Dollar</p>
                            <p className="text-xs text-gray-400">USD</p>
                          </div>
                          {currency === 'USD' && (
                            <div className="bg-[#1DB954] rounded-full p-1">
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                          )}
                        </button>
                        
                        <button 
                          className={`w-full flex items-center p-4 rounded-lg transition-colors ${currency === 'EUR' ? 'bg-[#1DB954] bg-opacity-20 border border-[#1DB954]' : 'bg-[#282828] hover:bg-[#3E3E3E]'}`}
                          onClick={() => setCurrency('EUR')}
                        >
                          <div className={`p-2 rounded-full mr-3 ${currency === 'EUR' ? 'bg-[#1DB954] bg-opacity-20' : 'bg-[#3E3E3E]'}`}>
                            <span className={`text-lg font-bold ${currency === 'EUR' ? 'text-[#1DB954]' : 'text-gray-300'}`}>€</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-medium">Euro</p>
                            <p className="text-xs text-gray-400">EUR</p>
                          </div>
                          {currency === 'EUR' && (
                            <div className="bg-[#1DB954] rounded-full p-1">
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                          )}
                        </button>
                        
                        <button 
                          className={`w-full flex items-center p-4 rounded-lg transition-colors ${currency === 'GBP' ? 'bg-[#1DB954] bg-opacity-20 border border-[#1DB954]' : 'bg-[#282828] hover:bg-[#3E3E3E]'}`}
                          onClick={() => setCurrency('GBP')}
                        >
                          <div className={`p-2 rounded-full mr-3 ${currency === 'GBP' ? 'bg-[#1DB954] bg-opacity-20' : 'bg-[#3E3E3E]'}`}>
                            <span className={`text-lg font-bold ${currency === 'GBP' ? 'text-[#1DB954]' : 'text-gray-300'}`}>£</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-medium">British Pound</p>
                            <p className="text-xs text-gray-400">GBP</p>
                          </div>
                          {currency === 'GBP' && (
                            <div className="bg-[#1DB954] rounded-full p-1">
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                    
                    {/* Sender Details */}
                    <div className="bg-[#181818] p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4 text-white">Transaction Details</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Amount</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              {currency === 'USD' && <span className="text-gray-400">$</span>}
                              {currency === 'EUR' && <span className="text-gray-400">€</span>}
                              {currency === 'GBP' && <span className="text-gray-400">£</span>}
                            </div>
                            <input
                              type="number"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              className="bg-[#282828] text-white pl-8 pr-4 py-2 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#1DB954] w-full"
                              placeholder="0.00"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">From Account</label>
                          <select className="bg-[#282828] text-white px-4 py-2 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#1DB954] w-full">
                            <option>Main Account (**** 1234)</option>
                            <option>Savings Account (**** 5678)</option>
                            <option>Business Account (**** 9012)</option>
                          </select>
                        </div>
                        
                        <div className="pt-2">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-400">Interest Rate</span>
                            <span className="text-sm font-medium text-[#1DB954]">{getInterestRate()}%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Transaction Fee</span>
                            <span className="text-sm font-medium text-white">
                              {currency === 'USD' && '$'}
                              {currency === 'EUR' && '€'}
                              {currency === 'GBP' && '£'}
                              {parseFloat(amount) > 0 ? (parseFloat(amount) * 0.01).toFixed(2) : '0.00'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Recipient Details */}
                    <div className="bg-[#181818] p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4 text-white">Recipient Details</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Recipient Name</label>
                          <input
                            type="text"
                            value={recipientName}
                            onChange={(e) => setRecipientName(e.target.value)}
                            className="bg-[#282828] text-white px-4 py-2 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#1DB954] w-full"
                            placeholder="Enter recipient name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Account Number</label>
                          <input
                            type="text"
                            value={recipientAccount}
                            onChange={(e) => setRecipientAccount(e.target.value)}
                            className="bg-[#282828] text-white px-4 py-2 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#1DB954] w-full"
                            placeholder="Enter account number"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Reference (Optional)</label>
                          <input
                            type="text"
                            className="bg-[#282828] text-white px-4 py-2 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#1DB954] w-full"
                            placeholder="Add a reference"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Transaction Summary */}
                  <div className="bg-[#181818] p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-white">Transaction Summary</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center py-2 border-b border-[#282828]">
                        <span className="text-gray-400">Currency</span>
                        <span className="text-white font-medium">{currency}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-[#282828]">
                        <span className="text-gray-400">Amount</span>
                        <span className="text-white font-medium">
                          {currency === 'USD' && '$'}
                          {currency === 'EUR' && '€'}
                          {currency === 'GBP' && '£'}
                          {parseFloat(amount) > 0 ? parseFloat(amount).toFixed(2) : '0.00'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-[#282828]">
                        <span className="text-gray-400">Recipient</span>
                        <span className="text-white font-medium">{recipientName || 'Not specified'}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-[#282828]">
                        <span className="text-gray-400">Interest Rate</span>
                        <span className="text-[#1DB954] font-medium">{getInterestRate()}%</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-[#282828]">
                        <span className="text-gray-400">Fee</span>
                        <span className="text-white font-medium">
                          {currency === 'USD' && '$'}
                          {currency === 'EUR' && '€'}
                          {currency === 'GBP' && '£'}
                          {parseFloat(amount) > 0 ? (parseFloat(amount) * 0.01).toFixed(2) : '0.00'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-white font-medium">Total</span>
                        <span className="text-white text-xl font-bold">
                          {currency === 'USD' && '$'}
                          {currency === 'EUR' && '€'}
                          {currency === 'GBP' && '£'}
                          {parseFloat(amount) > 0 ? (parseFloat(amount) * 1.01).toFixed(2) : '0.00'}
                        </span>
                      </div>
                    </div>
                    <button className="w-full bg-[#1DB954] hover:bg-[#1ED760] text-white py-3 rounded-full font-medium flex items-center justify-center transition-colors">
                      <Send className="h-5 w-5 mr-2" />
                      Send Transaction
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'home' && (
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-6 text-white">Home</h1>
                  
                  {/* Welcome Banner */}
                  <div className="bg-gradient-to-r from-[#1DB954] to-[#3E2AD1] p-8 rounded-lg mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome back, Adarsh!</h2>
                    <p className="text-white opacity-90 mb-4">Your secure money exchange platform with end-to-end encryption.
                      Safer Faster Minimal...!
                    </p>
                    <button 
                      className="bg-white text-[#121212] px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors"
                      onClick={() => setActiveTab('transaction')}
                    >
                      Make a Transaction
                    </button>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-[#181818] p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Balance</p>
                          <h3 className="text-2xl font-bold text-white mt-1">$24,156.00</h3>
                        </div>
                        <div className="bg-[#282828] p-2 rounded-full">
                          <DollarSign className="h-5 w-5 text-[#1DB954]" />
                        </div>
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="text-[#1DB954] font-medium">+2.4%</span>
                        <span className="text-gray-400 ml-1">from last month</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#181818] p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Transactions</p>
                          <h3 className="text-2xl font-bold text-white mt-1">48</h3>
                        </div>
                        <div className="bg-[#282828] p-2 rounded-full">
                          <CreditCard className="h-5 w-5 text-[#1DB954]" />
                        </div>
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="text-[#1DB954] font-medium">+12</span>
                        <span className="text-gray-400 ml-1">this week</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#181818] p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Interest Earned</p>
                          <h3 className="text-2xl font-bold text-white mt-1">$156.78</h3>
                        </div>
                        <div className="bg-[#282828] p-2 rounded-full">
                          <BarChart2 className="h-5 w-5 text-[#1DB954]" />
                        </div>
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="text-[#1DB954] font-medium">+5.2%</span>
                        <span className="text-gray-400 ml-1">from last month</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Upload Dropzone Modal */}
              {showDropzone && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                  <div className="bg-[#282828] rounded-lg max-w-2xl w-full p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-white">Upload Files</h3>
                      <button onClick={() => setShowDropzone(false)} className="text-gray-400 hover:text-white">
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="border-2 border-dashed border-[#3E3E3E] rounded-lg p-8 mb-4 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-300 mb-2">Drag and drop files here, or click to browse</p>
                      <p className="text-gray-500 text-sm">Maximum file size: 100MB</p>
                      <input type="file" className="hidden" multiple />
                      <button className="mt-4 bg-[#1DB954] text-white px-4 py-2 rounded-full font-medium hover:bg-[#1ED760] transition-colors">
                        Select Files
                      </button>
                    </div>
                    <div className="flex justify-end space-x-3">
                      <button 
                        onClick={() => setShowDropzone(false)}
                        className="px-4 py-2 border border-gray-600 rounded-full text-gray-300 font-medium hover:bg-[#3E3E3E] transition-colors"
                      >
                        Cancel
                      </button>
                      <button className="px-4 py-2 bg-[#1DB954] text-white rounded-full font-medium hover:bg-[#1ED760] transition-colors">
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;