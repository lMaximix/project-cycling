// API key can be used on codepen.io only!
// You can get more info on https://docs.2gis.com/

const map = new mapgl.Map('container', {
    center: [30.36034399999998, 59.937589610162085],
    zoom: 17,
    key: 'a1104e08-bfad-4225-be97-6c9b6182e53a',
});

const directions = new mapgl.Directions(map, {
    // This key can be used for demo purpose only!
    // You can get your own key on https://dev.2gis.com/order/
    directionsApiKey: 'a1104e08-bfad-4225-be97-6c9b6182e53a',
});
const markers = [];

let firstPoint;
let secondPoint;
// A current selecting point
let selecting = 'a';

const controlsHtml = `<button id="reset">Reset points</button> `;
new mapgl.Control(map, controlsHtml, {
    position: 'topLeft',
});
const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', function() {
    selecting = 'a';
    firstPoint = undefined;
    secondPoint = undefined;
    directions.clear();
});

map.on('click', (e) => {
    const coords = e.lngLat;

    if (selecting != 'end') {
        // Just to visualize selected points, before the route is done
        markers.push(
            new mapgl.Marker(map, {
                coordinates: coords,
                icon: 'https://docs.2gis.com/img/dotMarker.svg',
            }),
        );
    }

    if (selecting === 'a') {
        firstPoint = coords;
        selecting = 'b';
    } else if (selecting === 'b') {
        secondPoint = coords;
        selecting = 'end';
    }

    // If all points are selected — we can draw the route
    if (firstPoint && secondPoint) {
        directions.pedestrianRoute({
            points: [firstPoint, secondPoint],
        });
        markers.forEach((m) => {
            m.destroy();
        });
    }
});

// doc https://docs.2gis.com/ru/mapgl/examples/directions