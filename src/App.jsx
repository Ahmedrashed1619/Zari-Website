import Navbar from './componants/Navbar/Navbar';
import Chat from './componants/Chat/Chat';
import Home from './componants/Home/Home';
import About from './componants/About/About';
import Services from './componants/Services/Services';
import Products from './componants/Products/Products';
import Projects from './componants/Projects/Projects';
import Previous from './componants/Previous/Previous';
import Join from './componants/Join/Join';
import Contact from './componants/Contact/Contact';
import Footer from './componants/Footer/Footer';
import Notfound from './componants/Notfound/Notfound';
import Faq from './componants/FAQ/Faq';
import Privacy from './componants/Privacy/Privacy';
import Terms from './componants/Terms/Terms';
import Product from './componants/Product/Product';
import Project from './componants/Project/Project';
import Service from './componants/Service/Service';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import $ from 'jquery';
import { useState } from 'react';
import axios from 'axios';


function App() {


    useEffect(() => {

      $('#btnTopFooter').click(function () {
        $('html , body').animate({ scrollTop: 0 }, 300);
      })

      return () => {
        $('#btnTopFooter').click(function () {
          $('html , body').animate({ scrollTop: 0 }, 300);
        })
      }

    }, [])


        // nav data 
        let [fetchNav, setFetchNav] = useState([]);
        async function getDataNav() {
          await axios.get(`http://66.29.139.205/zarimain/public/api/navpaths`)
            .then(res => {
              if (res.status === 200 && res.request.readyState === 4) {
                setFetchNav(res.data);
              }
            })
            .catch(err => {
              console.log(err);
            })
        }
        useEffect(() => {
    
          getDataNav();
    
        }, [])


    // Home data 
    let [fetchHome, setFetchHome] = useState([]);
    async function getDataHome() {
      await axios.get(`http://66.29.139.205/zarimain/public/api/home`)
        .then(res => {
          if (res.status === 200 && res.request.readyState === 4) {
            setFetchHome(res.data);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    useEffect(() => {

      getDataHome();

    }, [])


    // About data 
    let [fetchAbout, setFetchAbout] = useState([]);
    async function getDataAbout() {
      await axios.get(`http://66.29.139.205/zarimain/public/api/about`)
        .then(res => {
          if (res.status === 200 && res.request.readyState === 4) {
            setFetchAbout(res.data);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    useEffect(() => {

      getDataAbout();

    }, [])


    // Services data 
    let [fetchServices, setFetchServices] = useState([]);
    async function getDataServices() {
      await axios.get(`http://66.29.139.205/zarimain/public/api/services`)
        .then(res => {
          if (res.status === 200 && res.request.readyState === 4) {
            setFetchServices(res.data);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    useEffect(() => {

      getDataServices();

    }, [])


    // Products data 
    let [fetchProducts, setFetchProducts] = useState([]);
    async function getDataProducts() {
      await axios.get(`http://66.29.139.205/zarimain/public/api/products`)
        .then(res => {
          if (res.status === 200 && res.request.readyState === 4) {
            setFetchProducts(res.data);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    useEffect(() => {

      getDataProducts();

    }, [])


    // Projects data 
    let [fetchProjects, setFetchProjects] = useState([]);
    async function getDataProjects() {
      await axios.get(`http://66.29.139.205/zarimain/public/api/projects`)
        .then(res => {
          if (res.status === 200 && res.request.readyState === 4) {
            setFetchProjects(res.data);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    useEffect(() => {

      getDataProjects();

    }, [])


    // works data 
    let [fetchWorks, setFetchWorks] = useState([]);
    async function getDataWorks() {
      await axios.get(`http://66.29.139.205/zarimain/public/api/works`)
        .then(res => {
          if (res.status === 200 && res.request.readyState === 4) {
            setFetchWorks(res.data);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    useEffect(() => {
  
      getDataWorks();
  
    }, [])


    // faqs data
    let [fetchFaqs, setFetchFaqs] = useState([]);
    async function getDataFaqs() {
      await axios.get(`http://66.29.139.205/zarimain/public/api/faqs`)
        .then(res => {
          if (res.status === 200 && res.request.readyState === 4) {
            setFetchFaqs(res.data);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    useEffect(() => {
      getDataFaqs();
    }, [])


    // policy data
    let [fetchPolicy, setFetchPolicy] = useState([]);
    async function getDataPolicy() {
      await axios.get(`http://66.29.139.205/zarimain/public/api/policies`)
        .then(res => {
          if (res.status === 200 && res.request.readyState === 4) {
            setFetchPolicy(res.data);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    useEffect(() => {
      getDataPolicy();
    }, [])


    // terms data
    let [fetchTerms, setFetchTerms] = useState([]);
    async function getDataTerms() {
      await axios.get(`http://66.29.139.205/zarimain/public/api/terms`)
        .then(res => {
          if (res.status === 200 && res.request.readyState === 4) {
            setFetchTerms(res.data);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    useEffect(() => {
      getDataTerms();
    }, [])

    


  return (

    <>
      <Navbar fetchNav={fetchNav} fetchProjects={fetchProjects} />

      <Chat />
      <Routes>

          <Route path='/' element={Object.keys(fetchHome).length > 0 ? <Home fetchHome={fetchHome} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>}>
          </Route>

          <Route path='home' element={Object.keys(fetchHome).length > 0 ? <Home fetchHome={fetchHome} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>}>
          </Route>

          <Route path='about' element={Object.keys(fetchAbout).length > 0 ? <About fetchAbout={fetchAbout} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>}>
          </Route>

          <Route path='services' element={Object.keys(fetchServices).length > 0 ? <Services fetchServices={fetchServices} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>}>
          </Route>

          <Route path='products' element={Object.keys(fetchProducts).length > 0 ? <Products fetchProducts={fetchProducts} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>}>
          </Route>

          <Route path='projects' element={Object.keys(fetchProjects).length > 0 ? <Projects fetchProjects={fetchProjects} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>}>
          </Route>

          <Route path='previous' element={Object.keys(fetchWorks).length > 0 ? <Previous fetchWorks={fetchWorks} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>}>
          </Route>

          <Route path='services/:id' element={<Service />} />

          <Route path='products/:id' element={<Product />} />

          <Route path='projects/:id' element={<Project />}></Route>

          <Route path='share' element={<Contact />}></Route>

          <Route path='join' element={<Join />}></Route>

          <Route path='contact' element={<Contact />}></Route>

          <Route path='faq' element={Object.keys(fetchFaqs).length > 0 ? <Faq fetchFaqs={fetchFaqs}/> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>}>
          </Route>

          <Route path='privacy' element={Object.keys(fetchPolicy).length > 0 ? <Privacy fetchPolicy={fetchPolicy}/> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>}>
          </Route>

          <Route path='terms' element={Object.keys(fetchTerms).length > 0 ? <Terms fetchTerms={fetchTerms}/> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>}>
          </Route>

          <Route path='*' element={<Notfound />}></Route>

      </Routes>
      <Footer />
    </>

  );
}

export default App;
