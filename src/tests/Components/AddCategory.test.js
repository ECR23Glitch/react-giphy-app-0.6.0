import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import React from 'react';
import '@testing-library/jest-dom';

describe('Pruebas en el componente AddCategory', () => {
    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>)

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })

    test('Debe de mostrarse correctamente', () => {
    
        expect(wrapper).toMatchSnapshot();
    
    })
    

    test('Debe de cambiar el input ', () => {
        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        input.simulate('Change',{ target:{ value} })

        expect(wrapper.find('p').text().trim()).toBe(value);
    })


    test('No debe de postear la informacion con submit ', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect(setCategories).not.toHaveBeenCalled()
    })
    

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Elias'

        wrapper.find('input').simulate('change',{target:{value}})
        wrapper.find('form').simulate('submit',{preventDefault(){}})
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
        expect(wrapper.find('input').prop('value')).toBe('')
    })
    
    
})
