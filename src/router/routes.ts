import admin from '@/router/admin'
import error from '@/router/error'
import member from '@/router/member'
import auth from './auth'
import front from './front'
import person from './person'

export default [front, person, member, auth, ...admin, error]
