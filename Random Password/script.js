// Database قاعدة البيانات
const chars = [
  { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { letters_s: "abcdefghijklmnopqrstuvwxyz".split("") },
  { symbols: "!@#$%^&*()-_=+{}[]`~/><.,;:'\"\\|".split("") },
  { letters_c: "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("") },
];
// دالة generate
function generate() {
    let password = ''
    for (let i = 0; i < 4; i++) {
        password += chars[0].nums[Math.floor(Math.random() * chars[0].nums.length)]
        password += chars[1].letters_s[Math.floor(Math.random() * chars[1].letters_s.length)]
        password += chars[2].symbols[Math.floor(Math.random() * chars[2].symbols.length)]
        password += chars[3].letters_c[Math.floor(Math.random() * chars[3].letters_c.length)]
        
    }
    document.getElementById('display').value = password
    document.getElementById('display').style = ' text-align: center'
}
