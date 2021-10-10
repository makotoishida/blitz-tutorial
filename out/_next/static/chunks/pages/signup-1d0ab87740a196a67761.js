;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [616],
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
              function a(e) {
                try {
                  u(n.next(e))
                } catch (t) {
                  i(t)
                }
              }
              function c(e) {
                try {
                  u(n.throw(e))
                } catch (t) {
                  i(t)
                }
              }
              function u(e) {
                var t
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(a, c)
              }
              u((n = n.apply(e, t || [])).next())
            })
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              n,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1]
                  return o[1]
                },
                trys: [],
                ops: [],
              }
            return (
              (i = { next: c(0), throw: c(1), return: c(2) }),
              "function" === typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this
                }),
              i
            )
            function c(i) {
              return function (c) {
                return (function (i) {
                  if (r) throw new TypeError("Generator is already executing.")
                  for (; a; )
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
                          return a.label++, { value: i[1], done: !1 }
                        case 5:
                          a.label++, (n = i[1]), (i = [0])
                          continue
                        case 7:
                          ;(i = a.ops.pop()), a.trys.pop()
                          continue
                        default:
                          if (
                            !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0])
                          ) {
                            a = 0
                            continue
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            a.label = i[1]
                            break
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            ;(a.label = o[1]), (o = i)
                            break
                          }
                          if (o && a.label < o[2]) {
                            ;(a.label = o[2]), a.ops.push(i)
                            break
                          }
                          o[2] && a.ops.pop(), a.trys.pop()
                          continue
                      }
                      i = t.call(e, a)
                    } catch (c) {
                      ;(i = [6, c]), (n = 0)
                    } finally {
                      r = o = 0
                    }
                  if (5 & i[0]) throw i[1]
                  return { value: i[0] ? i[1] : void 0, done: !0 }
                })([i, c])
              }
            }
          },
        a =
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
      var c = r(7910),
        u = r(8679),
        s = r(7294)
      ;(t.withSuperJSONProps = function (e, t) {
        return (
          void 0 === t && (t = []),
          function () {
            for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a]
            return o(this, void 0, void 0, function () {
              var o, a, u, s, l, f
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, e.apply(void 0, r)]
                  case 1:
                    return "props" in (o = i.sent()) && o.props
                      ? ((a = t.map(function (e) {
                          var t = o.props[e]
                          return delete o.props[e], t
                        })),
                        (u = c.default.serialize(o.props)),
                        (s = u.json),
                        (l = u.meta),
                        (f = s),
                        l && (f._superjson = l),
                        t.forEach(function (e, t) {
                          var r = a[t]
                          "undefined" !== typeof r && (f[e] = r)
                        }),
                        [2, n(n({}, o), { props: f })])
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
              o = a(t, ["_superjson"])
            return s.createElement(e, n({}, c.default.deserialize({ json: o, meta: r })))
          }
          return u(t, e), t
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
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        c = {}
      function u(e) {
        return n.isMemo(e) ? a : c[e.$$typeof] || o
      }
      ;(c[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (c[n.Memo] = a)
      var s = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        y = Object.getPrototypeOf,
        d = Object.prototype
      e.exports = function e(t, r, n) {
        if ("string" !== typeof r) {
          if (d) {
            var o = y(r)
            o && o !== d && e(t, o, n)
          }
          var a = l(r)
          f && (a = a.concat(f(r)))
          for (var c = u(t), m = u(r), h = 0; h < a.length; ++h) {
            var b = a[h]
            if (!i[b] && (!n || !n[b]) && (!m || !m[b]) && (!c || !c[b])) {
              var v = p(r, b)
              try {
                s(t, b, v)
              } catch (S) {}
            }
          }
        }
        return t
      }
    },
    1660: function (e, t, r) {
      "use strict"
      r.r(t),
        r.d(t, {
          default: function () {
            return S
          },
        })
      var n = r(3544),
        o = r(2766),
        i = r(6481),
        a = r(809),
        c = r.n(a),
        u = r(2809),
        s = r(266),
        l = r(3717),
        f = r(1428),
        p = r(2041),
        y = r(876),
        d = (0, f.buildRpcClient)({
          resolverName: "signup",
          resolverType: "mutation",
          routePath: "/api/rpc/signup",
        }),
        m = r(4414),
        h = r(5893),
        b = function (e) {
          var t = (0, f.useMutation)(d),
            r = (0, l.Z)(t, 1)[0]
          return (0, h.jsxs)("div", {
            children: [
              (0, h.jsx)("h1", { children: "Create an Account" }),
              (0, h.jsxs)(y.l0, {
                submitText: "Create Account",
                schema: m.Al,
                initialValues: { email: "", password: "" },
                onSubmit: (function () {
                  var t = (0, s.Z)(
                    c().mark(function t(n) {
                      var o, i, a
                      return c().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.prev = 0), (t.next = 3), r(n)
                              case 3:
                                null === (o = e.onSuccess) || void 0 === o || o.call(e),
                                  (t.next = 13)
                                break
                              case 6:
                                if (
                                  ((t.prev = 6),
                                  (t.t0 = t.catch(0)),
                                  "P2002" !== t.t0.code ||
                                    null === (i = t.t0.meta) ||
                                    void 0 === i ||
                                    null === (a = i.target) ||
                                    void 0 === a ||
                                    !a.includes("email"))
                                ) {
                                  t.next = 12
                                  break
                                }
                                return t.abrupt("return", {
                                  email: "This email is already being used",
                                })
                              case 12:
                                return t.abrupt("return", (0, u.Z)({}, y.Ck, t.t0.toString()))
                              case 13:
                              case "end":
                                return t.stop()
                            }
                        },
                        t,
                        null,
                        [[0, 6]]
                      )
                    })
                  )
                  return function (e) {
                    return t.apply(this, arguments)
                  }
                })(),
                children: [
                  (0, h.jsx)(p.I, { name: "email", label: "Email", placeholder: "Email" }),
                  (0, h.jsx)(p.I, {
                    name: "password",
                    label: "Password",
                    placeholder: "Password",
                    type: "password",
                  }),
                ],
              }),
            ],
          })
        },
        v = function () {
          var e = (0, o.tv)()
          return (0, h.jsx)("div", {
            children: (0, h.jsx)(b, {
              onSuccess: function () {
                return e.push(o.Z5.Home())
              },
            }),
          })
        }
      ;(v.redirectAuthenticatedTo = "/"),
        (v.getLayout = function (e) {
          return (0, h.jsx)(i.Z, { title: "Sign Up", children: e })
        })
      var S = (0, n.withSuperJSONPage)(v)
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
    3235: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/signup",
        function () {
          return r(1660)
        },
      ])
    },
    9921: function (e, t) {
      "use strict"
      var r = "function" === typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        c = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        s = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        y = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        h = r ? Symbol.for("react.lazy") : 60116,
        b = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        S = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119
      function g(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case l:
                case f:
                case i:
                case c:
                case a:
                case y:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case p:
                    case h:
                    case m:
                    case u:
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
      function x(e) {
        return g(e) === f
      }
      ;(t.AsyncMode = l),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = s),
        (t.ContextProvider = u),
        (t.Element = n),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = h),
        (t.Memo = m),
        (t.Portal = o),
        (t.Profiler = c),
        (t.StrictMode = a),
        (t.Suspense = y),
        (t.isAsyncMode = function (e) {
          return x(e) || g(e) === l
        }),
        (t.isConcurrentMode = x),
        (t.isContextConsumer = function (e) {
          return g(e) === s
        }),
        (t.isContextProvider = function (e) {
          return g(e) === u
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
          return g(e) === h
        }),
        (t.isMemo = function (e) {
          return g(e) === m
        }),
        (t.isPortal = function (e) {
          return g(e) === o
        }),
        (t.isProfiler = function (e) {
          return g(e) === c
        }),
        (t.isStrictMode = function (e) {
          return g(e) === a
        }),
        (t.isSuspense = function (e) {
          return g(e) === y
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === i ||
            e === f ||
            e === c ||
            e === a ||
            e === y ||
            e === d ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === h ||
                e.$$typeof === m ||
                e.$$typeof === u ||
                e.$$typeof === s ||
                e.$$typeof === p ||
                e.$$typeof === v ||
                e.$$typeof === S ||
                e.$$typeof === w ||
                e.$$typeof === b))
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
      return (t = 3235), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
