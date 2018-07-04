import React, { Component } from "react";
import { connect } from 'react-redux'

import PropTypes from 'prop-types';

const App = (props)=>{
    let input;
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                props.onClick(input.value);
                input.value = '';
            }}>
                <input ref={node => { input = node }} />
                <button type="submit"> Añadir tarea </button>
            </form>
            {
                props.products && <ul>
                    {
                        props.products.map((p, k)=>(
                            <li key={k}>{p.name}</li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}

App.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
    }))
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (val) => {
            dispatch({
                type: "ADD",
                product: val
            })
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);