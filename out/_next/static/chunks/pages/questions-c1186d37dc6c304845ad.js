;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [971],
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
              function s(e) {
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
                        })).then(s, c)
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
              s = {
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
                  for (; s; )
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
                          return s.label++, { value: i[1], done: !1 }
                        case 5:
                          s.label++, (n = i[1]), (i = [0])
                          continue
                        case 7:
                          ;(i = s.ops.pop()), s.trys.pop()
                          continue
                        default:
                          if (
                            !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0])
                          ) {
                            s = 0
                            continue
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            s.label = i[1]
                            break
                          }
                          if (6 === i[0] && s.label < o[1]) {
                            ;(s.label = o[1]), (o = i)
                            break
                          }
                          if (o && s.label < o[2]) {
                            ;(s.label = o[2]), s.ops.push(i)
                            break
                          }
                          o[2] && s.ops.pop(), s.trys.pop()
                          continue
                      }
                      i = t.call(e, s)
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
        s =
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
        a = r(7294)
      ;(t.withSuperJSONProps = function (e, t) {
        return (
          void 0 === t && (t = []),
          function () {
            for (var r = [], s = 0; s < arguments.length; s++) r[s] = arguments[s]
            return o(this, void 0, void 0, function () {
              var o, s, u, a, l, f
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, e.apply(void 0, r)]
                  case 1:
                    return "props" in (o = i.sent()) && o.props
                      ? ((s = t.map(function (e) {
                          var t = o.props[e]
                          return delete o.props[e], t
                        })),
                        (u = c.default.serialize(o.props)),
                        (a = u.json),
                        (l = u.meta),
                        (f = a),
                        l && (f._superjson = l),
                        t.forEach(function (e, t) {
                          var r = s[t]
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
              o = s(t, ["_superjson"])
            return a.createElement(e, n({}, c.default.deserialize({ json: o, meta: r })))
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
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        c = {}
      function u(e) {
        return n.isMemo(e) ? s : c[e.$$typeof] || o
      }
      ;(c[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (c[n.Memo] = s)
      var a = Object.defineProperty,
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
          var s = l(r)
          f && (s = s.concat(f(r)))
          for (var c = u(t), h = u(r), m = 0; m < s.length; ++m) {
            var b = s[m]
            if (!i[b] && (!n || !n[b]) && (!h || !h[b]) && (!c || !c[b])) {
              var v = p(r, b)
              try {
                a(t, b, v)
              } catch (x) {}
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
    443: function (e, t, r) {
      "use strict"
      r.r(t),
        r.d(t, {
          QuestionsList: function () {
            return y
          },
          default: function () {
            return h
          },
        })
      var n = r(3717),
        o = r(3544),
        i = r(7294),
        s = r(2766),
        c = r(1428),
        u = r(1664),
        a = r(8487),
        l = r(6481),
        f = (0, c.buildRpcClient)({
          resolverName: "getQuestions",
          resolverType: "query",
          routePath: "/api/rpc/getQuestions",
        }),
        p = r(5893),
        y = function () {
          var e = (0, s.tv)(),
            t = Number(e.query.page) || 0,
            r = (0, c.usePaginatedQuery)(f, { orderBy: { id: "asc" }, skip: 100 * t, take: 100 }),
            o = (0, n.Z)(r, 1)[0],
            i = o.questions,
            a = o.hasMore
          return (0, p.jsxs)("div", {
            children: [
              (0, p.jsx)("ul", {
                children: i.map(function (e) {
                  return (0, p.jsxs)(
                    "li",
                    {
                      children: [
                        (0, p.jsx)(u.Link, {
                          href: s.Z5.ShowQuestionPage({ questionId: e.id }),
                          children: (0, p.jsx)("a", { children: e.text }),
                        }),
                        (0, p.jsx)("ul", {
                          children: e.choices.map(function (e) {
                            return (0,
                            p.jsxs)("li", { children: [e.text, " - ", e.votes, " votes"] }, e.id)
                          }),
                        }),
                      ],
                    },
                    e.id
                  )
                }),
              }),
              (0, p.jsx)("button", {
                disabled: 0 === t,
                onClick: function () {
                  return e.push({ query: { page: t - 1 } })
                },
                children: "Previous",
              }),
              (0, p.jsx)("button", {
                disabled: !a,
                onClick: function () {
                  return e.push({ query: { page: t + 1 } })
                },
                children: "Next",
              }),
            ],
          })
        },
        d = function () {
          return (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsx)(a.F, { children: (0, p.jsx)("title", { children: "Questions" }) }),
              (0, p.jsxs)("div", {
                children: [
                  (0, p.jsxs)("p", {
                    style: { display: "flex", gap: "1rem" },
                    children: [
                      (0, p.jsx)(u.Link, {
                        href: s.Z5.Home(),
                        children: (0, p.jsx)("a", { children: "Home" }),
                      }),
                      (0, p.jsx)(u.Link, {
                        href: s.Z5.NewQuestionPage(),
                        children: (0, p.jsx)("a", { children: "Create Question" }),
                      }),
                    ],
                  }),
                  (0, p.jsx)(i.Suspense, {
                    fallback: (0, p.jsx)("div", { children: "Loading..." }),
                    children: (0, p.jsx)(y, {}),
                  }),
                ],
              }),
            ],
          })
        }
      ;(d.authenticate = !0),
        (d.getLayout = function (e) {
          return (0, p.jsx)(l.Z, { children: e })
        })
      var h = (0, o.withSuperJSONPage)(d)
    },
    8230: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/questions",
        function () {
          return r(443)
        },
      ])
    },
    9921: function (e, t) {
      "use strict"
      var r = "function" === typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        c = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        a = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        y = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        h = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        b = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        x = r ? Symbol.for("react.responder") : 60118,
        j = r ? Symbol.for("react.scope") : 60119
      function S(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case l:
                case f:
                case i:
                case c:
                case s:
                case y:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case a:
                    case p:
                    case m:
                    case h:
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
        return S(e) === f
      }
      ;(t.AsyncMode = l),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = a),
        (t.ContextProvider = u),
        (t.Element = n),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = m),
        (t.Memo = h),
        (t.Portal = o),
        (t.Profiler = c),
        (t.StrictMode = s),
        (t.Suspense = y),
        (t.isAsyncMode = function (e) {
          return g(e) || S(e) === l
        }),
        (t.isConcurrentMode = g),
        (t.isContextConsumer = function (e) {
          return S(e) === a
        }),
        (t.isContextProvider = function (e) {
          return S(e) === u
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === n
        }),
        (t.isForwardRef = function (e) {
          return S(e) === p
        }),
        (t.isFragment = function (e) {
          return S(e) === i
        }),
        (t.isLazy = function (e) {
          return S(e) === m
        }),
        (t.isMemo = function (e) {
          return S(e) === h
        }),
        (t.isPortal = function (e) {
          return S(e) === o
        }),
        (t.isProfiler = function (e) {
          return S(e) === c
        }),
        (t.isStrictMode = function (e) {
          return S(e) === s
        }),
        (t.isSuspense = function (e) {
          return S(e) === y
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === i ||
            e === f ||
            e === c ||
            e === s ||
            e === y ||
            e === d ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === h ||
                e.$$typeof === u ||
                e.$$typeof === a ||
                e.$$typeof === p ||
                e.$$typeof === v ||
                e.$$typeof === x ||
                e.$$typeof === j ||
                e.$$typeof === b))
          )
        }),
        (t.typeOf = S)
    },
    9864: function (e, t, r) {
      "use strict"
      e.exports = r(9921)
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 8230), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
