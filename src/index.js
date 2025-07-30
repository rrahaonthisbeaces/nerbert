import React from 'react';
import ReactDOM from 'react-dom/client';
import './bitex.css';
import Ds from './Ds';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from "react-router-dom";
import Luivuson from './serco/Luivuson';
import Rickerson from './serco/Rickerson';
import Rabit from './serco/Rabit';
import Gallas from './serco/Gallas';
import Donjesck from './serco/Donjesck';
import Newjersky from './serco/Newjersky';
import reportWebVitals from './reportWebVitals';

const embicose = ReactDOM.createRoot(document.getElementById('root'));
const fafa = ReactDOM.createRoot(document.getElementById('embicose'));
const mkxby = ReactDOM.createRoot(document.getElementById('mkxby'));

embicose.render(
  <React.StrictMode>
    <Router>
      <Routes> 

        <Route path="/hTx7Lk2Vc9Bn4Yq5Fs6Pm1Zr8Io3Xj0We7Ns3Rp6Ug2Kv9Om1Jh8Lt4Zy5Qb3Dn7Fr6" element={<Luivuson />} />
        <Route path="/qKn4Zj9Xt3Po6Mv8Ly1Rb5Fg7Wc2Ir0Ns6Jx3Te9Uh2Km5Yn8Vo1Lp4Xq7Bd3Ft6Gr5" element={<Rickerson />} />
        <Route path="/pWm5Qr8Yt2Ln6Vk1Xb9Io4Ns3Kj7Fe0Ru4Xp3Zy9Om6Vt2Lq5Jn8Ks1Bd7Fr3Hg5Tw6" element={<Rabit />} />
        <Route path="/nKm1Zq7Yo4Tx3Lv9Pr6Ns5Fb2Jx8Wi0Ug2Te9Xo6Lr5Yp1Jn8Kv3Bd4Fs7Ht3Qw6Mj5" element={<Gallas />} />
        <Route path="/zXp6Vo1Lm3Kj9Fb7Yq4Nr8Tw2Is5Wc0Te3Uv9Po6Xr2Ln5Jy8Kd1Fs7Bt3Qm6Hw5Ng4" element={<Donjesck />} />
        <Route path="/bNr5Xq9Lt4Yj2Po6Vm1Ks3Fb8Io7Wc0Te3Ur9Xn6Lq5Jp2Kd8Fs1Bt4Qy7Mw3Hg6Vo5" element={<Newjersky />} />

        <Route path="/" element={<Ds />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

if (fafa) {
  fafa.render(
    <React.StrictMode>
      <Router>
        <Routes> 
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

if (mkxby) {
  mkxby.render(
    <React.StrictMode>
      <Router>
        <Routes> 
        <Route path="/Luivuson" element={<Luivuson />} />
          <Route path="/Donjesck" element={<Donjesck />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
reportWebVitals();