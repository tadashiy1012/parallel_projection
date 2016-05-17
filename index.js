window.addEventListener('load', () => {
    const cubes = [
        [100,  50, 100],
        [300,  50, 100],
        [300, 250, 100],
        [100, 250, 100],
        [100,  50, 300],
        [300,  50, 300],
        [300, 250, 300],
        [100, 250, 300]
    ];
    const d2pos = [];
    for (let i = 0; i < cubes.length; i++) {
        d2pos[i] = [
            cubes[i][0],
            cubes[i][1]
        ];
    }
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const startAngle = 0;
    const endAngle = 360;
    for (let j = 0; j < d2pos.length; j++) {
        ctx.beginPath();
        ctx.arc(d2pos[j][0], d2pos[j][1], 1, startAngle, endAngle, false);
        ctx.stroke();
    }
    for (let i = 0; i < d2pos.length; i++) {
        const start = d2pos[i];
        const end = d2pos[i + 1] !== undefined ? d2pos[i + 1] : d2pos[0];
        ctx.beginPath();
        ctx.moveTo(start[0], start[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();
    }
});