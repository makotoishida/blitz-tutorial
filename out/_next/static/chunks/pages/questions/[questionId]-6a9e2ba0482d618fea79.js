;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [946],
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
                  s(n.next(e))
                } catch (t) {
                  i(t)
                }
              }
              function u(e) {
                try {
                  s(n.throw(e))
                } catch (t) {
                  i(t)
                }
              }
              function s(e) {
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
              s((n = n.apply(e, t || [])).next())
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
        s = r(8679),
        a = r(7294)
      ;(t.withSuperJSONProps = function (e, t) {
        return (
          void 0 === t && (t = []),
          function () {
            for (var r = [], c = 0; c < arguments.length; c++) r[c] = arguments[c]
            return o(this, void 0, void 0, function () {
              var o, c, s, a, l, f
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
                        (s = u.default.serialize(o.props)),
                        (a = s.json),
                        (l = s.meta),
                        (f = a),
                        l && (f._superjson = l),
                        t.forEach(function (e, t) {
                          var r = c[t]
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
              o = c(t, ["_superjson"])
            return a.createElement(e, n({}, u.default.deserialize({ json: o, meta: r })))
          }
          return s(t, e), t
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
      function s(e) {
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
      var a = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        y = Object.prototype
      e.exports = function e(t, r, n) {
        if ("string" !== typeof r) {
          if (y) {
            var o = d(r)
            o && o !== y && e(t, o, n)
          }
          var c = l(r)
          f && (c = c.concat(f(r)))
          for (var u = s(t), h = s(r), m = 0; m < c.length; ++m) {
            var b = c[m]
            if (!i[b] && (!n || !n[b]) && (!h || !h[b]) && (!u || !u[b])) {
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
    2202: function (e, t, r) {
      "use strict"
      r.r(t),
        r.d(t, {
          Question: function () {
            return v
          },
          default: function () {
            return j
          },
        })
      var n = r(809),
        o = r.n(n),
        i = r(266),
        c = r(3717),
        u = r(3544),
        s = r(7294),
        a = r(2766),
        l = r(1428),
        f = r(1664),
        p = r(8487),
        d = r(6481),
        y = r(6326),
        h = (0, l.buildRpcClient)({
          resolverName: "deleteQuestion",
          resolverType: "mutation",
          routePath: "/api/rpc/deleteQuestion",
        }),
        m = (0, l.buildRpcClient)({
          resolverName: "updateChoice",
          resolverType: "mutation",
          routePath: "/api/rpc/updateChoice",
        }),
        b = r(5893),
        v = function () {
          var e = (0, a.tv)(),
            t = (0, a.pE)("questionId", "number"),
            r = (0, l.useMutation)(h),
            n = (0, c.Z)(r, 1)[0],
            u = (0, l.useQuery)(y.Z, { id: t }),
            s = (0, c.Z)(u, 2),
            d = s[0],
            v = s[1].refetch,
            x = (0, l.useMutation)(m),
            j = (0, c.Z)(x, 1)[0],
            w = (function () {
              var e = (0, i.Z)(
                o().mark(function e(t) {
                  return o().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), j({ id: t })
                          case 3:
                            v(), (e.next = 9)
                            break
                          case 6:
                            ;(e.prev = 6),
                              (e.t0 = e.catch(0)),
                              alert("Error updating choice " + JSON.stringify(e.t0, null, 2))
                          case 9:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(p.F, { children: (0, b.jsx)("title", { children: d.text }) }),
              (0, b.jsxs)("div", {
                children: [
                  (0, b.jsx)("h1", { children: d.text }),
                  (0, b.jsx)("ul", {
                    children: d.choices.map(function (e) {
                      return (0, b.jsxs)(
                        "li",
                        {
                          children: [
                            e.text,
                            " - ",
                            e.votes,
                            " votes",
                            " ",
                            (0, b.jsx)("button", {
                              onClick: function () {
                                return w(e.id)
                              },
                              children: "Vote",
                            }),
                          ],
                        },
                        e.id
                      )
                    }),
                  }),
                  (0, b.jsx)(f.Link, {
                    href: a.Z5.EditQuestionPage({ questionId: d.id }),
                    children: (0, b.jsx)("a", { children: "Edit" }),
                  }),
                  (0, b.jsx)("button", {
                    type: "button",
                    onClick: (0, i.Z)(
                      o().mark(function t() {
                        return o().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!window.confirm("This will be deleted")) {
                                  t.next = 4
                                  break
                                }
                                return (t.next = 3), n({ id: d.id })
                              case 3:
                                e.push(a.Z5.QuestionsPage())
                              case 4:
                              case "end":
                                return t.stop()
                            }
                        }, t)
                      })
                    ),
                    style: { marginLeft: "0.5rem" },
                    children: "Delete",
                  }),
                ],
              }),
            ],
          })
        },
        x = function () {
          return (0, b.jsxs)("div", {
            children: [
              (0, b.jsx)("p", {
                children: (0, b.jsx)(f.Link, {
                  href: a.Z5.QuestionsPage(),
                  children: (0, b.jsx)("a", { children: "Questions" }),
                }),
              }),
              (0, b.jsx)(s.Suspense, {
                fallback: (0, b.jsx)("div", { children: "Loading..." }),
                children: (0, b.jsx)(v, {}),
              }),
            ],
          })
        }
      ;(x.authenticate = !0),
        (x.getLayout = function (e) {
          return (0, b.jsx)(d.Z, { children: e })
        })
      var j = (0, u.withSuperJSONPage)(x)
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
    2566: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/questions/[questionId]",
        function () {
          return r(2202)
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
        s = r ? Symbol.for("react.provider") : 60109,
        a = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        y = r ? Symbol.for("react.suspense_list") : 60120,
        h = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        b = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        x = r ? Symbol.for("react.responder") : 60118,
        j = r ? Symbol.for("react.scope") : 60119
      function w(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case l:
                case f:
                case i:
                case u:
                case c:
                case d:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case a:
                    case p:
                    case m:
                    case h:
                    case s:
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
        return w(e) === f
      }
      ;(t.AsyncMode = l),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = a),
        (t.ContextProvider = s),
        (t.Element = n),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = m),
        (t.Memo = h),
        (t.Portal = o),
        (t.Profiler = u),
        (t.StrictMode = c),
        (t.Suspense = d),
        (t.isAsyncMode = function (e) {
          return S(e) || w(e) === l
        }),
        (t.isConcurrentMode = S),
        (t.isContextConsumer = function (e) {
          return w(e) === a
        }),
        (t.isContextProvider = function (e) {
          return w(e) === s
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === n
        }),
        (t.isForwardRef = function (e) {
          return w(e) === p
        }),
        (t.isFragment = function (e) {
          return w(e) === i
        }),
        (t.isLazy = function (e) {
          return w(e) === m
        }),
        (t.isMemo = function (e) {
          return w(e) === h
        }),
        (t.isPortal = function (e) {
          return w(e) === o
        }),
        (t.isProfiler = function (e) {
          return w(e) === u
        }),
        (t.isStrictMode = function (e) {
          return w(e) === c
        }),
        (t.isSuspense = function (e) {
          return w(e) === d
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === i ||
            e === f ||
            e === u ||
            e === c ||
            e === d ||
            e === y ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === h ||
                e.$$typeof === s ||
                e.$$typeof === a ||
                e.$$typeof === p ||
                e.$$typeof === v ||
                e.$$typeof === x ||
                e.$$typeof === j ||
                e.$$typeof === b))
          )
        }),
        (t.typeOf = w)
    },
    9864: function (e, t, r) {
      "use strict"
      e.exports = r(9921)
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 2566), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
