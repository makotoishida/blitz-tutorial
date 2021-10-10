;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
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
        l = r(7294)
      ;(t.withSuperJSONProps = function (e, t) {
        return (
          void 0 === t && (t = []),
          function () {
            for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a]
            return o(this, void 0, void 0, function () {
              var o, a, c, l, u, f
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
                        (l = c.json),
                        (u = c.meta),
                        (f = l),
                        u && (f._superjson = u),
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
            return l.createElement(e, n({}, s.default.deserialize({ json: o, meta: r })))
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
      var l = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        m = Object.prototype
      e.exports = function e(t, r, n) {
        if ("string" !== typeof r) {
          if (m) {
            var o = d(r)
            o && o !== m && e(t, o, n)
          }
          var a = u(r)
          f && (a = a.concat(f(r)))
          for (var s = c(t), b = c(r), y = 0; y < a.length; ++y) {
            var x = a[y]
            if (!i[x] && (!n || !n[x]) && (!b || !b[x]) && (!s || !s[x])) {
              var g = p(r, x)
              try {
                l(t, x, g)
              } catch (h) {}
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
    6079: function (e, t, r) {
      "use strict"
      r.r(t),
        r.d(t, {
          default: function () {
            return h
          },
        })
      var n = r(809),
        o = r.n(n),
        i = r(266),
        a = r(3717),
        s = r(3544),
        c = r(5988),
        l = r(7294),
        u = r(2766),
        f = r(1428),
        p = r(1664),
        d = r(6481),
        m = (0, f.buildRpcClient)({
          resolverName: "getCurrentUser",
          resolverType: "query",
          routePath: "/api/rpc/getCurrentUser",
        }),
        b = (0, f.buildRpcClient)({
          resolverName: "logout",
          resolverType: "mutation",
          routePath: "/api/rpc/logout",
        }),
        y = r(5893),
        x = function () {
          var e = (function () {
              var e = (0, f.useQuery)(m, null)
              return (0, a.Z)(e, 1)[0]
            })(),
            t = (0, f.useMutation)(b),
            r = (0, a.Z)(t, 1)[0]
          return e
            ? (0, y.jsxs)(y.Fragment, {
                children: [
                  (0, y.jsx)("button", {
                    className: "button small",
                    onClick: (0, i.Z)(
                      o().mark(function e() {
                        return o().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), r()
                              case 2:
                              case "end":
                                return e.stop()
                            }
                        }, e)
                      })
                    ),
                    children: "Logout",
                  }),
                  (0, y.jsxs)("div", {
                    children: [
                      "User id: ",
                      (0, y.jsx)("code", { children: e.id }),
                      (0, y.jsx)("br", {}),
                      "User role: ",
                      (0, y.jsx)("code", { children: e.role }),
                    ],
                  }),
                ],
              })
            : (0, y.jsxs)(y.Fragment, {
                children: [
                  (0, y.jsx)(p.Link, {
                    href: u.Z5.SignupPage(),
                    children: (0, y.jsx)("a", {
                      className: "button small",
                      children: (0, y.jsx)("strong", { children: "Sign Up" }),
                    }),
                  }),
                  (0, y.jsx)(p.Link, {
                    href: u.Z5.LoginPage(),
                    children: (0, y.jsx)("a", {
                      className: "button small",
                      children: (0, y.jsx)("strong", { children: "Login" }),
                    }),
                  }),
                ],
              })
        },
        g = function () {
          return (0, y.jsxs)("div", {
            className: "jsx-3936102615 container",
            children: [
              (0, y.jsxs)("main", {
                className: "jsx-3936102615",
                children: [
                  (0, y.jsx)("h1", {
                    className: "jsx-3936102615",
                    children: "\u3088\u3046\u3053\u305d, Blitz\u3078!",
                  }),
                  (0, y.jsx)("div", {
                    style: { marginTop: "1rem", marginBottom: "1rem" },
                    className: "jsx-3936102615 buttons",
                    children: (0, y.jsx)(l.Suspense, {
                      fallback: "Loading...",
                      children: (0, y.jsx)(x, {}),
                    }),
                  }),
                  (0, y.jsx)("div", {
                    className: "jsx-3936102615",
                    children: (0, y.jsxs)("p", {
                      style: { display: "flex", gap: "1rem" },
                      className: "jsx-3936102615",
                      children: [
                        (0, y.jsx)(p.Link, {
                          href: u.Z5.ProjectsPage(),
                          children: (0, y.jsx)("a", {
                            className: "jsx-3936102615",
                            children: "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4e00\u89a7\u3078",
                          }),
                        }),
                        (0, y.jsx)(p.Link, {
                          href: u.Z5.QuestionsPage(),
                          children: (0, y.jsx)("a", {
                            className: "jsx-3936102615",
                            children: "\u8cea\u554f\u4e00\u89a7\u3078",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, y.jsx)("footer", {
                className: "jsx-3936102615",
                children: (0, y.jsx)("a", {
                  href: "https://blitzjs.com?utm_source=blitz-new&utm_medium=app-template&utm_campaign=blitz-new",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "jsx-3936102615",
                  children: "Powered by Blitz.js",
                }),
              }),
              (0, y.jsx)(c.default, {
                id: "3936102615",
                children: [
                  '@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;700&display=swap");',
                  'html,body{padding:0;margin:0;font-family:"Libre Franklin",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}',
                  "*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;}",
                  ".container{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
                  "main{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
                  "main p{font-size:1.2rem;}",
                  "p{text-align:center;}",
                  "footer{width:100%;height:60px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#45009d;}",
                  "footer a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
                  "footer a{color:#f4f4f4;-webkit-text-decoration:none;text-decoration:none;}",
                  ".logo{margin-bottom:2rem;}",
                  ".logo img{width:300px;}",
                  ".buttons{display:grid;grid-auto-flow:column;grid-gap:0.5rem;}",
                  ".button{font-size:1rem;background-color:#6700eb;padding:1rem 2rem;color:#f4f4f4;text-align:center;}",
                  ".button.small{padding:0.5rem 1rem;}",
                  ".button:hover{background-color:#45009d;}",
                  ".button-outline{border:2px solid #6700eb;padding:1rem 2rem;color:#6700eb;text-align:center;}",
                  ".button-outline:hover{border-color:#45009d;color:#45009d;}",
                  "pre{background:#fafafa;border-radius:5px;padding:0.75rem;text-align:center;}",
                  "code{font-size:0.9rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono, Bitstream Vera Sans Mono,Courier New,monospace;}",
                  ".grid{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}",
                  "@media (max-width:600px){.grid{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}",
                ],
              }),
            ],
          })
        }
      ;(g.suppressFirstRenderFlicker = !0),
        (g.getLayout = function (e) {
          return (0, y.jsx)(d.Z, { title: "Home", children: e })
        })
      var h = (0, s.withSuperJSONPage)(g)
    },
    7540: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(6079)
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
        l = r ? Symbol.for("react.context") : 60110,
        u = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.suspense_list") : 60120,
        b = r ? Symbol.for("react.memo") : 60115,
        y = r ? Symbol.for("react.lazy") : 60116,
        x = r ? Symbol.for("react.block") : 60121,
        g = r ? Symbol.for("react.fundamental") : 60117,
        h = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119
      function j(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case u:
                case f:
                case i:
                case s:
                case a:
                case d:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case l:
                    case p:
                    case y:
                    case b:
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
      function k(e) {
        return j(e) === f
      }
      ;(t.AsyncMode = u),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = l),
        (t.ContextProvider = c),
        (t.Element = n),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = y),
        (t.Memo = b),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = d),
        (t.isAsyncMode = function (e) {
          return k(e) || j(e) === u
        }),
        (t.isConcurrentMode = k),
        (t.isContextConsumer = function (e) {
          return j(e) === l
        }),
        (t.isContextProvider = function (e) {
          return j(e) === c
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === n
        }),
        (t.isForwardRef = function (e) {
          return j(e) === p
        }),
        (t.isFragment = function (e) {
          return j(e) === i
        }),
        (t.isLazy = function (e) {
          return j(e) === y
        }),
        (t.isMemo = function (e) {
          return j(e) === b
        }),
        (t.isPortal = function (e) {
          return j(e) === o
        }),
        (t.isProfiler = function (e) {
          return j(e) === s
        }),
        (t.isStrictMode = function (e) {
          return j(e) === a
        }),
        (t.isSuspense = function (e) {
          return j(e) === d
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === i ||
            e === f ||
            e === s ||
            e === a ||
            e === d ||
            e === m ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === y ||
                e.$$typeof === b ||
                e.$$typeof === c ||
                e.$$typeof === l ||
                e.$$typeof === p ||
                e.$$typeof === g ||
                e.$$typeof === h ||
                e.$$typeof === w ||
                e.$$typeof === x))
          )
        }),
        (t.typeOf = j)
    },
    9864: function (e, t, r) {
      "use strict"
      e.exports = r(9921)
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 7540), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
