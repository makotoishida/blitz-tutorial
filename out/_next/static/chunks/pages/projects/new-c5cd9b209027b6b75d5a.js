;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [689],
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
            return new (r || (r = Promise))(function (o, c) {
              function i(e) {
                try {
                  u(n.next(e))
                } catch (t) {
                  c(t)
                }
              }
              function a(e) {
                try {
                  u(n.throw(e))
                } catch (t) {
                  c(t)
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
                        })).then(i, a)
              }
              u((n = n.apply(e, t || [])).next())
            })
          },
        c =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              n,
              o,
              c,
              i = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1]
                  return o[1]
                },
                trys: [],
                ops: [],
              }
            return (
              (c = { next: a(0), throw: a(1), return: a(2) }),
              "function" === typeof Symbol &&
                (c[Symbol.iterator] = function () {
                  return this
                }),
              c
            )
            function a(c) {
              return function (a) {
                return (function (c) {
                  if (r) throw new TypeError("Generator is already executing.")
                  for (; i; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (o =
                            2 & c[0]
                              ? n.return
                              : c[0]
                              ? n.throw || ((o = n.return) && o.call(n), 0)
                              : n.next) &&
                          !(o = o.call(n, c[1])).done)
                      )
                        return o
                      switch (((n = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                        case 0:
                        case 1:
                          o = c
                          break
                        case 4:
                          return i.label++, { value: c[1], done: !1 }
                        case 5:
                          i.label++, (n = c[1]), (c = [0])
                          continue
                        case 7:
                          ;(c = i.ops.pop()), i.trys.pop()
                          continue
                        default:
                          if (
                            !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                            (6 === c[0] || 2 === c[0])
                          ) {
                            i = 0
                            continue
                          }
                          if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                            i.label = c[1]
                            break
                          }
                          if (6 === c[0] && i.label < o[1]) {
                            ;(i.label = o[1]), (o = c)
                            break
                          }
                          if (o && i.label < o[2]) {
                            ;(i.label = o[2]), i.ops.push(c)
                            break
                          }
                          o[2] && i.ops.pop(), i.trys.pop()
                          continue
                      }
                      c = t.call(e, i)
                    } catch (a) {
                      ;(c = [6, a]), (n = 0)
                    } finally {
                      r = o = 0
                    }
                  if (5 & c[0]) throw c[1]
                  return { value: c[0] ? c[1] : void 0, done: !0 }
                })([c, a])
              }
            }
          },
        i =
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
      var a = r(7910),
        u = r(8679),
        s = r(7294)
      ;(t.withSuperJSONProps = function (e, t) {
        return (
          void 0 === t && (t = []),
          function () {
            for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i]
            return o(this, void 0, void 0, function () {
              var o, i, u, s, f, p
              return c(this, function (c) {
                switch (c.label) {
                  case 0:
                    return [4, e.apply(void 0, r)]
                  case 1:
                    return "props" in (o = c.sent()) && o.props
                      ? ((i = t.map(function (e) {
                          var t = o.props[e]
                          return delete o.props[e], t
                        })),
                        (u = a.default.serialize(o.props)),
                        (s = u.json),
                        (f = u.meta),
                        (p = s),
                        f && (p._superjson = f),
                        t.forEach(function (e, t) {
                          var r = i[t]
                          "undefined" !== typeof r && (p[e] = r)
                        }),
                        [2, n(n({}, o), { props: p })])
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
              o = i(t, ["_superjson"])
            return s.createElement(e, n({}, a.default.deserialize({ json: o, meta: r })))
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
        c = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {}
      function u(e) {
        return n.isMemo(e) ? i : a[e.$$typeof] || o
      }
      ;(a[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (a[n.Memo] = i)
      var s = Object.defineProperty,
        f = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        l = Object.getOwnPropertyDescriptor,
        y = Object.getPrototypeOf,
        d = Object.prototype
      e.exports = function e(t, r, n) {
        if ("string" !== typeof r) {
          if (d) {
            var o = y(r)
            o && o !== d && e(t, o, n)
          }
          var i = f(r)
          p && (i = i.concat(p(r)))
          for (var a = u(t), b = u(r), h = 0; h < i.length; ++h) {
            var m = i[h]
            if (!c[m] && (!n || !n[m]) && (!b || !b[m]) && (!a || !a[m])) {
              var v = l(r, m)
              try {
                s(t, m, v)
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
    6373: function (e, t, r) {
      "use strict"
      r.r(t),
        r.d(t, {
          default: function () {
            return m
          },
        })
      var n = r(809),
        o = r.n(n),
        c = r(2809),
        i = r(266),
        a = r(3717),
        u = r(3544),
        s = r(2766),
        f = r(1428),
        p = r(1664),
        l = r(6481),
        y = (0, f.buildRpcClient)({
          resolverName: "createProject",
          resolverType: "mutation",
          routePath: "/api/rpc/createProject",
        }),
        d = r(139),
        b = r(5893),
        h = function () {
          var e = (0, s.tv)(),
            t = (0, f.useMutation)(y),
            r = (0, a.Z)(t, 1)[0]
          return (0, b.jsxs)("div", {
            children: [
              (0, b.jsx)("h1", { children: "Create New Project" }),
              (0, b.jsx)(d.h, {
                submitText: "Create Project",
                onSubmit: (function () {
                  var t = (0, i.Z)(
                    o().mark(function t(n) {
                      var i
                      return o().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.prev = 0), (t.next = 3), r(n)
                              case 3:
                                ;(i = t.sent),
                                  e.push(s.Z5.ShowProjectPage({ projectId: i.id })),
                                  (t.next = 11)
                                break
                              case 7:
                                return (
                                  (t.prev = 7),
                                  (t.t0 = t.catch(0)),
                                  console.error(t.t0),
                                  t.abrupt("return", (0, c.Z)({}, d.C, t.t0.toString()))
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
              (0, b.jsx)("p", {
                children: (0, b.jsx)(p.Link, {
                  href: s.Z5.ProjectsPage(),
                  children: (0, b.jsx)("a", { children: "Projects" }),
                }),
              }),
            ],
          })
        }
      ;(h.authenticate = !0),
        (h.getLayout = function (e) {
          return (0, b.jsx)(l.Z, { title: "Create New Project", children: e })
        })
      var m = (0, u.withSuperJSONPage)(h)
    },
    139: function (e, t, r) {
      "use strict"
      r.d(t, {
        C: function () {
          return o.Ck
        },
        h: function () {
          return s
        },
      })
      var n = r(2809),
        o = r(876),
        c = r(2041),
        i = r(5893)
      function a(e, t) {
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
            ? a(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function s(e) {
        return (0, i.jsx)(
          o.l0,
          u(
            u({}, e),
            {},
            { children: (0, i.jsx)(c.I, { name: "name", label: "Name", placeholder: "Name" }) }
          )
        )
      }
    },
    5673: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/projects/new",
        function () {
          return r(6373)
        },
      ])
    },
    9921: function (e, t) {
      "use strict"
      var r = "function" === typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        c = r ? Symbol.for("react.fragment") : 60107,
        i = r ? Symbol.for("react.strict_mode") : 60108,
        a = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        s = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        l = r ? Symbol.for("react.forward_ref") : 60112,
        y = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        b = r ? Symbol.for("react.memo") : 60115,
        h = r ? Symbol.for("react.lazy") : 60116,
        m = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        j = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119
      function O(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case f:
                case p:
                case c:
                case a:
                case i:
                case y:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case l:
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
      function P(e) {
        return O(e) === p
      }
      ;(t.AsyncMode = f),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = s),
        (t.ContextProvider = u),
        (t.Element = n),
        (t.ForwardRef = l),
        (t.Fragment = c),
        (t.Lazy = h),
        (t.Memo = b),
        (t.Portal = o),
        (t.Profiler = a),
        (t.StrictMode = i),
        (t.Suspense = y),
        (t.isAsyncMode = function (e) {
          return P(e) || O(e) === f
        }),
        (t.isConcurrentMode = P),
        (t.isContextConsumer = function (e) {
          return O(e) === s
        }),
        (t.isContextProvider = function (e) {
          return O(e) === u
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === n
        }),
        (t.isForwardRef = function (e) {
          return O(e) === l
        }),
        (t.isFragment = function (e) {
          return O(e) === c
        }),
        (t.isLazy = function (e) {
          return O(e) === h
        }),
        (t.isMemo = function (e) {
          return O(e) === b
        }),
        (t.isPortal = function (e) {
          return O(e) === o
        }),
        (t.isProfiler = function (e) {
          return O(e) === a
        }),
        (t.isStrictMode = function (e) {
          return O(e) === i
        }),
        (t.isSuspense = function (e) {
          return O(e) === y
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === c ||
            e === p ||
            e === a ||
            e === i ||
            e === y ||
            e === d ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === h ||
                e.$$typeof === b ||
                e.$$typeof === u ||
                e.$$typeof === s ||
                e.$$typeof === l ||
                e.$$typeof === v ||
                e.$$typeof === j ||
                e.$$typeof === w ||
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
      return (t = 5673), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
