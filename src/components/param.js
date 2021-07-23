console.log(window.innerHeight);

const w = window.innerWidth;
const random = (min, max) => min + Math.random() * (max - min);
const number = Math.floor(random(0, 11));
const param = [
    {
        w: w / 2,
        h: 0,
        d: 1,
        number:1
    },
    {
        w: w / 4,
        h: 360,
        d: 2,
        number:2
    },
    {
        w: w / 6,
        h: 40,
        d: 1,
        number:3
    },
    {
        w: w / 8,
        h: 320,
        d: 2,
        number:4
    },
    {
        w: w / 2 + w / 10,
        h: 80,
        d: 1,
        number:5
    },
    {
        w: 0,
        h: 280,
        d: 2,
        number:6
    },
    {
        w: w / 2 + w / 6,
        h: 120,
        d: 1,
        number:7
    },
    {
        w: w / 2 + w / 4,
        h: 240,
        d: 2,
        number:8
    },
    {
        w: w - 250,
        h: 160,
        d: 2,
        number:9
    },
    {
        w: w / 2 - w / 8,
        h: 200,
        d: 1,
        number:10
    },
    /////////////////////////////////
    {
        w: w / 2,
        h: 0,
        d: 2,
        number:0
    },
    {
        w: w / 4,
        h: 40,
        d: 1,
        number:2
    },
    {
        w: w / 6,
        h: 80,
        d: 2,
        number:3
    },
    {
        w: w / 8,
        h: 120,
        d: 1,
        number:4
    },
    {
        w: w / 2 + w / 10,
        h: 160,
        d: 2,
        number:5
    },
    {
        w: 0,
        h: 200,
        d: 1,
        number:6
    },
    {
        w: w / 2 + w / 6,
        h: 240,
        d: 2,
        number:7
    },
    {
        w: w / 2 + w / 4,
        h: 280,
        d: 1,
        number:8
    },
    {
        w: w - 250,
        h: 320,
        d: 1,
        number:9
    },
    {
        w: w / 2 - w / 8,
        h: 360,
        d: 2,
        number:10
    },
    {
        w: w / 2 - w / 8,
        h: 400,
        d: 1,
        number:0
    },
];

export default param;
