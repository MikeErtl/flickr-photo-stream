// import { connect } from 'react-redux';
// import Carousel from '../components/carousel';

// const getVisibleCarousel = ( photocards, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       console.log("MIKE SHOW_ALL in visiblecarousel.js")
//       return photocards;
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }
// }

// const mapStateToProps = (state) => ({
//   photocards: getVisibleCarousel(state.photocards, state.visibilityFilter)
// })

// const mapDispatchToProps = {
// }

// const VisibleCarousel = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Carousel)

// export default VisibleCarousel