import React from 'react'
import Barra from '../barra/Barra';
import SiteCarousel from '../carousel/SiteCarousel';
import SiteHomeChiSiamo from '../home/SiteHomeChiSiamo';
import SiteHomeContatti from '../home/SiteHomeContatti';
import SiteHomeProdotti from '../home/SiteHomeProdotti';
import SiteHomeFooter from '../home/SiteHomeFooter';
import SiteNavbar from '../navbar/SiteNavbar';

export default function Home() {
  return (
    <>
    <SiteNavbar></SiteNavbar>
    <SiteCarousel></SiteCarousel>
    <SiteHomeChiSiamo></SiteHomeChiSiamo>
    <Barra></Barra>
    <SiteHomeProdotti></SiteHomeProdotti>
    <SiteHomeContatti></SiteHomeContatti>
    <SiteHomeFooter></SiteHomeFooter>
    </>
  )
}
