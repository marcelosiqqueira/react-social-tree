import './App.css'


function App(){

  return (
    <div className="container">
      <div className="children">
          <div className='imgDiv'>
            <img id='imgProfile' src="./mypicturePng.png" alt="foto perfil"/>
          </div>
          <button> 
            <a className="link" href="https://github.com/marcelosiqqueira" target="_blank">GitHub</a>
          </button>
          <button>
            <a className="link" href="https://www.linkedin.com/in/marcelo-siqueira-filho-625403262/" target="_blank">Linkedin</a>
          </button>

          <button className="link">
            <a href="https://www.instagram.com/marcelosiqqueira/" target="_blank">Instagram</a>
          </button>
          <footer>
              <div className="socials">
                <img src="./github.svg" alt="githubImg"/>
                <img src="./linkedin.svg" alt="linkedinImg"/>
                <img src="./instagram.svg" alt="instagramImg"/>
              </div>
          </footer>
        </div>
    </div>
  )
}

export default App;
