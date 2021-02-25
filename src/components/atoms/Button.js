import React from 'react'
import PropTypes from 'prop-types'
import {Button as ButtonM} from "@material-ui/core";

const Button = props => {
    const {variant, color, label, endIcon, startIcon, className, fullWidth} = props
    return (
        <ButtonM variant={variant} color={color} endIcon={endIcon} startIcon={startIcon} className={className} fullWidth={fullWidth} >
            {label}
        </ButtonM>
    )
}
Button.defaultProps = {
    variant: 'contained',
    color: 'primary',
    fullWidth: false
}
Button.propTypes = {
    variant: PropTypes.oneOf(['contained','outlined','text']),
    color: PropTypes.oneOf(['primary', 'secondary','success','error','warning','info','inheri']),
    label: PropTypes.string.isRequired,
    endIcon: PropTypes.node,
    startIcon: PropTypes.node,
    fullWidth: PropTypes.bool
}

export default Button
