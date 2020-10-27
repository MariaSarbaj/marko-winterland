import React from 'react';
import ProductTypes from "../../ProductTypes/ProducktTypes";
import Description from "../../Description/Description";
import LineForm from "../../LineForm/LineForm";
import FormSection from "../../FormSection/FormSection";
import Article from "../../Article/Article";

const Content = props => {
    return(
        <>
            <ProductTypes/>
            <Description/>
            <LineForm/>
            <FormSection/>
            <Article/>

         </>
    )
}

export default Content