set_languages('cxx14')

add_ldflags('-undefined dynamic_lookup')
-- set_policy("check.auto_ignore_flags", false)

target('addon')
set_filename('addon.node')

set_kind('binary')

-- start xmake-config here
-- add_includedirs(os.getenv('NODE_HEADERS'))
add_includedirs(
  '/home/dragosc/.cache/node-gyp/12.20.2/include/node',
  '/home/dragosc/Workspace/templates/node-addon-nan/node_modules/nan'
)
-- end xmake-config here

add_files('$(projectdir)/src/*.cc')
