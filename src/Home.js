import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
           <img className="home__banner" src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.15752-9/125184990_390127882131807_6514453098039819221_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=hTe0OFQB3QkAX__bVoG&_nc_ht=scontent-cdg2-1.xx&oh=d63f26e71dbcc4a7ba27cd9d2d0e72c6&oe=5FD188B1" alt=""/>
           <div className="home__row">
            <Product id="123456" title="Bilisder Gant Chauffant 3 Température Réglable 3.7V/4000mAh Gant Chauffant Électriques pour Hommes Femmes Extérieur Chaud..." 
            price={12.99} rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71lCXdqEs-L._AC_SL1500_.jpg"
            />
            <Product id="123456" title="Nintendo Manette Switch Pro" 
            price={12.99} rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61nTY52RHGL._AC_SL1258_.jpg"
            />
            </div>
            <div className="home__row">
            <Product id="123456" title="VÉLO TOUT CHEMIN RIVERSIDE 100 NOIR" 
            price={12.99} rating={5}
            image="https://contents.mediadecathlon.com/p1278143/k$dd7204716b2fd0403424dec3fdcc6c8b/sq/V+LO+TOUT+CHEMIN+RIVERSIDE+100+NOIR.webp?f=1000x1000"
            />
            <Product id="123456" title="CHAUSSURE COAST STAR" 
            price={12.99} rating={5}
            image="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/162894157a3f4f5f88e2aaa200e56799_9366/Chaussure_Coast_Star_Blanc_EE6198_04_standard.jpg"
            />
            <Product id="123456" title="Book : Steve Jobs" 
            price={12.99} rating={5}
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSqtgfX3gB_OsR-vfJ5BoP8QRkFk_cPRI5IboY8PTOBKekgC3Iul_f6b7yrDjJQ1Ds-SWd67YszMaZ36ys3KOf-jFG5tGAETXRGgPggB0sW9u-EJijYG24x&usqp=CAE"
            />
            </div>
            <div className="home__row">
            <Product id="123456" title="MADE Lit Double 140 X 200" 
            price={12.99} rating={5}
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTX38YnsYS8wXbC1e0DUMjPKFBBhFEroUdw7vG4rHXw9eDbWensmW2wNxBnhH5TnX9nW2hTSyr6jxgoxUBoN7OMfRu41ym83bEzhYGesRMDoLpGEX4vV-V8&usqp=CAE"
            />
            </div>
        </div>
    )
}

export default Home
