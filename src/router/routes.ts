import admin from '@/router/admin'
import error from '@/router/error'
import auth from './auth'
import front from './front'
import person from './person'
// import member from '@/router/member';

export default [front, auth, ...admin, person, error]
// export default [front, person, member, auth, ...admin, error];
