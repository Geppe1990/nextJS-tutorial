import React from 'react';
import '../styles/global.css';

// Questo componente è il top-level dell'applicazione e sarà common attraverso tutte le pagine.
// Viene usato per mantenere lo stato navigando attraverso le pagine ad esempio.
// I CSS Globali possono venire richiamati solo all'interno di questa pagina

const App = ({ Component, pageProps }) => (
	<Component {...pageProps} />
);

export default App;