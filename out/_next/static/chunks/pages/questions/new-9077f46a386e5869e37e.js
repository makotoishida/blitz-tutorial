;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [182],
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
        b = Object.prototype
      e.exports = function e(t, r, n) {
        if ("string" !== typeof r) {
          if (b) {
            var o = y(r)
            o && o !== b && e(t, o, n)
          }
          var c = f(r)
          l && (c = c.concat(l(r)))
          for (var u = a(t), h = a(r), d = 0; d < c.length; ++d) {
            var m = c[d]
            if (!i[m] && (!n || !n[m]) && (!h || !h[m]) && (!u || !u[m])) {
              var v = p(r, m)
              try {
                s(t, m, v)
              } catch (w) {}
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
    3588: function (e, t, r) {
      "use strict"
      r.r(t),
        r.d(t, {
          default: function () {
            return m
          },
        })
      var n = r(809),
        o = r.n(n),
        i = r(2809),
        c = r(266),
        u = r(3717),
        a = r(3544),
        s = r(2766),
        f = r(1428),
        l = r(1664),
        p = r(6481),
        y = (0, f.buildRpcClient)({
          resolverName: "createQuestion",
          resolverType: "mutation",
          routePath: "/api/rpc/createQuestion",
        }),
        b = r(5021),
        h = r(5893),
        d = function () {
          var e = (0, s.tv)(),
            t = (0, f.useMutation)(y),
            r = (0, u.Z)(t, 1)[0]
          return (0, h.jsxs)("div", {
            children: [
              (0, h.jsx)("h1", { children: "Create New Question" }),
              (0, h.jsx)(b.p, {
                submitText: "Create Question",
                initialValues: { choices: [] },
                onSubmit: (function () {
                  var t = (0, c.Z)(
                    o().mark(function t(n) {
                      var c
                      return o().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.prev = 0), (t.next = 3), r(n)
                              case 3:
                                ;(c = t.sent),
                                  e.push(s.Z5.ShowQuestionPage({ questionId: c.id })),
                                  (t.next = 11)
                                break
                              case 7:
                                return (
                                  (t.prev = 7),
                                  (t.t0 = t.catch(0)),
                                  console.error(t.t0),
                                  t.abrupt("return", (0, i.Z)({}, b.C, t.t0.toString()))
                                )
                              case 11:
                              case "end":
                                return t.stop()
                            }
                        },
                        t,
                        null,
                        [[0, 7]]
                      )
                    })
                  )
                  return function (e) {
                    return t.apply(this, arguments)
                  }
                })(),
              }),
              (0, h.jsx)("p", {
                children: (0, h.jsx)(l.Link, {
                  href: s.Z5.QuestionsPage(),
                  children: (0, h.jsx)("a", { children: "Questions" }),
                }),
              }),
            ],
          })
        }
      ;(d.authenticate = !0),
        (d.getLayout = function (e) {
          return (0, h.jsx)(p.Z, { title: "Create New Question", children: e })
        })
      var m = (0, a.withSuperJSONPage)(d)
    },
    5021: function (e, t, r) {
      "use strict"
      r.d(t, {
        C: function () {
          return o.Ck
        },
        p: function () {
          return s
        },
      })
      var n = r(2809),
        o = r(876),
        i = r(2041),
        c = r(5893)
      function u(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function s(e) {
        return (0, c.jsxs)(
          o.l0,
          a(
            a({}, e),
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
    4320: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/questions/new",
        function () {
          return r(3588)
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
        b = r ? Symbol.for("react.suspense_list") : 60120,
        h = r ? Symbol.for("react.memo") : 60115,
        d = r ? Symbol.for("react.lazy") : 60116,
        m = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        w = r ? Symbol.for("react.responder") : 60118,
        j = r ? Symbol.for("react.scope") : 60119
      function O(e) {
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
                    case d:
                    case h:
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
      function S(e) {
        return O(e) === l
      }
      ;(t.AsyncMode = f),
        (t.ConcurrentMode = l),
        (t.ContextConsumer = s),
        (t.ContextProvider = a),
        (t.Element = n),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = d),
        (t.Memo = h),
        (t.Portal = o),
        (t.Profiler = u),
        (t.StrictMode = c),
        (t.Suspense = y),
        (t.isAsyncMode = function (e) {
          return S(e) || O(e) === f
        }),
        (t.isConcurrentMode = S),
        (t.isContextConsumer = function (e) {
          return O(e) === s
        }),
        (t.isContextProvider = function (e) {
          return O(e) === a
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === n
        }),
        (t.isForwardRef = function (e) {
          return O(e) === p
        }),
        (t.isFragment = function (e) {
          return O(e) === i
        }),
        (t.isLazy = function (e) {
          return O(e) === d
        }),
        (t.isMemo = function (e) {
          return O(e) === h
        }),
        (t.isPortal = function (e) {
          return O(e) === o
        }),
        (t.isProfiler = function (e) {
          return O(e) === u
        }),
        (t.isStrictMode = function (e) {
          return O(e) === c
        }),
        (t.isSuspense = function (e) {
          return O(e) === y
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
            e === b ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === d ||
                e.$$typeof === h ||
                e.$$typeof === a ||
                e.$$typeof === s ||
                e.$$typeof === p ||
                e.$$typeof === v ||
                e.$$typeof === w ||
                e.$$typeof === j ||
                e.$$typeof === m))
          )
        }),
        (t.typeOf = O)
    },
    9864: function (e, t, r) {
      "use strict"
      e.exports = r(9921)
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 4320), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
