;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [459],
  {
    8487: function (e, t, r) {
      "use strict"
      r.d(t, {
        F: function () {
          return n.default
        },
      })
      var n = r(9008)
    },
    6200: function (e, t, r) {
      "use strict"
      var n =
          (this && this.__assign) ||
          function () {
            return (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                return e
              }).apply(this, arguments)
          },
        o =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (o, i) {
              function c(e) {
                try {
                  a(n.next(e))
                } catch (t) {
                  i(t)
                }
              }
              function u(e) {
                try {
                  a(n.throw(e))
                } catch (t) {
                  i(t)
                }
              }
              function a(e) {
                var t
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(c, u)
              }
              a((n = n.apply(e, t || [])).next())
            })
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              n,
              o,
              i,
              c = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1]
                  return o[1]
                },
                trys: [],
                ops: [],
              }
            return (
              (i = { next: u(0), throw: u(1), return: u(2) }),
              "function" === typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this
                }),
              i
            )
            function u(i) {
              return function (u) {
                return (function (i) {
                  if (r) throw new TypeError("Generator is already executing.")
                  for (; c; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (o =
                            2 & i[0]
                              ? n.return
                              : i[0]
                              ? n.throw || ((o = n.return) && o.call(n), 0)
                              : n.next) &&
                          !(o = o.call(n, i[1])).done)
                      )
                        return o
                      switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i
                          break
                        case 4:
                          return c.label++, { value: i[1], done: !1 }
                        case 5:
                          c.label++, (n = i[1]), (i = [0])
                          continue
                        case 7:
                          ;(i = c.ops.pop()), c.trys.pop()
                          continue
                        default:
                          if (
                            !(o = (o = c.trys).length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0])
                          ) {
                            c = 0
                            continue
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            c.label = i[1]
                            break
                          }
                          if (6 === i[0] && c.label < o[1]) {
                            ;(c.label = o[1]), (o = i)
                            break
                          }
                          if (o && c.label < o[2]) {
                            ;(c.label = o[2]), c.ops.push(i)
                            break
                          }
                          o[2] && c.ops.pop(), c.trys.pop()
                          continue
                      }
                      i = t.call(e, c)
                    } catch (u) {
                      ;(i = [6, u]), (n = 0)
                    } finally {
                      r = o = 0
                    }
                  if (5 & i[0]) throw i[1]
                  return { value: i[0] ? i[1] : void 0, done: !0 }
                })([i, u])
              }
            }
          },
        c =
          (this && this.__rest) ||
          function (e, t) {
            var r = {}
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
              var o = 0
              for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                t.indexOf(n[o]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                  (r[n[o]] = e[n[o]])
            }
            return r
          }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.withSuperJSONPage = t.withSuperJSONProps = void 0)
      var u = r(7910),
        a = r(8679),
        s = r(7294)
      ;(t.withSuperJSONProps = function (e, t) {
        return (
          void 0 === t && (t = []),
          function () {
            for (var r = [], c = 0; c < arguments.length; c++) r[c] = arguments[c]
            return o(this, void 0, void 0, function () {
              var o, c, a, s, f, l
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, e.apply(void 0, r)]
                  case 1:
                    return "props" in (o = i.sent()) && o.props
                      ? ((c = t.map(function (e) {
                          var t = o.props[e]
                          return delete o.props[e], t
                        })),
                        (a = u.default.serialize(o.props)),
                        (s = a.json),
                        (f = a.meta),
                        (l = s),
                        f && (l._superjson = f),
                        t.forEach(function (e, t) {
                          var r = c[t]
                          "undefined" !== typeof r && (l[e] = r)
                        }),
                        [2, n(n({}, o), { props: l })])
                      : [2, o]
                }
              })
            })
          }
        )
      }),
        (t.withSuperJSONPage = function (e) {
          function t(t) {
            var r = t._superjson,
              o = c(t, ["_superjson"])
            return s.createElement(e, n({}, u.default.deserialize({ json: o, meta: r })))
          }
          return a(t, e), t
        })
    },
    3544: function (e, t, r) {
      e.exports = r(6200)
    },
    8679: function (e, t, r) {
      "use strict"
      var n = r(9864),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        c = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        u = {}
      function a(e) {
        return n.isMemo(e) ? c : u[e.$$typeof] || o
      }
      ;(u[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (u[n.Memo] = c)
      var s = Object.defineProperty,
        f = Object.getOwnPropertyNames,
        l = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        y = Object.getPrototypeOf,
        d = Object.prototype
      e.exports = function e(t, r, n) {
        if ("string" !== typeof r) {
          if (d) {
            var o = y(r)
            o && o !== d && e(t, o, n)
          }
          var c = f(r)
          l && (c = c.concat(l(r)))
          for (var u = a(t), m = a(r), b = 0; b < c.length; ++b) {
            var h = c[b]
            if (!i[h] && (!n || !n[h]) && (!m || !m[h]) && (!u || !u[h])) {
              var v = p(r, h)
              try {
                s(t, h, v)
              } catch (S) {}
            }
          }
        }
        return t
      }
    },
    9077: function (e, t, r) {
      "use strict"
      r.r(t)
      var n = r(3544),
        o = r(2766),
        i = r(6481),
        c = r(8440),
        u = r(5893),
        a = function () {
          var e = (0, o.tv)()
          return (0, u.jsx)("div", {
            children: (0, u.jsx)(c.U, {
              onSuccess: function () {
                var t = e.query.next ? decodeURIComponent(e.query.next) : "/"
                e.push(t)
              },
            }),
          })
        }
      ;(a.redirectAuthenticatedTo = "/"),
        (a.getLayout = function (e) {
          return (0, u.jsx)(i.Z, { title: "Log In", children: e })
        }),
        (t.default = (0, n.withSuperJSONPage)(a))
    },
    6481: function (e, t, r) {
      "use strict"
      var n = r(8487),
        o = r(5893)
      t.Z = function (e) {
        var t = e.title,
          r = e.children
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(n.F, {
              children: [
                (0, o.jsx)("title", { children: t || "blitz-tutorial" }),
                (0, o.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            r,
          ],
        })
      }
    },
    2631: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/login",
        function () {
          return r(9077)
        },
      ])
    },
    9921: function (e, t) {
      "use strict"
      var r = "function" === typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        c = r ? Symbol.for("react.strict_mode") : 60108,
        u = r ? Symbol.for("react.profiler") : 60114,
        a = r ? Symbol.for("react.provider") : 60109,
        s = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        l = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        y = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116,
        h = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        S = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119
      function g(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case f:
                case l:
                case i:
                case u:
                case c:
                case y:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case p:
                    case b:
                    case m:
                    case a:
                      return e
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }
      function O(e) {
        return g(e) === l
      }
      ;(t.AsyncMode = f),
        (t.ConcurrentMode = l),
        (t.ContextConsumer = s),
        (t.ContextProvider = a),
        (t.Element = n),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = b),
        (t.Memo = m),
        (t.Portal = o),
        (t.Profiler = u),
        (t.StrictMode = c),
        (t.Suspense = y),
        (t.isAsyncMode = function (e) {
          return O(e) || g(e) === f
        }),
        (t.isConcurrentMode = O),
        (t.isContextConsumer = function (e) {
          return g(e) === s
        }),
        (t.isContextProvider = function (e) {
          return g(e) === a
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === n
        }),
        (t.isForwardRef = function (e) {
          return g(e) === p
        }),
        (t.isFragment = function (e) {
          return g(e) === i
        }),
        (t.isLazy = function (e) {
          return g(e) === b
        }),
        (t.isMemo = function (e) {
          return g(e) === m
        }),
        (t.isPortal = function (e) {
          return g(e) === o
        }),
        (t.isProfiler = function (e) {
          return g(e) === u
        }),
        (t.isStrictMode = function (e) {
          return g(e) === c
        }),
        (t.isSuspense = function (e) {
          return g(e) === y
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === i ||
            e === l ||
            e === u ||
            e === c ||
            e === y ||
            e === d ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === b ||
                e.$$typeof === m ||
                e.$$typeof === a ||
                e.$$typeof === s ||
                e.$$typeof === p ||
                e.$$typeof === v ||
                e.$$typeof === S ||
                e.$$typeof === w ||
                e.$$typeof === h))
          )
        }),
        (t.typeOf = g)
    },
    9864: function (e, t, r) {
      "use strict"
      e.exports = r(9921)
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 2631), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
