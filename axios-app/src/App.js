import React from 'react';
import PersonList from './component/personList.js';
// import path from 'path'

function app() {
  return (
    <div className="app">
      <PersonList />
    </div>
  );
}

// app.use(React.static(path.join(__dirname, "./client/build")));
// app.get("*", function (_, res) {
//     res.sendFile(
//         path.join(__dirname, "./client/build/index.html"),
//         function (err) {
//             res.status(500).send(err);
//         }
//     );
// });

// export default App;
export  default app;