;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [742],
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
                  c(n.next(e))
                } catch (t) {
                  i(t)
                }
              }
              function s(e) {
                try {
                  c(n.throw(e))
                } catch (t) {
                  i(t)
                }
              }
              function c(e) {
                var t
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(a, s)
              }
              c((n = n.apply(e, t || [])).next())
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
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this
                }),
              i
            )
            function s(i) {
              return function (s) {
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
                    } catch (s) {
                      ;(i = [6, s]), (n = 0)
                    } finally {
                      r = o = 0
                    }
                  if (5 & i[0]) throw i[1]
                  return { value: i[0] ? i[1] : void 0, done: !0 }
                })([i, s])
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
      var s = r(7910),
        c = r(8679),
        u = r(7294)
      ;(t.withSuperJSONProps = function (e, t) {
        return (
          void 0 === t && (t = []),
          function () {
            for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a]
            return o(this, void 0, void 0, function () {
              var o, a, c, u, f, l
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
                        (c = s.default.serialize(o.props)),
                        (u = c.json),
                        (f = c.meta),
                        (l = u),
                        f && (l._superjson = f),
                        t.forEach(function (e, t) {
                          var r = a[t]
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
              o = a(t, ["_superjson"])
            return u.createElement(e, n({}, s.default.deserialize({ json: o, meta: r })))
          }
          return c(t, e), t
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
        s = {}
      function c(e) {
        return n.isMemo(e) ? a : s[e.$$typeof] || o
      }
      ;(s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[n.Memo] = a)
      var u = Object.defineProperty,
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
          var a = f(r)
          l && (a = a.concat(l(r)))
          for (var s = c(t), m = c(r), h = 0; h < a.length; ++h) {
            var b = a[h]
            if (!i[b] && (!n || !n[b]) && (!m || !m[b]) && (!s || !s[b])) {
              var v = p(r, b)
              try {
                u(t, b, v)
              } catch (w) {}
            }
          }
        }
        return t
      }
    },
    961: function (e, t, r) {
      "use strict"
      r.r(t),
        r.d(t, {
          default: function () {
            return b
          },
        })
      var n = r(809),
        o = r.n(n),
        i = r(2809),
        a = r(266),
        s = r(3717),
        c = r(3544),
        u = r(1428),
        f = r(6481),
        l = r(2041),
        p = r(876),
        y = r(4414),
        d = (0, u.buildRpcClient)({
          resolverName: "forgotPassword",
          resolverType: "mutation",
          routePath: "/api/rpc/forgotPassword",
        }),
        m = r(5893),
        h = function () {
          var e = (0, u.useMutation)(d),
            t = (0, s.Z)(e, 2),
            r = t[0],
            n = t[1].isSuccess
          return (0, m.jsxs)("div", {
            children: [
              (0, m.jsx)("h1", { children: "Forgot your password?" }),
              n
                ? (0, m.jsxs)("div", {
                    children: [
                      (0, m.jsx)("h2", { children: "Request Submitted" }),
                      (0, m.jsx)("p", {
                        children:
                          "If your email is in our system, you will receive instructions to reset your password shortly.",
                      }),
                    ],
                  })
                : (0, m.jsx)(p.l0, {
                    submitText: "Send Reset Password Instructions",
                    schema: y.oP,
                    initialValues: { email: "" },
                    onSubmit: (function () {
                      var e = (0, a.Z)(
                        o().mark(function e(t) {
                          return o().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.prev = 0), (e.next = 3), r(t)
                                  case 3:
                                    e.next = 8
                                    break
                                  case 5:
                                    return (
                                      (e.prev = 5),
                                      (e.t0 = e.catch(0)),
                                      e.abrupt(
                                        "return",
                                        (0, i.Z)(
                                          {},
                                          p.Ck,
                                          "Sorry, we had an unexpected error. Please try again."
                                        )
                                      )
                                    )
                                  case 8:
                                  case "end":
                                    return e.stop()
                                }
                            },
                            e,
                            null,
                            [[0, 5]]
                          )
                        })
                      )
                      return function (t) {
                        return e.apply(this, arguments)
                      }
                    })(),
                    children: (0, m.jsx)(l.I, {
                      name: "email",
                      label: "Email",
                      placeholder: "Email",
                    }),
                  }),
            ],
          })
        }
      ;(h.redirectAuthenticatedTo = "/"),
        (h.getLayout = function (e) {
          return (0, m.jsx)(f.Z, { title: "Forgot Your Password?", children: e })
        })
      var b = (0, c.withSuperJSONPage)(h)
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
    7240: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/forgot-password",
        function () {
          return r(961)
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
        s = r ? Symbol.for("react.profiler") : 60114,
        c = r ? Symbol.for("react.provider") : 60109,
        u = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        l = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        y = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        h = r ? Symbol.for("react.lazy") : 60116,
        b = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        w = r ? Symbol.for("react.responder") : 60118,
        S = r ? Symbol.for("react.scope") : 60119
      function g(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case f:
                case l:
                case i:
                case s:
                case a:
                case y:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case p:
                    case h:
                    case m:
                    case c:
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
        return g(e) === l
      }
      ;(t.AsyncMode = f),
        (t.ConcurrentMode = l),
        (t.ContextConsumer = u),
        (t.ContextProvider = c),
        (t.Element = n),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = h),
        (t.Memo = m),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = y),
        (t.isAsyncMode = function (e) {
          return x(e) || g(e) === f
        }),
        (t.isConcurrentMode = x),
        (t.isContextConsumer = function (e) {
          return g(e) === u
        }),
        (t.isContextProvider = function (e) {
          return g(e) === c
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
          return g(e) === s
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
            e === l ||
            e === s ||
            e === a ||
            e === y ||
            e === d ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === h ||
                e.$$typeof === m ||
                e.$$typeof === c ||
                e.$$typeof === u ||
                e.$$typeof === p ||
                e.$$typeof === v ||
                e.$$typeof === w ||
                e.$$typeof === S ||
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
      return (t = 7240), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
