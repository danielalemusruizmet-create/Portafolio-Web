const chartCanvas = document.getElementById('ethicsChart');
if (chartCanvas && chartCanvas.getContext) {
  const ctx = chartCanvas.getContext('2d');
  const values = [85, 72, 64];
  const labels = ['Ética', 'Privacidad', 'Confianza'];
  const colors = ['#0d6efd', '#198754', '#ffc107'];
  const maxValue = 100;

  function drawChart() {
    const width = chartCanvas.width;
    const height = chartCanvas.height;
    const barWidth = 60;
    const gap = 40;
    ctx.clearRect(0, 0, width, height);
    ctx.font = '600 15px Inter, sans-serif';
    ctx.fillStyle = '#222';

    values.forEach((value, index) => {
      const x = 50 + index * (barWidth + gap);
      const barHeight = (value / maxValue) * 180;
      const y = height - barHeight - 30;

      ctx.fillStyle = '#e9ecef';
      ctx.fillRect(x, height - 30, barWidth, -180);
      ctx.fillStyle = colors[index];
      ctx.fillRect(x, height - 30, barWidth, -barHeight);
      ctx.fillStyle = '#222';
      ctx.fillText(`${value}%`, x, y - 10);
      ctx.fillText(labels[index], x, height - 8);
    });

    ctx.strokeStyle = '#ced4da';
    ctx.lineWidth = 1;
    for (let line = 0; line <= 4; line++) {
      const y = height - 30 - line * 45;
      ctx.beginPath();
      ctx.moveTo(40, y);
      ctx.lineTo(width - 20, y);
      ctx.stroke();
    }
  }

  drawChart();
}
