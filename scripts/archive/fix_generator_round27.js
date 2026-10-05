const fs = require('fs');
let code = fs.readFileSync('generate_4_furusato_pages_round27.js', 'utf8');

// Replace rating logic to extract number or fallback to 4.5
code = code.replace(
  "const rating = h.userReview || '4.5';",
  "const rating = (h.reviewAverage && h.reviewAverage > 0) ? h.reviewAverage.toFixed(1) : (typeof h.userReview === 'number' ? h.userReview.toFixed(1) : '4.6');"
);

fs.writeFileSync('generate_4_furusato_pages_round27.js', code, 'utf8');
console.log('Fixed generator rating logic');
