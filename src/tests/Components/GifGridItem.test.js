const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")
import React from 'react';

describe('Pruebas en Grif Item', () => {
    const title = 'Un titulo'
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('Debe mostrar el componente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe de tener un parrafo con el title ', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title);
    })
    
    test('Debe de tener la imagen al url y alt de los props ', () => {
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })
    

    test('Debe de tener animate_fadeIn', () => {
        const div = wrapper.find('div')
        const className = div.prop('className')
        expect(className.includes('animate__fadeIn')).toBe(true)
    })
    
})
