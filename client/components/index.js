/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */


/** 
 * Campus Components
 */
export {default as CampusList}  from './campus/campus-list';
export {default as CampusThumb} from './campus/campus-thumb';

/**
 * Student Components
 */
export {default as StudentList} from './student/student-list';

/**
 * Other Components
 */
export {default as Home}   from './home';
export {default as Navbar} from './navbar';