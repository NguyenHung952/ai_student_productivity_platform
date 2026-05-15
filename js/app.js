const ctx = document.getElementById('financeChart');

new Chart(ctx, {
  type: 'bar',

  data: {
    labels: [
      'Ăn uống',
      'Di chuyển',
      'Học tập',
      'Giải trí',
      'Freelance'
    ],

    datasets: [{
      label: 'Chi tiêu sinh viên',

      data: [
        1200000,
        400000,
        900000,
        600000,
        3000000
      ],

      borderWidth: 2,
      borderRadius: 12
    }]
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: '#ffffff'
        }
      }
    },

    scales: {
      x: {
        ticks: {
          color: '#ffffff'
        },

        grid: {
          color: 'rgba(255,255,255,0.05)'
        }
      },

      y: {
        ticks: {
          color: '#ffffff'
        },

        grid: {
          color: 'rgba(255,255,255,0.05)'
        }
      }
    }
  }
});

function generateAIResponse() {

  const question =
    document.getElementById('question').value;

  const response =
    document.getElementById('aiResponse');

  if (!question.trim()) {

    response.innerHTML =
      '⚠ Vui lòng nhập câu hỏi để AI xử lý.';

    return;
  }

  const answers = [

    '📘 AI đề xuất học Machine Learning, NLP và Deep Learning.',

    '🧠 NLP Engine phát hiện đây là chủ đề học thuật nâng cao.',

    '🚀 AI Assistant đề xuất Pomodoro + Mindmap để tối ưu học tập.',

    '📄 Hệ thống có thể OCR tài liệu và tạo summary tự động.'
  ];

  const randomAnswer =
    answers[Math.floor(Math.random() * answers.length)];

  response.innerHTML = `
    <strong>Câu hỏi:</strong>
    ${question}
    <br><br>

    <strong>AI Response:</strong>
    <br>

    ${randomAnswer}
  `;
}

document
  .querySelectorAll('.menu-item')
  .forEach(item => {

    item.addEventListener('click', () => {

      document
        .querySelectorAll('.menu-item')
        .forEach(el => el.classList.remove('active'));

      item.classList.add('active');
    });

  });
