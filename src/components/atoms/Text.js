import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const Text = props => {
    const {children, ...rest} = props
    return (
        <Typography {...rest}>
            {children}
        </Typography>
    )
}
Text.defaultProps = {
    align: 'inherit',
    color: 'initial',
    display: 'initial',
    variant: 'body1',
    gutterBottom: false,
    noWrap:false,
    paragraph:false
}
Text.propTypes = {
    align: PropTypes.oneOf(['left','center','right','justify','inherit']),
    color: PropTypes.oneOf(['primary','secondary','textPrimary','textSecondary','error','initial']),
    display: PropTypes.oneOf(['block','inline','initial']),
    variant: PropTypes.oneOf(['h1','h2','h3','h4','h5','h6','subtitle1','subtitle2','body1','body2','caption','button','overline','srOnly','inherit']),
    gutterBottom: PropTypes.bool,
    noWrap: PropTypes.bool,
    paragraph: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string,PropTypes.node]).isRequired,
    
}

export default Text
