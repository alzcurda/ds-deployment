import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, useMapEvent } from 'react-leaflet';

const MapView = () => {
  // Nueva estructura de la región
  const region = {
    "name": "Arganzuela",
    "color": "blue",
    "polygon": [
      [
        40.405179000000004,
        -3.7037769999999997
      ],
      [
        40.405045,
        -3.702863
      ],
      [
        40.40505,
        -3.702444
      ],
      [
        40.405483000000004,
        -3.700876
      ],
      [
        40.405715,
        -3.699972
      ],
      [
        40.405910000000006,
        -3.699268
      ],
      [
        40.406309,
        -3.697834
      ],
      [
        40.406329,
        -3.6977659999999997
      ],
      [
        40.406979,
        -3.695302
      ],
      [
        40.406934,
        -3.6951799999999997
      ],
      [
        40.407254,
        -3.693996
      ],
      [
        40.407275000000006,
        -3.693857
      ],
      [
        40.407267000000004,
        -3.693794
      ],
      [
        40.407238,
        -3.6937409999999997
      ],
      [
        40.407109000000005,
        -3.693568
      ],
      [
        40.406967,
        -3.693119
      ],
      [
        40.407177000000004,
        -3.6930929999999997
      ],
      [
        40.407327,
        -3.693053
      ],
      [
        40.407552,
        -3.6929019999999997
      ],
      [
        40.4076,
        -3.69286
      ],
      [
        40.4076,
        -3.69286
      ],
      [
        40.407757000000004,
        -3.692726
      ],
      [
        40.407984000000006,
        -3.692452
      ],
      [
        40.408417,
        -3.691747
      ],
      [
        40.408131000000004,
        -3.691398
      ],
      [
        40.408092,
        -3.6912879999999997
      ],
      [
        40.407968000000004,
        -3.6910689999999997
      ],
      [
        40.407737000000004,
        -3.690715
      ],
      [
        40.407312000000005,
        -3.690143
      ],
      [
        40.407337000000005,
        -3.690105
      ],
      [
        40.407102,
        -3.6897699999999998
      ],
      [
        40.406703,
        -3.689053
      ],
      [
        40.406523,
        -3.688761
      ],
      [
        40.406367,
        -3.6885079999999997
      ],
      [
        40.405611,
        -3.68768
      ],
      [
        40.404616000000004,
        -3.686588
      ],
      [
        40.403209000000004,
        -3.684558
      ],
      [
        40.403198,
        -3.6845269999999997
      ],
      [
        40.402372,
        -3.6824909999999997
      ],
      [
        40.40234,
        -3.682413
      ],
      [
        40.402339000000005,
        -3.682403
      ],
      [
        40.402331000000004,
        -3.6823539999999997
      ],
      [
        40.402333000000006,
        -3.68226
      ],
      [
        40.402352,
        -3.682184
      ],
      [
        40.402251,
        -3.6819669999999998
      ],
      [
        40.40185,
        -3.681105
      ],
      [
        40.401569,
        -3.6805019999999997
      ],
      [
        40.401320000000005,
        -3.6799679999999997
      ],
      [
        40.401038,
        -3.679526
      ],
      [
        40.401018,
        -3.679494
      ],
      [
        40.400780000000005,
        -3.678934
      ],
      [
        40.398936000000006,
        -3.676687
      ],
      [
        40.398648,
        -3.676186
      ],
      [
        40.398389,
        -3.675842
      ],
      [
        40.3982,
        -3.675591
      ],
      [
        40.39752,
        -3.674943
      ],
      [
        40.397369000000005,
        -3.6748469999999998
      ],
      [
        40.396555,
        -3.674323
      ],
      [
        40.394299000000004,
        -3.673413
      ],
      [
        40.394296000000004,
        -3.673412
      ],
      [
        40.393731,
        -3.674433
      ],
      [
        40.393245,
        -3.6751489999999998
      ],
      [
        40.392302,
        -3.676323
      ],
      [
        40.391466,
        -3.677457
      ],
      [
        40.390891,
        -3.67818
      ],
      [
        40.390482000000006,
        -3.67861
      ],
      [
        40.389975,
        -3.679041
      ],
      [
        40.38459,
        -3.6826
      ],
      [
        40.384427,
        -3.6827449999999997
      ],
      [
        40.384249000000004,
        -3.682975
      ],
      [
        40.384227,
        -3.683003
      ],
      [
        40.384076,
        -3.683278
      ],
      [
        40.383887,
        -3.683716
      ],
      [
        40.3838,
        -3.684084
      ],
      [
        40.383772,
        -3.6842029999999997
      ],
      [
        40.383682,
        -3.6847559999999997
      ],
      [
        40.383333,
        -3.6869129999999997
      ],
      [
        40.383258000000005,
        -3.687185
      ],
      [
        40.382999000000005,
        -3.6881269999999997
      ],
      [
        40.382902,
        -3.6884349999999997
      ],
      [
        40.382870000000004,
        -3.6885369999999997
      ],
      [
        40.382855,
        -3.688577
      ],
      [
        40.382773,
        -3.68879
      ],
      [
        40.382678000000006,
        -3.6890549999999998
      ],
      [
        40.382619000000005,
        -3.689222
      ],
      [
        40.382184,
        -3.6900139999999997
      ],
      [
        40.384135,
        -3.692202
      ],
      [
        40.386965000000004,
        -3.69551
      ],
      [
        40.389078000000005,
        -3.6979819999999997
      ],
      [
        40.390628,
        -3.699448
      ],
      [
        40.393627,
        -3.702285
      ],
      [
        40.394435,
        -3.703268
      ],
      [
        40.395067000000004,
        -3.704291
      ],
      [
        40.395216000000005,
        -3.704532
      ],
      [
        40.395877000000006,
        -3.707235
      ],
      [
        40.396091000000006,
        -3.70812
      ],
      [
        40.396259,
        -3.708677
      ],
      [
        40.396534,
        -3.709589
      ],
      [
        40.396783000000006,
        -3.710185
      ],
      [
        40.396995000000004,
        -3.710695
      ],
      [
        40.397313000000004,
        -3.711278
      ],
      [
        40.397873000000004,
        -3.712056
      ],
      [
        40.398338,
        -3.712628
      ],
      [
        40.398726,
        -3.713075
      ],
      [
        40.398941,
        -3.713338
      ],
      [
        40.399328000000004,
        -3.7139439999999997
      ],
      [
        40.39965,
        -3.71479
      ],
      [
        40.399901,
        -3.715792
      ],
      [
        40.399967000000004,
        -3.7163109999999997
      ],
      [
        40.399979,
        -3.716665
      ],
      [
        40.399963,
        -3.716965
      ],
      [
        40.39994,
        -3.7172009999999998
      ],
      [
        40.399815000000004,
        -3.718854
      ],
      [
        40.399812000000004,
        -3.718898
      ],
      [
        40.399817000000006,
        -3.719207
      ],
      [
        40.399877000000004,
        -3.7196249999999997
      ],
      [
        40.399931,
        -3.71988
      ],
      [
        40.400067,
        -3.720245
      ],
      [
        40.400493000000004,
        -3.721022
      ],
      [
        40.400927,
        -3.721599
      ],
      [
        40.401132000000004,
        -3.721726
      ],
      [
        40.401315000000004,
        -3.7218389999999997
      ],
      [
        40.401945000000005,
        -3.72211
      ],
      [
        40.402055000000004,
        -3.722142
      ],
      [
        40.402548,
        -3.722288
      ],
      [
        40.403787,
        -3.722472
      ],
      [
        40.404165000000006,
        -3.7225479999999997
      ],
      [
        40.404527,
        -3.7226109999999997
      ],
      [
        40.405199,
        -3.7226339999999998
      ],
      [
        40.405808,
        -3.722539
      ],
      [
        40.406724000000004,
        -3.722257
      ],
      [
        40.407032,
        -3.722152
      ],
      [
        40.407155,
        -3.7221089999999997
      ],
      [
        40.408487,
        -3.721713
      ],
      [
        40.41136,
        -3.722502
      ],
      [
        40.411695,
        -3.7226559999999997
      ],
      [
        40.411889,
        -3.722762
      ],
      [
        40.411954,
        -3.722791
      ],
      [
        40.411994,
        -3.722809
      ],
      [
        40.412347000000004,
        -3.7228149999999998
      ],
      [
        40.412357,
        -3.7228149999999998
      ],
      [
        40.413971000000004,
        -3.722844
      ],
      [
        40.413934000000005,
        -3.720386
      ],
      [
        40.413921,
        -3.719528
      ],
      [
        40.413916,
        -3.7193229999999997
      ],
      [
        40.413895000000004,
        -3.7184299999999997
      ],
      [
        40.413897000000006,
        -3.71683
      ],
      [
        40.412059,
        -3.717742
      ],
      [
        40.411094000000006,
        -3.718229
      ],
      [
        40.408679,
        -3.7166609999999998
      ],
      [
        40.408064,
        -3.715122
      ],
      [
        40.407425,
        -3.713584
      ],
      [
        40.406726000000006,
        -3.7119389999999997
      ],
      [
        40.406646,
        -3.711569
      ],
      [
        40.406543000000006,
        -3.7111739999999998
      ],
      [
        40.406311,
        -3.709805
      ],
      [
        40.406259000000006,
        -3.709429
      ],
      [
        40.40605,
        -3.708294
      ],
      [
        40.405660000000005,
        -3.706398
      ],
      [
        40.405179000000004,
        -3.7037769999999997
      ]
    ],
    "buildables": [
      {
        "coords": [
          [
            40.40153,
            -3.70679
          ],
          [
            40.40122,
            -3.70480
          ],
          [
            40.39913,
            -3.70328
          ],
          [
            40.39853,
            -3.70496
          ]
        ]
      },
      {
        "coords": [
          [
            40.40282,
            -3.71687
          ],
          [
            40.40282,
            -3.71553
          ],
          [
            40.40103,
            -3.71497
          ],
          [
            40.40139,
            -3.71695
          ]
        ]
      },
    ],
    "markers": [
      {
        "name": "Punto de Interes 1",
        "coords": [
          40.4151,
          -3.7157
        ]
      },
      {
        "name": "Punto de Interes 2",
        "coords": [
          40.4139,
          -3.7169
        ]
      }
    ]
  }

  // Estado para los marcadores creados por el usuario
  const [userMarkers, setUserMarkers] = useState([]);

  // Estado para controlar la visibilidad del polígono
  const [polygonVisible, setPolygonVisible] = useState(true);

  // Función para alternar la visibilidad del polígono
  const togglePolygonVisibility = () => {
    setPolygonVisible((prevVisible) => !prevVisible);
  };

  // Componente para manejar eventos de clic en el mapa
  const AddMarkerOnClick = () => {
    useMapEvent('click', (e) => {
      const { lat, lng } = e.latlng;
      setUserMarkers((prevMarkers) => [
        ...prevMarkers,
        { coords: [lat, lng], name: `Coordenadas: (${lat.toFixed(5)}, ${lng.toFixed(5)})` }
      ]);
    });
    return null; // Este componente no renderiza nada visible
  };

  return (
    <div>
      <MapContainer
        center={region.markers[0].coords}
        zoom={15}
        style={{ height: '68vh', width: '105vh' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Renderizar el polígono del barrio si está visible */}
        {polygonVisible && (
          <Polygon positions={region.polygon} color={region.color}>
            <Popup>{region.name}</Popup>
          </Polygon>
        )}

        {/* Renderizar polígonos de zonas construibles */}
        {region.buildables.map((buildable, index) => (
          <Polygon
            key={`buildable-${index}`}
            positions={buildable.coords}
            color="green"
          >
            <Popup>Zona Construible {index + 1}</Popup>
          </Polygon>
        ))}

        {/* Renderizar marcadores predefinidos */}
        {region.markers.map((marker, index) => (
          <Marker key={`marker-${index}`} position={marker.coords}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}

        {/* Renderizar marcadores creados por el usuario */}
        {userMarkers.map((marker, index) => (
          <Marker key={`user-marker-${index}`} position={marker.coords}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}

        {/* Componente que agrega marcadores en clic */}
        <AddMarkerOnClick />
      </MapContainer>

      {/* Botón para alternar visibilidad del polígono */}
      <button onClick={togglePolygonVisibility} style={{ marginTop: '10px', padding: '10px 20px' }}>
        {polygonVisible ? 'Ocultar Polígono' : 'Mostrar Polígono'}
      </button>
    </div>
  );
};

export default MapView;
