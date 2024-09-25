const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000; // 포트 3000에서 실행

// CORS 설정
app.use(cors());

// 바디 파서 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST 요청 처리 - 클라이언트로부터 결제 결과를 받아서 전달
app.post("/payment/result", (req, res) => {
  console.log("Received POST request at /payment/result"); // 디버깅용 로그
  console.log("Request body:", req.body); // 디버깅용 로그
  const paymentData = req.body;
  res.status(200).json(paymentData);
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
