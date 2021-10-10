;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6],
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
            return new (r || (r = Promise))(function (o, s) {
              function a(e) {
                try {
                  c(n.next(e))
                } catch (t) {
                  s(t)
                }
              }
              function i(e) {
                try {
                  c(n.throw(e))
                } catch (t) {
                  s(t)
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
                        })).then(a, i)
              }
              c((n = n.apply(e, t || [])).next())
            })
          },
        s =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              n,
              o,
              s,
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
              (s = { next: i(0), throw: i(1), return: i(2) }),
              "function" === typeof Symbol &&
                (s[Symbol.iterator] = function () {
                  return this
                }),
              s
            )
            function i(s) {
              return function (i) {
                return (function (s) {
                  if (r) throw new TypeError("Generator is already executing.")
                  for (; a; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (o =
                            2 & s[0]
                              ? n.return
                              : s[0]
                              ? n.throw || ((o = n.return) && o.call(n), 0)
                              : n.next) &&
                          !(o = o.call(n, s[1])).done)
                      )
                        return o
                      switch (((n = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                        case 0:
                        case 1:
                          o = s
                          break
                        case 4:
                          return a.label++, { value: s[1], done: !1 }
                        case 5:
                          a.label++, (n = s[1]), (s = [0])
                          continue
                        case 7:
                          ;(s = a.ops.pop()), a.trys.pop()
                          continue
                        default:
                          if (
                            !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                            (6 === s[0] || 2 === s[0])
                          ) {
                            a = 0
                            continue
                          }
                          if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                            a.label = s[1]
                            break
                          }
                          if (6 === s[0] && a.label < o[1]) {
                            ;(a.label = o[1]), (o = s)
                            break
                          }
                          if (o && a.label < o[2]) {
                            ;(a.label = o[2]), a.ops.push(s)
                            break
                          }
                          o[2] && a.ops.pop(), a.trys.pop()
                          continue
                      }
                      s = t.call(e, a)
                    } catch (i) {
                      ;(s = [6, i]), (n = 0)
                    } finally {
                      r = o = 0
                    }
                  if (5 & s[0]) throw s[1]
                  return { value: s[0] ? s[1] : void 0, done: !0 }
                })([s, i])
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
      var i = r(7910),
        c = r(8679),
        u = r(7294)
      ;(t.withSuperJSONProps = function (e, t) {
        return (
          void 0 === t && (t = []),
          function () {
            for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a]
            return o(this, void 0, void 0, function () {
              var o, a, c, u, f, l
              return s(this, function (s) {
                switch (s.label) {
                  case 0:
                    return [4, e.apply(void 0, r)]
                  case 1:
                    return "props" in (o = s.sent()) && o.props
                      ? ((a = t.map(function (e) {
                          var t = o.props[e]
                          return delete o.props[e], t
                        })),
                        (c = i.default.serialize(o.props)),
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
            return u.createElement(e, n({}, i.default.deserialize({ json: o, meta: r })))
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
        s = {
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
        i = {}
      function c(e) {
        return n.isMemo(e) ? a : i[e.$$typeof] || o
      }
      ;(i[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (i[n.Memo] = a)
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
          for (var i = c(t), m = c(r), h = 0; h < a.length; ++h) {
            var b = a[h]
            if (!s[b] && (!n || !n[b]) && (!m || !m[b]) && (!i || !i[b])) {
              var w = p(r, b)
              try {
                u(t, b, w)
              } catch (v) {}
            }
          }
        }
        return t
      }
    },
    3831: function (e, t, r) {
      "use strict"
      r.r(t),
        r.d(t, {
          default: function () {
            return v
          },
        })
      var n = r(809),
        o = r.n(n),
        s = r(2809),
        a = r(266),
        i = r(3717),
        c = r(3544),
        u = r(2766),
        f = r(1428),
        l = r(1664),
        p = r(6481),
        y = r(2041),
        d = r(876),
        m = r(4414),
        h = (0, f.buildRpcClient)({
          resolverName: "resetPassword",
          resolverType: "mutation",
          routePath: "/api/rpc/resetPassword",
        }),
        b = r(5893),
        w = function () {
          var e = (0, u.oN)(),
            t = (0, f.useMutation)(h),
            r = (0, i.Z)(t, 2),
            n = r[0],
            c = r[1].isSuccess
          return (0, b.jsxs)("div", {
            children: [
              (0, b.jsx)("h1", { children: "Set a New Password" }),
              c
                ? (0, b.jsxs)("div", {
                    children: [
                      (0, b.jsx)("h2", { children: "Password Reset Successfully" }),
                      (0, b.jsxs)("p", {
                        children: [
                          "Go to the ",
                          (0, b.jsx)(l.Link, { href: u.Z5.Home(), children: "homepage" }),
                        ],
                      }),
                    ],
                  })
                : (0, b.jsxs)(d.l0, {
                    submitText: "Reset Password",
                    schema: m.tq,
                    initialValues: { password: "", passwordConfirmation: "", token: e.token },
                    onSubmit: (function () {
                      var e = (0, a.Z)(
                        o().mark(function e(t) {
                          return o().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.prev = 0), (e.next = 3), n(t)
                                  case 3:
                                    e.next = 12
                                    break
                                  case 5:
                                    if (
                                      ((e.prev = 5),
                                      (e.t0 = e.catch(0)),
                                      "ResetPasswordError" !== e.t0.name)
                                    ) {
                                      e.next = 11
                                      break
                                    }
                                    return e.abrupt("return", (0, s.Z)({}, d.Ck, e.t0.message))
                                  case 11:
                                    return e.abrupt(
                                      "return",
                                      (0, s.Z)(
                                        {},
                                        d.Ck,
                                        "Sorry, we had an unexpected error. Please try again."
                                      )
                                    )
                                  case 12:
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
                    children: [
                      (0, b.jsx)(y.I, {
                        name: "password",
                        label: "New Password",
                        type: "password",
                      }),
                      (0, b.jsx)(y.I, {
                        name: "passwordConfirmation",
                        label: "Confirm New Password",
                        type: "password",
                      }),
                    ],
                  }),
            ],
          })
        }
      ;(w.redirectAuthenticatedTo = "/"),
        (w.getLayout = function (e) {
          return (0, b.jsx)(p.Z, { title: "Reset Your Password", children: e })
        })
      var v = (0, c.withSuperJSONPage)(w)
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
    1695: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/reset-password",
        function () {
          return r(3831)
        },
      ])
    },
    9921: function (e, t) {
      "use strict"
      var r = "function" === typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        s = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        i = r ? Symbol.for("react.profiler") : 60114,
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
        w = r ? Symbol.for("react.fundamental") : 60117,
        v = r ? Symbol.for("react.responder") : 60118,
        S = r ? Symbol.for("react.scope") : 60119
      function P(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case f:
                case l:
                case s:
                case i:
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
        return P(e) === l
      }
      ;(t.AsyncMode = f),
        (t.ConcurrentMode = l),
        (t.ContextConsumer = u),
        (t.ContextProvider = c),
        (t.Element = n),
        (t.ForwardRef = p),
        (t.Fragment = s),
        (t.Lazy = h),
        (t.Memo = m),
        (t.Portal = o),
        (t.Profiler = i),
        (t.StrictMode = a),
        (t.Suspense = y),
        (t.isAsyncMode = function (e) {
          return x(e) || P(e) === f
        }),
        (t.isConcurrentMode = x),
        (t.isContextConsumer = function (e) {
          return P(e) === u
        }),
        (t.isContextProvider = function (e) {
          return P(e) === c
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === n
        }),
        (t.isForwardRef = function (e) {
          return P(e) === p
        }),
        (t.isFragment = function (e) {
          return P(e) === s
        }),
        (t.isLazy = function (e) {
          return P(e) === h
        }),
        (t.isMemo = function (e) {
          return P(e) === m
        }),
        (t.isPortal = function (e) {
          return P(e) === o
        }),
        (t.isProfiler = function (e) {
          return P(e) === i
        }),
        (t.isStrictMode = function (e) {
          return P(e) === a
        }),
        (t.isSuspense = function (e) {
          return P(e) === y
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === s ||
            e === l ||
            e === i ||
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
                e.$$typeof === w ||
                e.$$typeof === v ||
                e.$$typeof === S ||
                e.$$typeof === b))
          )
        }),
        (t.typeOf = P)
    },
    9864: function (e, t, r) {
      "use strict"
      e.exports = r(9921)
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 1695), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
