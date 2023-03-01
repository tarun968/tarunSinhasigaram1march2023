import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Card from './pageOne/pageOne';
function App() {
  const [Products, setProducts] = useState([
    {
      id: 1,
      selected: false
    },
    {
      id: 2,
      selected: false
    }, {
      id: 3,
      selected: false
    }, {
      id: 4,
      selected: false
    }, {
      id: 5,
      selected: false
    }, {
      id: 6,
      selected: false
    }, {
      id: 7,
      selected: false
    }, {
      id: 8,
      selected: false
    }, {
      id: 9,
      selected: false
    }, {
      id: 10,
      selected: false
    }, {
      id: 11,
      selected: false
    }, {
      id: 12,
      selected: false
    }, {
      id: 13,
      selected: false
    }, {
      id: 14,
      selected: true
    }, {
      id: 15,
      selected: false
    }, {
      id: 16,
      selected: false
    }])


  // useEffect(() => {
  // }, [Products])

  var selected = []
  const colorChange = (id) => {
  if (selected.length < 2) {
      var objIndex = Products.findIndex((x => x.id === id))
      Products[objIndex].selected = true;
      selected.push(Products[objIndex])
      document.getElementById(id).style.backgroundColor = "red"
    }
    else {
      console.log(selected)
      var idOffirst = selected[0].id;
      var objIndex2 = Products.findIndex((x => x.id === idOffirst))
      Products[objIndex2].selected = false;
      document.getElementById(idOffirst).style.backgroundColor = "blue"
      selected.shift();
      console.log(selected)
      var objIndex = Products.findIndex((x => x.id === id))
      Products[objIndex].selected = true;
      selected.push(Products[objIndex])
      console.log(document.getElementById(id))
      document.getElementById(id).style.backgroundColor = "red"
    }
    console.log(Products, selected)

  }
  console.log(Products)
  return (
    <div className="row">
      <div className="mx-auto row row-cols-md-1 col-md-6">
<h1>
  Made By Tarun Sinha
  <br></br>
  Email : tarunritu968@gmail.com
</h1>
        {(
          Products.map((content, index) => {
            console.log(`${content.selected}`)
            return (
              <div
                className="col mx-2 my-2"
                id={`${content.id}`}
                style={{ height: "30%",width: '20%', backgroundColor: "blue" }}
                onClick={() => { colorChange(content.id) }}
              >
                <Card
                  Props={content}
                />
              </div>
            )
          })
        )}
      </div>
    </div>
  );
}

export default App;
