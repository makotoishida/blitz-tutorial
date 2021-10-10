;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [995],
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
                  u(n.next(e))
                } catch (t) {
                  i(t)
                }
              }
              function s(e) {
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
                        })).then(c, s)
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
      var s = r(7910),
        u = r(8679),
        a = r(7294)
      ;(t.withSuperJSONProps = function (e, t) {
        return (
          void 0 === t && (t = []),
          function () {
            for (var r = [], c = 0; c < arguments.length; c++) r[c] = arguments[c]
            return o(this, void 0, void 0, function () {
              var o, c, u, a, f, l
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
                        (u = s.default.serialize(o.props)),
                        (a = u.json),
                        (f = u.meta),
                        (l = a),
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
            return a.createElement(e, n({}, s.default.deserialize({ json: o, meta: r })))
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
        c = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {}
      function u(e) {
        return n.isMemo(e) ? c : s[e.$$typeof] || o
      }
      ;(s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[n.Memo] = c)
      var a = Object.defineProperty,
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
          for (var s = u(t), b = u(r), h = 0; h < c.length; ++h) {
            var m = c[h]
            if (!i[m] && (!n || !n[m]) && (!b || !b[m]) && (!s || !s[m])) {
              var v = p(r, m)
              try {
                a(t, m, v)
              } catch (j) {}
            }
          }
        }
        return t
      }
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
    3930: function (e, t, r) {
      "use strict"
      r.r(t),
        r.d(t, {
          EditQuestion: function () {
            return x
          },
          default: function () {
            return w
          },
        })
      var n = r(809),
        o = r.n(n),
        i = r(2809),
        c = r(266),
        s = r(3717),
        u = r(3544),
        a = r(7294),
        f = r(2766),
        l = r(1428),
        p = r(1664),
        y = r(8487),
        d = r(6481),
        b = r(6326),
        h = (0, l.buildRpcClient)({
          resolverName: "updateQuestion",
          resolverType: "mutation",
          routePath: "/api/rpc/updateQuestion",
        }),
        m = r(5021),
        v = r(5893)
      function j(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var x = function () {
          var e = (0, f.tv)(),
            t = (0, f.pE)("questionId", "number"),
            r = (0, l.useQuery)(b.Z, { id: t }, { staleTime: 1 / 0 }),
            n = (0, s.Z)(r, 2),
            u = n[0],
            a = n[1].setQueryData,
            p = (0, l.useMutation)(h),
            d = (0, s.Z)(p, 1)[0]
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)(y.F, {
                children: (0, v.jsxs)("title", { children: ["Edit Question ", u.id] }),
              }),
              (0, v.jsxs)("div", {
                children: [
                  (0, v.jsxs)("h1", { children: ["Edit Question ", u.id] }),
                  (0, v.jsx)(m.p, {
                    submitText: "Update Question",
                    initialValues: u,
                    onSubmit: (function () {
                      var t = (0, c.Z)(
                        o().mark(function t(r) {
                          var n
                          return o().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.prev = 0), (t.next = 3), d(O({ id: u.id }, r))
                                  case 3:
                                    return (n = t.sent), (t.next = 6), a(n)
                                  case 6:
                                    e.push(f.Z5.ShowQuestionPage({ questionId: n.id })),
                                      (t.next = 13)
                                    break
                                  case 9:
                                    return (
                                      (t.prev = 9),
                                      (t.t0 = t.catch(0)),
                                      console.error(t.t0),
                                      t.abrupt("return", (0, i.Z)({}, m.C, t.t0.toString()))
                                    )
                                  case 13:
                                  case "end":
                                    return t.stop()
                                }
                            },
                            t,
                            null,
                            [[0, 9]]
                          )
                        })
                      )
                      return function (e) {
                        return t.apply(this, arguments)
                      }
                    })(),
                  }),
                ],
              }),
            ],
          })
        },
        g = function () {
          return (0, v.jsxs)("div", {
            children: [
              (0, v.jsx)(a.Suspense, {
                fallback: (0, v.jsx)("div", { children: "Loading..." }),
                children: (0, v.jsx)(x, {}),
              }),
              (0, v.jsx)("p", {
                children: (0, v.jsx)(p.Link, {
                  href: f.Z5.QuestionsPage(),
                  children: (0, v.jsx)("a", { children: "Questions" }),
                }),
              }),
            ],
          })
        }
      ;(g.authenticate = !0),
        (g.getLayout = function (e) {
          return (0, v.jsx)(d.Z, { children: e })
        })
      var w = (0, u.withSuperJSONPage)(g)
    },
    5021: function (e, t, r) {
      "use strict"
      r.d(t, {
        C: function () {
          return o.Ck
        },
        p: function () {
          return a
        },
      })
      var n = r(2809),
        o = r(876),
        i = r(2041),
        c = r(5893)
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function a(e) {
        return (0, c.jsxs)(
          o.l0,
          u(
            u({}, e),
            {},
            {
              children: [
                (0, c.jsx)(i.I, { name: "text", label: "Text", placeholder: "Question text" }),
                (0, c.jsx)(i.I, { name: "choices.0.text", label: "Choice 1" }),
                (0, c.jsx)(i.I, { name: "choices.1.text", label: "Choice 2" }),
                (0, c.jsx)(i.I, { name: "choices.2.text", label: "Choice 3" }),
              ],
            }
          )
        )
      }
    },
    6326: function (e, t, r) {
      "use strict"
      var n = r(1428)
      t.Z = (0, n.buildRpcClient)({
        resolverName: "getQuestion",
        resolverType: "query",
        routePath: "/api/rpc/getQuestion",
      })
    },
    276: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/questions/[questionId]/edit",
        function () {
          return r(3930)
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
        s = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        a = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        l = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        y = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        b = r ? Symbol.for("react.memo") : 60115,
        h = r ? Symbol.for("react.lazy") : 60116,
        m = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        j = r ? Symbol.for("react.responder") : 60118,
        O = r ? Symbol.for("react.scope") : 60119
      function x(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case f:
                case l:
                case i:
                case s:
                case c:
                case y:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case a:
                    case p:
                    case h:
                    case b:
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
      function g(e) {
        return x(e) === l
      }
      ;(t.AsyncMode = f),
        (t.ConcurrentMode = l),
        (t.ContextConsumer = a),
        (t.ContextProvider = u),
        (t.Element = n),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = h),
        (t.Memo = b),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = c),
        (t.Suspense = y),
        (t.isAsyncMode = function (e) {
          return g(e) || x(e) === f
        }),
        (t.isConcurrentMode = g),
        (t.isContextConsumer = function (e) {
          return x(e) === a
        }),
        (t.isContextProvider = function (e) {
          return x(e) === u
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === n
        }),
        (t.isForwardRef = function (e) {
          return x(e) === p
        }),
        (t.isFragment = function (e) {
          return x(e) === i
        }),
        (t.isLazy = function (e) {
          return x(e) === h
        }),
        (t.isMemo = function (e) {
          return x(e) === b
        }),
        (t.isPortal = function (e) {
          return x(e) === o
        }),
        (t.isProfiler = function (e) {
          return x(e) === s
        }),
        (t.isStrictMode = function (e) {
          return x(e) === c
        }),
        (t.isSuspense = function (e) {
          return x(e) === y
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === i ||
            e === l ||
            e === s ||
            e === c ||
            e === y ||
            e === d ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === h ||
                e.$$typeof === b ||
                e.$$typeof === u ||
                e.$$typeof === a ||
                e.$$typeof === p ||
                e.$$typeof === v ||
                e.$$typeof === j ||
                e.$$typeof === O ||
                e.$$typeof === m))
          )
        }),
        (t.typeOf = x)
    },
    9864: function (e, t, r) {
      "use strict"
      e.exports = r(9921)
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 276), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
