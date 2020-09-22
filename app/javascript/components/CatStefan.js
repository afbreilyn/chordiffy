import React from "react"
import PropTypes from "prop-types"
class CatStefan extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

CatStefan.propTypes = {
  greeting: PropTypes.string
};
export default CatStefan
