import NavBar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './assets/style/Home.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function App() {
  return (
    <>
    <div className="Page">
      <NavBar />
        <main className="Body">
          <div id="hautDePage" className="bg-custom d-flex flex-column align-items-center justify-content-center">
            <h1>Bonjour, Je suis Rémi PASSEREL</h1>
            <h2>Developpeur web Full Stack</h2>
            <button>En savoir plus</button>
          </div>
          <div className='basDePage'>
            <div className='about'>
              <h3>A propos</h3>
              <img src='src/assets/illustrations/john-doe-about.jpg' alt='' className='aboutPicture'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor tempus tellus, a dictum nisi dapibus ut. Quisque sapien metus, gravida ut varius in, rutrum ut mauris. Mauris et velit nec odio interdum iaculis ut et orci. Etiam interdum ullamcorper elit a condimentum. Vivamus ac diam placerat odio vehicula bibendum. Curabitur finibus, quam et viverra tincidunt, quam sem suscipit elit, non lacinia sapien dui vel mauris. Morbi non maximus ex. Curabitur semper rutrum ante at consequat. Pellentesque sit amet sapien et mauris porta mollis. Phasellus vel nisl libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <p>Suspendisse potenti. Morbi et eros blandit, imperdiet tortor vitae, tincidunt ligula. Phasellus sed sagittis nunc. Vestibulum facilisis mi quis neque luctus, sed venenatis nibh tincidunt. Phasellus blandit leo non ullamcorper sollicitudin. Nunc pharetra mi id ipsum pretium egestas. Donec vitae erat a nulla cursus aliquam et a felis. Nam consectetur felis ut risus posuere, interdum euismod dui dictum. Sed quis efficitur purus. Quisque pellentesque porttitor mauris, eu tempus ante aliquam tempus. Maecenas nec fringilla ex. Nulla facilisi. Maecenas dictum, justo et elementum laoreet, nunc purus eleifend augue, rutrum rutrum purus nisi sed sapien. Vivamus ac massa accumsan, varius quam eget, sagittis odio.
              </p>
              <p>Integer vitae risus nec erat iaculis iaculis. Nulla nec tortor euismod, ornare ipsum in, iaculis orci. Sed tempus sit amet est molestie porta. Mauris ac leo ipsum. Quisque iaculis tristique blandit. Duis laoreet sapien eget tristique efficitur. In vitae nunc eu nulla feugiat eleifend ac fringilla massa. Fusce elementum ornare magna vel pulvinar. Pellentesque eu vulputate dui, a iaculis eros. Morbi quis condimentum ligula. Morbi laoreet molestie nulla, vitae ultrices nulla scelerisque vel. Mauris quis ornare lorem. Ut scelerisque aliquet tortor ut pretium. Cras cursus nunc mauris, at consequat turpis scelerisque quis. Cras venenatis mollis dui, sollicitudin consequat nunc pellentesque eget. Curabitur faucibus ante eget felis lacinia, non lobortis urna condimentum.
              </p>
            </div>
            <div className='skills'> 
              <h3>Mes compétences</h3>
              <div>
                <label>HTML :</label>
                <ProgressBar variant="success" now={80} />
                <label>JS :</label>
                <ProgressBar variant="info" now={20} />
                <label>PhP :</label>
                <ProgressBar variant="warning" now={5} />
                <label>MySQL :</label>
                <ProgressBar variant="danger" now={0} />
              </div>

            </div>
          </div>
        </main>
      <Footer />
    </div>
    </>
  )
}

export default App
