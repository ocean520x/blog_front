import admin from '@/router/admin'
import auth from './auth'
import front from './front'
import person from './person'
// import error from '@/router/error';
// import member from '@/router/member';

export default [front, auth, ...admin, person]
// export default [front, person, member, auth, ...admin, error];
