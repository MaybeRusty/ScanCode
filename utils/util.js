const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const phoneVerify = phone => { 
  if(!(/^1[3456789]\d{9}$/.test(phone))){ 
      return false; 
  } 
  return true;
}

module.exports = {
  formatTime: formatTime,
  phoneVerify: phoneVerify
}
