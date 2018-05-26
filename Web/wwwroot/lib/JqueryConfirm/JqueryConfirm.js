/*!
 * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function (a, b) { "function" == typeof define && define.amd ? define(["jquery"], function (a) { return b(a) }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery) }(this, function (a) {
    !function (a) {
        "use strict"; function b(b) { var c = [{ re: /[\xC0-\xC6]/g, ch: "A" }, { re: /[\xE0-\xE6]/g, ch: "a" }, { re: /[\xC8-\xCB]/g, ch: "E" }, { re: /[\xE8-\xEB]/g, ch: "e" }, { re: /[\xCC-\xCF]/g, ch: "I" }, { re: /[\xEC-\xEF]/g, ch: "i" }, { re: /[\xD2-\xD6]/g, ch: "O" }, { re: /[\xF2-\xF6]/g, ch: "o" }, { re: /[\xD9-\xDC]/g, ch: "U" }, { re: /[\xF9-\xFC]/g, ch: "u" }, { re: /[\xC7-\xE7]/g, ch: "c" }, { re: /[\xD1]/g, ch: "N" }, { re: /[\xF1]/g, ch: "n" }]; return a.each(c, function () { b = b ? b.replace(this.re, this.ch) : "" }), b } function c(b) { var c = arguments, d = b;[].shift.apply(c); var e, f = this.each(function () { var b = a(this); if (b.is("select")) { var f = b.data("selectpicker"), g = "object" == typeof d && d; if (f) { if (g) for (var h in g) g.hasOwnProperty(h) && (f.options[h] = g[h]) } else { var i = a.extend({}, l.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), g); i.template = a.extend({}, l.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, g.template), b.data("selectpicker", f = new l(this, i)) } "string" == typeof d && (e = f[d] instanceof Function ? f[d].apply(f, c) : f.options[d]) } }); return "undefined" != typeof e ? e : f } String.prototype.includes || !function () { var a = {}.toString, b = function () { try { var a = {}, b = Object.defineProperty, c = b(a, a, a) && b } catch (a) { } return c }(), c = "".indexOf, d = function (b) { if (null == this) throw new TypeError; var d = String(this); if (b && "[object RegExp]" == a.call(b)) throw new TypeError; var e = d.length, f = String(b), g = f.length, h = arguments.length > 1 ? arguments[1] : void 0, i = h ? Number(h) : 0; i != i && (i = 0); var j = Math.min(Math.max(i, 0), e); return !(g + j > e) && c.call(d, f, i) != -1 }; b ? b(String.prototype, "includes", { value: d, configurable: !0, writable: !0 }) : String.prototype.includes = d }(), String.prototype.startsWith || !function () { var a = function () { try { var a = {}, b = Object.defineProperty, c = b(a, a, a) && b } catch (a) { } return c }(), b = {}.toString, c = function (a) { if (null == this) throw new TypeError; var c = String(this); if (a && "[object RegExp]" == b.call(a)) throw new TypeError; var d = c.length, e = String(a), f = e.length, g = arguments.length > 1 ? arguments[1] : void 0, h = g ? Number(g) : 0; h != h && (h = 0); var i = Math.min(Math.max(h, 0), d); if (f + i > d) return !1; for (var j = -1; ++j < f;)if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1; return !0 }; a ? a(String.prototype, "startsWith", { value: c, configurable: !0, writable: !0 }) : String.prototype.startsWith = c }(), Object.keys || (Object.keys = function (a, b, c) { c = []; for (b in a) c.hasOwnProperty.call(a, b) && c.push(b); return c }); var d = { useDefault: !1, _set: a.valHooks.select.set }; a.valHooks.select.set = function (b, c) { return c && !d.useDefault && a(b).data("selected", !0), d._set.apply(this, arguments) }; var e = null, f = function () { try { return new Event("change"), !0 } catch (a) { return !1 } }(); a.fn.triggerNative = function (a) { var b, c = this[0]; c.dispatchEvent ? (f ? b = new Event(a, { bubbles: !0 }) : (b = document.createEvent("Event"), b.initEvent(a, !0, !1)), c.dispatchEvent(b)) : c.fireEvent ? (b = document.createEventObject(), b.eventType = a, c.fireEvent("on" + a, b)) : this.trigger(a) }, a.expr.pseudos.icontains = function (b, c, d) { var e = a(b).find("a"), f = (e.data("tokens") || e.text()).toString().toUpperCase(); return f.includes(d[3].toUpperCase()) }, a.expr.pseudos.ibegins = function (b, c, d) { var e = a(b).find("a"), f = (e.data("tokens") || e.text()).toString().toUpperCase(); return f.startsWith(d[3].toUpperCase()) }, a.expr.pseudos.aicontains = function (b, c, d) { var e = a(b).find("a"), f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase(); return f.includes(d[3].toUpperCase()) }, a.expr.pseudos.aibegins = function (b, c, d) { var e = a(b).find("a"), f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase(); return f.startsWith(d[3].toUpperCase()) }; var g = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, h = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#x27;": "'", "&#x60;": "`" }, i = function (a) { var b = function (b) { return a[b] }, c = "(?:" + Object.keys(a).join("|") + ")", d = RegExp(c), e = RegExp(c, "g"); return function (a) { return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a } }, j = i(g), k = i(h), l = function (b, c) { d.useDefault || (a.valHooks.select.set = d._set, d.useDefault = !0), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title")); var e = this.options.windowPadding; "number" == typeof e && (this.options.windowPadding = [e, e, e, e]), this.val = l.prototype.val, this.render = l.prototype.render, this.refresh = l.prototype.refresh, this.setStyle = l.prototype.setStyle, this.selectAll = l.prototype.selectAll, this.deselectAll = l.prototype.deselectAll, this.destroy = l.prototype.destroy, this.remove = l.prototype.remove, this.show = l.prototype.show, this.hide = l.prototype.hide, this.init() }; l.VERSION = "1.12.4", l.DEFAULTS = { noneSelectedText: "Nothing selected", noneResultsText: "No results matched {0}", countSelectedText: function (a, b) { return 1 == a ? "{0} item selected" : "{0} items selected" }, maxOptionsText: function (a, b) { return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"] }, selectAllText: "Select All", deselectAllText: "Deselect All", doneButton: !1, doneButtonText: "Close", multipleSeparator: ", ", styleBase: "btn", style: "btn-default", size: "auto", title: null, selectedTextFormat: "values", width: !1, container: !1, hideDisabled: !1, showSubtext: !1, showIcon: !0, showContent: !0, dropupAuto: !0, header: !1, liveSearch: !1, liveSearchPlaceholder: null, liveSearchNormalize: !1, liveSearchStyle: "contains", actionsBox: !1, iconBase: "glyphicon", tickIcon: "glyphicon-ok", showTick: !1, template: { caret: '<span class="caret"></span>' }, maxOptions: !1, mobile: !1, selectOnTab: !1, dropdownAlignRight: !1, windowPadding: 0 }, l.prototype = {
            constructor: l, init: function () { var b = this, c = this.$element.attr("id"); this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight === !0 && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function (a) { a.preventDefault(), b.$button.focus() })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({ "hide.bs.dropdown": function (a) { b.$menuInner.attr("aria-expanded", !1), b.$element.trigger("hide.bs.select", a) }, "hidden.bs.dropdown": function (a) { b.$element.trigger("hidden.bs.select", a) }, "show.bs.dropdown": function (a) { b.$menuInner.attr("aria-expanded", !0), b.$element.trigger("show.bs.select", a) }, "shown.bs.dropdown": function (a) { b.$element.trigger("shown.bs.select", a) } }), b.$element[0].hasAttribute("required") && this.$element.on("invalid", function () { b.$button.addClass("bs-invalid"), b.$element.on({ "focus.bs.select": function () { b.$button.focus(), b.$element.off("focus.bs.select") }, "shown.bs.select": function () { b.$element.val(b.$element.val()).off("shown.bs.select") }, "rendered.bs.select": function () { this.validity.valid && b.$button.removeClass("bs-invalid"), b.$element.off("rendered.bs.select") } }), b.$button.on("blur.bs.select", function () { b.$element.focus().blur(), b.$button.off("blur.bs.select") }) }), setTimeout(function () { b.$element.trigger("loaded.bs.select") }) }, createDropdown: function () { var b = this.multiple || this.options.showTick ? " show-tick" : "", c = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "", d = this.autofocus ? " autofocus" : "", e = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "", f = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + j(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "", g = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "", h = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "", i = '<div class="btn-group bootstrap-select' + b + c + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + d + ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open" role="combobox">' + e + f + g + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' + h + "</div></div>"; return a(i) }, createView: function () { var a = this.createDropdown(), b = this.createLi(); return a.find("ul")[0].innerHTML = b, a }, reloadLi: function () { var a = this.createLi(); this.$menuInner[0].innerHTML = a }, createLi: function () { var c = this, d = [], e = 0, f = document.createElement("option"), g = -1, h = function (a, b, c, d) { return "<li" + ("undefined" != typeof c && "" !== c ? ' class="' + c + '"' : "") + ("undefined" != typeof b && null !== b ? ' data-original-index="' + b + '"' : "") + ("undefined" != typeof d && null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>" }, i = function (d, e, f, g) { return '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + (f ? ' style="' + f + '"' : "") + (c.options.liveSearchNormalize ? ' data-normalized-text="' + b(j(a(d).html())) + '"' : "") + ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") + ' role="option">' + d + '<span class="' + c.options.iconBase + " " + c.options.tickIcon + ' check-mark"></span></a>' }; if (this.options.title && !this.multiple && (g-- , !this.$element.find(".bs-title-option").length)) { var k = this.$element[0]; f.className = "bs-title-option", f.innerHTML = this.options.title, f.value = "", k.insertBefore(f, k.firstChild); var l = a(k.options[k.selectedIndex]); void 0 === l.attr("selected") && void 0 === this.$element.data("selected") && (f.selected = !0) } var m = this.$element.find("option"); return m.each(function (b) { var f = a(this); if (g++ , !f.hasClass("bs-title-option")) { var k, l = this.className || "", n = j(this.style.cssText), o = f.data("content") ? f.data("content") : f.html(), p = f.data("tokens") ? f.data("tokens") : null, q = "undefined" != typeof f.data("subtext") ? '<small class="text-muted">' + f.data("subtext") + "</small>" : "", r = "undefined" != typeof f.data("icon") ? '<span class="' + c.options.iconBase + " " + f.data("icon") + '"></span> ' : "", s = f.parent(), t = "OPTGROUP" === s[0].tagName, u = t && s[0].disabled, v = this.disabled || u; if ("" !== r && v && (r = "<span>" + r + "</span>"), c.options.hideDisabled && (v && !t || u)) return k = f.data("prevHiddenIndex"), f.next().data("prevHiddenIndex", void 0 !== k ? k : b), void g--; if (f.data("content") || (o = r + '<span class="text">' + o + q + "</span>"), t && f.data("divider") !== !0) { if (c.options.hideDisabled && v) { if (void 0 === s.data("allOptionsDisabled")) { var w = s.children(); s.data("allOptionsDisabled", w.filter(":disabled").length === w.length) } if (s.data("allOptionsDisabled")) return void g-- } var x = " " + s[0].className || ""; if (0 === f.index()) { e += 1; var y = s[0].label, z = "undefined" != typeof s.data("subtext") ? '<small class="text-muted">' + s.data("subtext") + "</small>" : "", A = s.data("icon") ? '<span class="' + c.options.iconBase + " " + s.data("icon") + '"></span> ' : ""; y = A + '<span class="text">' + j(y) + z + "</span>", 0 !== b && d.length > 0 && (g++ , d.push(h("", null, "divider", e + "div"))), g++ , d.push(h(y, null, "dropdown-header" + x, e)) } if (c.options.hideDisabled && v) return void g--; d.push(h(i(o, "opt " + l + x, n, p), b, "", e)) } else if (f.data("divider") === !0) d.push(h("", b, "divider")); else if (f.data("hidden") === !0) k = f.data("prevHiddenIndex"), f.next().data("prevHiddenIndex", void 0 !== k ? k : b), d.push(h(i(o, l, n, p), b, "hidden is-hidden")); else { var B = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName; if (!B && c.options.hideDisabled && (k = f.data("prevHiddenIndex"), void 0 !== k)) { var C = m.eq(k)[0].previousElementSibling; C && "OPTGROUP" === C.tagName && !C.disabled && (B = !0) } B && (g++ , d.push(h("", null, "divider", e + "div"))), d.push(h(i(o, l, n, p), b)) } c.liObj[b] = g } }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), d.join("") }, findLis: function () { return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis }, render: function (b) { var c, d = this, e = this.$element.find("option"); b !== !1 && e.each(function (a) { var b = d.findLis().eq(d.liObj[a]); d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, b), d.setSelected(a, this.selected, b) }), this.togglePlaceholder(), this.tabIndex(); var f = e.map(function () { if (this.selected) { if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return; var b, c = a(this), e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : ""; return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "", "undefined" != typeof c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content").toString() : e + c.html() + b } }).toArray(), g = this.multiple ? f.join(this.options.multipleSeparator) : f[0]; if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) { var h = this.options.selectedTextFormat.split(">"); if (h.length > 1 && f.length > h[1] || 1 == h.length && f.length >= 2) { c = this.options.hideDisabled ? ", [disabled]" : ""; var i = e.not('[data-divider="true"], [data-hidden="true"]' + c).length, j = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(f.length, i) : this.options.countSelectedText; g = j.replace("{0}", f.length.toString()).replace("{1}", i.toString()) } } void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (g = this.options.title), g || (g = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", k(a.trim(g.replace(/<[^>]*>?/g, "")))), this.$button.children(".filter-option").html(g), this.$element.trigger("rendered.bs.select") }, setStyle: function (a, b) { this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")); var c = a ? a : this.options.style; "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c)) }, liHeight: function (b) { if (b || this.options.size !== !1 && !this.sizeInfo) { var c = document.createElement("div"), d = document.createElement("div"), e = document.createElement("ul"), f = document.createElement("li"), g = document.createElement("li"), h = document.createElement("a"), i = document.createElement("span"), j = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null, k = this.options.liveSearch ? document.createElement("div") : null, l = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null, m = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null; if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", d.className = "dropdown-menu open", e.className = "dropdown-menu inner", f.className = "divider", i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) { var n = document.createElement("input"); k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k) } l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c); var o = h.offsetHeight, p = j ? j.offsetHeight : 0, q = k ? k.offsetHeight : 0, r = l ? l.offsetHeight : 0, s = m ? m.offsetHeight : 0, t = a(f).outerHeight(!0), u = "function" == typeof getComputedStyle && getComputedStyle(d), v = u ? null : a(d), w = { vert: parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")), horiz: parseInt(u ? u.paddingLeft : v.css("paddingLeft")) + parseInt(u ? u.paddingRight : v.css("paddingRight")) + parseInt(u ? u.borderLeftWidth : v.css("borderLeftWidth")) + parseInt(u ? u.borderRightWidth : v.css("borderRightWidth")) }, x = { vert: w.vert + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2, horiz: w.horiz + parseInt(u ? u.marginLeft : v.css("marginLeft")) + parseInt(u ? u.marginRight : v.css("marginRight")) + 2 }; document.body.removeChild(c), this.sizeInfo = { liHeight: o, headerHeight: p, searchHeight: q, actionsHeight: r, doneButtonHeight: s, dividerHeight: t, menuPadding: w, menuExtras: x } } }, setSize: function () { if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) { var b, c, d, e, f, g, h, i, j = this, k = this.$menu, l = this.$menuInner, m = a(window), n = this.$newElement[0].offsetHeight, o = this.$newElement[0].offsetWidth, p = this.sizeInfo.liHeight, q = this.sizeInfo.headerHeight, r = this.sizeInfo.searchHeight, s = this.sizeInfo.actionsHeight, t = this.sizeInfo.doneButtonHeight, u = this.sizeInfo.dividerHeight, v = this.sizeInfo.menuPadding, w = this.sizeInfo.menuExtras, x = this.options.hideDisabled ? ".disabled" : "", y = function () { var b, c = j.$newElement.offset(), d = a(j.options.container); j.options.container && !d.is("body") ? (b = d.offset(), b.top += parseInt(d.css("borderTopWidth")), b.left += parseInt(d.css("borderLeftWidth"))) : b = { top: 0, left: 0 }; var e = j.options.windowPadding; f = c.top - b.top - m.scrollTop(), g = m.height() - f - n - b.top - e[2], h = c.left - b.left - m.scrollLeft(), i = m.width() - h - o - b.left - e[1], f -= e[0], h -= e[3] }; if (y(), "auto" === this.options.size) { var z = function () { var m, n = function (b, c) { return function (d) { return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b)) } }, u = j.$menuInner[0].getElementsByTagName("li"), x = Array.prototype.filter ? Array.prototype.filter.call(u, n("hidden", !1)) : j.$lis.not(".hidden"), z = Array.prototype.filter ? Array.prototype.filter.call(x, n("dropdown-header", !0)) : x.filter(".dropdown-header"); y(), b = g - w.vert, c = i - w.horiz, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height"), k.data("width") || k.data("width", k.width()), e = k.data("width")) : (d = k.height(), e = k.width()), j.options.dropupAuto && j.$newElement.toggleClass("dropup", f > g && b - w.vert < d), j.$newElement.hasClass("dropup") && (b = f - w.vert), "auto" === j.options.dropdownAlignRight && k.toggleClass("dropdown-menu-right", h > i && c - w.horiz < e - o), m = x.length + z.length > 3 ? 3 * p + w.vert - 2 : 0, k.css({ "max-height": b + "px", overflow: "hidden", "min-height": m + q + r + s + t + "px" }), l.css({ "max-height": b - q - r - s - t - v.vert + "px", "overflow-y": "auto", "min-height": Math.max(m - v.vert, 0) + "px" }) }; z(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", z), m.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", z) } else if (this.options.size && "auto" != this.options.size && this.$lis.not(x).length > this.options.size) { var A = this.$lis.not(".divider").not(x).children().slice(0, this.options.size).last().parent().index(), B = this.$lis.slice(0, A + 1).filter(".divider").length; b = p * this.options.size + B * u + v.vert, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height")) : d = k.height(), j.options.dropupAuto && this.$newElement.toggleClass("dropup", f > g && b - w.vert < d), k.css({ "max-height": b + q + r + s + t + "px", overflow: "hidden", "min-height": "" }), l.css({ "max-height": b - v.vert + "px", "overflow-y": "auto", "min-height": "" }) } } }, setWidth: function () { if ("auto" === this.options.width) { this.$menu.css("min-width", "0"); var a = this.$menu.parent().clone().appendTo("body"), b = this.options.container ? this.$newElement.clone().appendTo("body") : a, c = a.children(".dropdown-menu").outerWidth(), d = b.css("width", "auto").children("button").outerWidth(); a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px") } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")); this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width") }, selectPosition: function () { this.$bsContainer = a('<div class="bs-container" />'); var b, c, d, e = this, f = a(this.options.container), g = function (a) { e.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), f.is("body") ? c = { top: 0, left: 0 } : (c = f.offset(), c.top += parseInt(f.css("borderTopWidth")) - f.scrollTop(), c.left += parseInt(f.css("borderLeftWidth")) - f.scrollLeft()), d = a.hasClass("dropup") ? 0 : a[0].offsetHeight, e.$bsContainer.css({ top: b.top - c.top + d, left: b.left - c.left, width: a[0].offsetWidth }) }; this.$button.on("click", function () { var b = a(this); e.isDisabled() || (g(e.$newElement), e.$bsContainer.appendTo(e.options.container).toggleClass("open", !b.hasClass("open")).append(e.$menu)) }), a(window).on("resize scroll", function () { g(e.$newElement) }), this.$element.on("hide.bs.select", function () { e.$menu.data("height", e.$menu.height()), e.$bsContainer.detach() }) }, setSelected: function (a, b, c) { c || (this.togglePlaceholder(), c = this.findLis().eq(this.liObj[a])), c.toggleClass("selected", b).find("a").attr("aria-selected", b) }, setDisabled: function (a, b, c) { c || (c = this.findLis().eq(this.liObj[a])), b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1) }, isDisabled: function () { return this.$element[0].disabled }, checkDisabled: function () { var a = this; this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled").attr("aria-disabled", !1)), this.$button.attr("tabindex") != -1 || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () { return !a.isDisabled() }) }, togglePlaceholder: function () { var a = this.$element.val(); this.$button.toggleClass("bs-placeholder", null === a || "" === a || a.constructor === Array && 0 === a.length) }, tabIndex: function () { this.$element.data("tabindex") !== this.$element.attr("tabindex") && this.$element.attr("tabindex") !== -98 && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98) }, clickListener: function () { var b = this, c = a(document); c.data("spaceSelect", !1), this.$button.on("keyup", function (a) { /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1)) }), this.$button.on("click", function () { b.setSize() }), this.$element.on("shown.bs.select", function () { if (b.options.liveSearch || b.multiple) { if (!b.multiple) { var a = b.liObj[b.$element[0].selectedIndex]; if ("number" != typeof a || b.options.size === !1) return; var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop; c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c } } else b.$menuInner.find(".selected a").focus() }), this.$menuInner.on("click", "li a", function (c) { var d = a(this), f = d.parent().data("originalIndex"), g = b.$element.val(), h = b.$element.prop("selectedIndex"), i = !0; if (b.multiple && 1 !== b.options.maxOptions && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) { var j = b.$element.find("option"), k = j.eq(f), l = k.prop("selected"), m = k.parent("optgroup"), n = b.options.maxOptions, o = m.data("maxOptions") || !1; if (b.multiple) { if (k.prop("selected", !l), b.setSelected(f, !l), d.blur(), n !== !1 || o !== !1) { var p = n < j.filter(":selected").length, q = o < m.find("option:selected").length; if (n && p || o && q) if (n && 1 == n) j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(f, !0); else if (o && 1 == o) { m.find("option:selected").prop("selected", !1), k.prop("selected", !0); var r = d.parent().data("optgroup"); b.$menuInner.find('[data-optgroup="' + r + '"]').removeClass("selected"), b.setSelected(f, !0) } else { var s = "string" == typeof b.options.maxOptionsText ? [b.options.maxOptionsText, b.options.maxOptionsText] : b.options.maxOptionsText, t = "function" == typeof s ? s(n, o) : s, u = t[0].replace("{n}", n), v = t[1].replace("{n}", o), w = a('<div class="notify"></div>'); t[2] && (u = u.replace("{var}", t[2][n > 1 ? 0 : 1]), v = v.replace("{var}", t[2][o > 1 ? 0 : 1])), k.prop("selected", !1), b.$menu.append(w), n && p && (w.append(a("<div>" + u + "</div>")), i = !1, b.$element.trigger("maxReached.bs.select")), o && q && (w.append(a("<div>" + v + "</div>")), i = !1, b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () { b.setSelected(f, !1) }, 10), w.delay(750).fadeOut(300, function () { a(this).remove() }) } } } else j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), b.setSelected(f, !0); !b.multiple || b.multiple && 1 === b.options.maxOptions ? b.$button.focus() : b.options.liveSearch && b.$searchbox.focus(), i && (g != b.$element.val() && b.multiple || h != b.$element.prop("selectedIndex") && !b.multiple) && (e = [f, k.prop("selected"), l], b.$element.triggerNative("change")) } }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (c) { c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus()) }), this.$menuInner.on("click", ".divider, .dropdown-header", function (a) { a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus() }), this.$menu.on("click", ".popover-title .close", function () { b.$button.click() }), this.$searchbox.on("click", function (a) { a.stopPropagation() }), this.$menu.on("click", ".actions-btn", function (c) { b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll() }), this.$element.change(function () { b.render(!1), b.$element.trigger("changed.bs.select", e), e = null }) }, liveSearchListener: function () { var c = this, d = a('<li class="no-results"></li>'); this.$button.on("click.dropdown.data-api", function () { c.$menuInner.find(".active").removeClass("active"), c.$searchbox.val() && (c.$searchbox.val(""), c.$lis.not(".is-hidden").removeClass("hidden"), d.parent().length && d.remove()), c.multiple || c.$menuInner.find(".selected").addClass("active"), setTimeout(function () { c.$searchbox.focus() }, 10) }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (a) { a.stopPropagation() }), this.$searchbox.on("input propertychange", function () { if (c.$lis.not(".is-hidden").removeClass("hidden"), c.$lis.filter(".active").removeClass("active"), d.remove(), c.$searchbox.val()) { var e, f = c.$lis.not(".is-hidden, .divider, .dropdown-header"); if (e = c.options.liveSearchNormalize ? f.not(":a" + c._searchStyle() + '("' + b(c.$searchbox.val()) + '")') : f.not(":" + c._searchStyle() + '("' + c.$searchbox.val() + '")'), e.length === f.length) d.html(c.options.noneResultsText.replace("{0}", '"' + j(c.$searchbox.val()) + '"')), c.$menuInner.append(d), c.$lis.addClass("hidden"); else { e.addClass("hidden"); var g, h = c.$lis.not(".hidden"); h.each(function (b) { var c = a(this); c.hasClass("divider") ? void 0 === g ? c.addClass("hidden") : (g && g.addClass("hidden"), g = c) : c.hasClass("dropdown-header") && h.eq(b + 1).data("optgroup") !== c.data("optgroup") ? c.addClass("hidden") : g = null }), g && g.addClass("hidden"), f.not(".hidden").first().addClass("active"), c.$menuInner.scrollTop(0) } } }) }, _searchStyle: function () { var a = { begins: "ibegins", startsWith: "ibegins" }; return a[this.options.liveSearchStyle] || "icontains" }, val: function (a) { return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val() }, changeAll: function (b) { if (this.multiple) { "undefined" == typeof b && (b = !0), this.findLis(); var c = this.$element.find("option"), d = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"), e = d.length, f = []; if (b) { if (d.filter(".selected").length === d.length) return } else if (0 === d.filter(".selected").length) return; d.toggleClass("selected", b); for (var g = 0; g < e; g++) { var h = d[g].getAttribute("data-original-index"); f[f.length] = c.eq(h)[0] } a(f).prop("selected", b), this.render(!1), this.togglePlaceholder(), this.$element.triggerNative("change") } }, selectAll: function () { return this.changeAll(!0) }, deselectAll: function () { return this.changeAll(!1) }, toggle: function (a) { a = a || window.event, a && a.stopPropagation(), this.$button.trigger("click") }, keydown: function (b) { var c, d, e, f, g = a(this), h = g.is("input") ? g.parent().parent() : g.parent(), i = h.data("this"), j = ":not(.disabled, .hidden, .dropdown-header, .divider)", k = { 32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9" }; if (f = i.$newElement.hasClass("open"), !f && (b.keyCode >= 48 && b.keyCode <= 57 || b.keyCode >= 96 && b.keyCode <= 105 || b.keyCode >= 65 && b.keyCode <= 90)) return i.options.container ? i.$button.trigger("click") : (i.setSize(), i.$menu.parent().addClass("open"), f = !0), void i.$searchbox.focus(); if (i.options.liveSearch && /(^9$|27)/.test(b.keyCode.toString(10)) && f && (b.preventDefault(), b.stopPropagation(), i.$menuInner.click(), i.$button.focus()), /(38|40)/.test(b.keyCode.toString(10))) { if (c = i.$lis.filter(j), !c.length) return; d = i.options.liveSearch ? c.index(c.filter(".active")) : c.index(c.find("a").filter(":focus").parent()), e = i.$menuInner.data("prevIndex"), 38 == b.keyCode ? (!i.options.liveSearch && d != e || d == -1 || d-- , d < 0 && (d += c.length)) : 40 == b.keyCode && ((i.options.liveSearch || d == e) && d++ , d %= c.length), i.$menuInner.data("prevIndex", d), i.options.liveSearch ? (b.preventDefault(), g.hasClass("dropdown-toggle") || (c.removeClass("active").eq(d).addClass("active").children("a").focus(), g.focus())) : c.eq(d).children("a").focus() } else if (!g.is("input")) { var l, m, n = []; c = i.$lis.filter(j), c.each(function (c) { a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == k[b.keyCode] && n.push(c) }), l = a(document).data("keycount"), l++ , a(document).data("keycount", l), m = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), m != k[b.keyCode] ? (l = 1, a(document).data("keycount", l)) : l >= n.length && (a(document).data("keycount", 0), l > n.length && (l = 1)), c.eq(n[l - 1]).children("a").focus() } if ((/(13|32)/.test(b.keyCode.toString(10)) || /(^9$)/.test(b.keyCode.toString(10)) && i.options.selectOnTab) && f) { if (/(32)/.test(b.keyCode.toString(10)) || b.preventDefault(), i.options.liveSearch) /(32)/.test(b.keyCode.toString(10)) || (i.$menuInner.find(".active a").click(), g.focus()); else { var o = a(":focus"); o.click(), o.focus(), b.preventDefault(), a(document).data("spaceSelect", !0) } a(document).data("keycount", 0) } (/(^9$|27)/.test(b.keyCode.toString(10)) && f && (i.multiple || i.options.liveSearch) || /(27)/.test(b.keyCode.toString(10)) && !f) && (i.$menu.parent().removeClass("open"), i.options.container && i.$newElement.removeClass("open"), i.$button.focus()) }, mobile: function () { this.$element.addClass("mobile-device") }, refresh: function () {
            this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(),
                this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
            }, hide: function () { this.$newElement.hide() }, show: function () { this.$newElement.show() }, remove: function () { this.$newElement.remove(), this.$element.remove() }, destroy: function () { this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker") }
        }; var m = a.fn.selectpicker; a.fn.selectpicker = c, a.fn.selectpicker.Constructor = l, a.fn.selectpicker.noConflict = function () { return a.fn.selectpicker = m, this }, a(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', l.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function (a) { a.stopPropagation() }), a(window).on("load.bs.select.data-api", function () { a(".selectpicker").each(function () { var b = a(this); c.call(b, b.data()) }) })
    }(a)
});
//# sourceMappingURL=bootstrap-select.js.map

/*!
 * jquery-confirm v3.3.0 (http://craftpip.github.io/jquery-confirm/)
 * Author: Boniface Pereira
 * Website: www.craftpip.com
 * Contact: hey@craftpip.com
 *
 * Copyright 2013-2017 jquery-confirm
 * Licensed under MIT (https://github.com/craftpip/jquery-confirm/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
    throw new Error('jquery-confirm requires jQuery');
}

var jconfirm, Jconfirm;
(function ($, window) {
    "use strict";

    $.fn.confirm = function (options, option2) {
        if (typeof options === 'undefined') options = {};
        if (typeof options === 'string') {
            options = {
                content: options,
                title: (option2) ? option2 : false
            };
        }
        /*
         *  Alias of $.confirm to emulate native confirm()
         */
        $(this).each(function () {
            var $this = $(this);
            if ($this.attr('jc-attached')) {
                console.warn('jConfirm has already been attached to this element ', $this[0]);
                return;
            }

            $this.on('click', function (e) {
                e.preventDefault();
                var jcOption = $.extend({}, options);
                if ($this.attr('data-title'))
                    jcOption['title'] = $this.attr('data-title');
                if ($this.attr('data-content'))
                    jcOption['content'] = $this.attr('data-content');
                if (typeof jcOption['buttons'] == 'undefined')
                    jcOption['buttons'] = {};

                jcOption['$target'] = $this;
                if ($this.attr('href') && Object.keys(jcOption['buttons']).length == 0) {
                    var buttons = $.extend(true, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
                    var firstBtn = Object.keys(buttons)[0];
                    jcOption['buttons'] = buttons;
                    jcOption.buttons[firstBtn].action = function () {
                        location.href = $this.attr('href');
                    };
                }
                jcOption['closeIcon'] = false;
                var instance = $.confirm(jcOption);
            });

            $this.attr('jc-attached', true);
        });
        return $(this);
    };
    $.confirm = function (options, option2) {
        if (typeof options === 'undefined') options = {};
        if (typeof options === 'string') {
            options = {
                content: options,
                title: (option2) ? option2 : false
            };
        }

        if (typeof options['buttons'] != 'object')
            options['buttons'] = {};

        if (Object.keys(options['buttons']).length == 0) {
            var buttons = $.extend(true, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
            options['buttons'] = buttons;
        }

        /*
         *  Alias of jconfirm
         */
        return jconfirm(options);
    };
    $.alert = function (options, option2) {
        if (typeof options === 'undefined') options = {};
        if (typeof options === 'string') {
            options = {
                content: options,
                title: (option2) ? option2 : false
            };
        }

        if (typeof options.buttons != 'object')
            options.buttons = {};

        if (Object.keys(options['buttons']).length == 0) {
            var buttons = $.extend(true, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
            var firstBtn = Object.keys(buttons)[0];
            options['buttons'][firstBtn] = buttons[firstBtn];
        }
        /*
         *  Alias of jconfirm
         */
        return jconfirm(options);
    };
    $.dialog = function (options, option2) {
        if (typeof options === 'undefined') options = {};
        if (typeof options === 'string') {
            options = {
                content: options,
                title: (option2) ? option2 : false,
                closeIcon: function () {
                    // Just close the modal
                }
            };
        }

        options['buttons'] = {}; // purge buttons

        if (typeof options['closeIcon'] == 'undefined') {
            // Dialog must have a closeIcon.
            options['closeIcon'] = function () {
            }
        }
        /*
         *  Alias of jconfirm
         */
        options.confirmKeys = [13];
        return jconfirm(options);
    };

    jconfirm = function (options) {
        if (typeof options === 'undefined') options = {};
        /*
         * initial function for calling.
         */
        var pluginOptions = $.extend(true, {}, jconfirm.pluginDefaults);
        if (jconfirm.defaults) {
            pluginOptions = $.extend(true, pluginOptions, jconfirm.defaults);
        }

        /*
         * merge options with plugin defaults.
         */
        pluginOptions = $.extend(true, {}, pluginOptions, options);
        var instance = new Jconfirm(pluginOptions);
        jconfirm.instances.push(instance);
        return instance;
    };
    Jconfirm = function (options) {
        /*
         * constructor function Jconfirm,
         * options = user options.
         */
        $.extend(this, options);
        this._init();
    };
    Jconfirm.prototype = {
        _init: function () {
            var that = this;

            if (!jconfirm.instances.length)
                jconfirm.lastFocused = $('body').find(':focus');

            this._id = Math.round(Math.random() * 99999);
            /**
             * contentParsed maintains the contents for $content, before it is put in DOM
             */
            this.contentParsed = $(document.createElement('div'));

            if (!this.lazyOpen) {
                setTimeout(function () {
                    that.open();
                }, 0);
            }
        },
        _buildHTML: function () {
            var that = this;

            // prefix the animation string and store in animationParsed
            this._parseAnimation(this.animation, 'o');
            this._parseAnimation(this.closeAnimation, 'c');
            this._parseBgDismissAnimation(this.backgroundDismissAnimation);
            this._parseColumnClass(this.columnClass);
            this._parseTheme(this.theme);
            this._parseType(this.type);

            /*
             * Append html.
             */
            var template = $(this.template);
            template.find('.jconfirm-box').addClass(this.animationParsed).addClass(this.backgroundDismissAnimationParsed).addClass(this.typeParsed);

            if (this.typeAnimated)
                template.find('.jconfirm-box').addClass('jconfirm-type-animated');

            if (this.useBootstrap) {
                template.find('.jc-bs3-row').addClass(this.bootstrapClasses.row);
                template.find('.jc-bs3-row').addClass('justify-content-md-center justify-content-sm-center justify-content-xs-center justify-content-lg-center');

                template.find('.jconfirm-box-container').addClass(this.columnClassParsed);

                if (this.containerFluid)
                    template.find('.jc-bs3-container').addClass(this.bootstrapClasses.containerFluid);
                else
                    template.find('.jc-bs3-container').addClass(this.bootstrapClasses.container);
            } else {
                template.find('.jconfirm-box').css('width', this.boxWidth);
            }

            if (this.titleClass)
                template.find('.jconfirm-title-c').addClass(this.titleClass);

            template.addClass(this.themeParsed);
            var ariaLabel = 'jconfirm-box' + this._id;
            template.find('.jconfirm-box').attr('aria-labelledby', ariaLabel).attr('tabindex', -1);
            template.find('.jconfirm-content').attr('id', ariaLabel);
            if (this.bgOpacity !== null)
                template.find('.jconfirm-bg').css('opacity', this.bgOpacity);
            if (this.rtl)
                template.addClass('jconfirm-rtl');

            this.$el = template.appendTo(this.container);
            this.$jconfirmBoxContainer = this.$el.find('.jconfirm-box-container');
            this.$jconfirmBox = this.$body = this.$el.find('.jconfirm-box');
            this.$jconfirmBg = this.$el.find('.jconfirm-bg');
            this.$title = this.$el.find('.jconfirm-title');
            this.$titleContainer = this.$el.find('.jconfirm-title-c');
            this.$content = this.$el.find('div.jconfirm-content');
            this.$contentPane = this.$el.find('.jconfirm-content-pane');
            this.$icon = this.$el.find('.jconfirm-icon-c');
            this.$closeIcon = this.$el.find('.jconfirm-closeIcon');
            this.$holder = this.$el.find('.jconfirm-holder');
            // this.$content.css(this._getCSS(this.animationSpeed, this.animationBounce));
            this.$btnc = this.$el.find('.jconfirm-buttons');
            this.$scrollPane = this.$el.find('.jconfirm-scrollpane');

            that.setStartingPoint();

            // for loading content via URL
            this._contentReady = $.Deferred();
            this._modalReady = $.Deferred();
            this.$holder.css({
                'padding-top': this.offsetTop,
                'padding-bottom': this.offsetBottom,
            });

            this.setTitle();
            this.setIcon();
            this._setButtons();
            this._parseContent();
            this.initDraggable();

            if (this.isAjax)
                this.showLoading(false);

            $.when(this._contentReady, this._modalReady).then(function () {
                if (that.isAjaxLoading)
                    setTimeout(function () {
                        that.isAjaxLoading = false;
                        that.setContent();
                        that.setTitle();
                        that.setIcon();
                        setTimeout(function () {
                            that.hideLoading(false);
                            that._updateContentMaxHeight();
                        }, 100);
                        if (typeof that.onContentReady === 'function')
                            that.onContentReady();
                    }, 50);
                else {
                    // that.setContent();
                    that._updateContentMaxHeight();
                    that.setTitle();
                    that.setIcon();
                    if (typeof that.onContentReady === 'function')
                        that.onContentReady();
                }

                // start countdown after content has loaded.
                if (that.autoClose)
                    that._startCountDown();
            });

            this._watchContent();

            if (this.animation === 'none') {
                this.animationSpeed = 1;
                this.animationBounce = 1;
            }

            this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce));
            this.$contentPane.css(this._getCSS(this.animationSpeed, 1));
            this.$jconfirmBg.css(this._getCSS(this.animationSpeed, 1));
            this.$jconfirmBoxContainer.css(this._getCSS(this.animationSpeed, 1));
        },
        _typePrefix: 'jconfirm-type-',
        typeParsed: '',
        _parseType: function (type) {
            this.typeParsed = this._typePrefix + type;
        },
        setType: function (type) {
            var oldClass = this.typeParsed;
            this._parseType(type);
            this.$jconfirmBox.removeClass(oldClass).addClass(this.typeParsed);
        },
        themeParsed: '',
        _themePrefix: 'jconfirm-',
        setTheme: function (theme) {
            var previous = this.theme;
            this.theme = theme || this.theme;
            this._parseTheme(this.theme);
            if (previous)
                this.$el.removeClass(previous);
            this.$el.addClass(this.themeParsed);
            this.theme = theme;
        },
        _parseTheme: function (theme) {
            var that = this;
            theme = theme.split(',');
            $.each(theme, function (k, a) {
                if (a.indexOf(that._themePrefix) === -1)
                    theme[k] = that._themePrefix + $.trim(a);
            });
            this.themeParsed = theme.join(' ').toLowerCase();
        },
        backgroundDismissAnimationParsed: '',
        _bgDismissPrefix: 'jconfirm-hilight-',
        _parseBgDismissAnimation: function (bgDismissAnimation) {
            var animation = bgDismissAnimation.split(',');
            var that = this;
            $.each(animation, function (k, a) {
                if (a.indexOf(that._bgDismissPrefix) === -1)
                    animation[k] = that._bgDismissPrefix + $.trim(a);
            });
            this.backgroundDismissAnimationParsed = animation.join(' ').toLowerCase();
        },
        animationParsed: '',
        closeAnimationParsed: '',
        _animationPrefix: 'jconfirm-animation-',
        setAnimation: function (animation) {
            this.animation = animation || this.animation;
            this._parseAnimation(this.animation, 'o');
        },
        _parseAnimation: function (animation, which) {
            which = which || 'o'; // parse what animation and store where. open or close?
            var animations = animation.split(',');
            var that = this;
            $.each(animations, function (k, a) {
                if (a.indexOf(that._animationPrefix) === -1)
                    animations[k] = that._animationPrefix + $.trim(a);
            });
            var a_string = animations.join(' ').toLowerCase();
            if (which === 'o')
                this.animationParsed = a_string;
            else
                this.closeAnimationParsed = a_string;

            return a_string;
        },
        setCloseAnimation: function (closeAnimation) {
            this.closeAnimation = closeAnimation || this.closeAnimation;
            this._parseAnimation(this.closeAnimation, 'c');
        },
        setAnimationSpeed: function (speed) {
            this.animationSpeed = speed || this.animationSpeed;
            // this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce));
        },
        columnClassParsed: '',
        setColumnClass: function (colClass) {
            if (!this.useBootstrap) {
                console.warn("cannot set columnClass, useBootstrap is set to false");
                return;
            }
            this.columnClass = colClass || this.columnClass;
            this._parseColumnClass(this.columnClass);
            this.$jconfirmBoxContainer.addClass(this.columnClassParsed);
        },
        _updateContentMaxHeight: function () {
            var height = $(window).height() - (this.$jconfirmBox.outerHeight() - this.$contentPane.outerHeight()) - (this.offsetTop + this.offsetBottom);
            this.$contentPane.css({
                'max-height': height + 'px'
            });
        },
        setBoxWidth: function (width) {
            if (this.useBootstrap) {
                console.warn("cannot set boxWidth, useBootstrap is set to true");
                return;
            }
            this.boxWidth = width;
            this.$jconfirmBox.css('width', width);
        },
        _parseColumnClass: function (colClass) {
            colClass = colClass.toLowerCase();
            var p;
            switch (colClass) {
                case 'xl':
                case 'xlarge':
                    p = 'col-md-12';
                    break;
                case 'l':
                case 'large':
                    p = 'col-md-8 col-md-offset-2';
                    break;
                case 'm':
                case 'medium':
                    p = 'col-md-6 col-md-offset-3';
                    break;
                case 's':
                case 'small':
                    p = 'col-md-4 col-md-offset-4';
                    break;
                case 'xs':
                case 'xsmall':
                    p = 'col-md-2 col-md-offset-5';
                    break;
                default:
                    p = colClass;
            }
            this.columnClassParsed = p;
        },
        initDraggable: function () {
            var that = this;
            var $t = this.$titleContainer;

            this.resetDrag();
            if (this.draggable) {
                $t.on('mousedown', function (e) {
                    $t.addClass('jconfirm-hand');
                    that.mouseX = e.clientX;
                    that.mouseY = e.clientY;
                    that.isDrag = true;
                });
                $(window).on('mousemove.' + this._id, function (e) {
                    if (that.isDrag) {
                        that.movingX = e.clientX - that.mouseX + that.initialX;
                        that.movingY = e.clientY - that.mouseY + that.initialY;
                        that.setDrag();
                    }
                });

                $(window).on('mouseup.' + this._id, function () {
                    $t.removeClass('jconfirm-hand');
                    if (that.isDrag) {
                        that.isDrag = false;
                        that.initialX = that.movingX;
                        that.initialY = that.movingY;
                    }
                })
            }
        },
        resetDrag: function () {
            this.isDrag = false;
            this.initialX = 0;
            this.initialY = 0;
            this.movingX = 0;
            this.movingY = 0;
            this.mouseX = 0;
            this.mouseY = 0;
            this.$jconfirmBoxContainer.css('transform', 'translate(' + 0 + 'px, ' + 0 + 'px)');
        },
        setDrag: function () {
            if (!this.draggable)
                return;

            this.alignMiddle = false;
            var boxWidth = this.$jconfirmBox.outerWidth();
            var boxHeight = this.$jconfirmBox.outerHeight();
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            var that = this;
            var dragUpdate = 1;
            if (that.movingX % dragUpdate === 0 || that.movingY % dragUpdate === 0) {
                if (that.dragWindowBorder) {
                    var leftDistance = (windowWidth / 2) - boxWidth / 2;
                    var topDistance = (windowHeight / 2) - boxHeight / 2;
                    topDistance -= that.dragWindowGap;
                    leftDistance -= that.dragWindowGap;

                    if (leftDistance + that.movingX < 0) {
                        that.movingX = -leftDistance;
                    } else if (leftDistance - that.movingX < 0) {
                        that.movingX = leftDistance;
                    }

                    if (topDistance + that.movingY < 0) {
                        that.movingY = -topDistance;
                    } else if (topDistance - that.movingY < 0) {
                        that.movingY = topDistance;
                    }
                }

                that.$jconfirmBoxContainer.css('transform', 'translate(' + that.movingX + 'px, ' + that.movingY + 'px)');
            }
        },
        _scrollTop: function () {
            if (typeof pageYOffset !== 'undefined') {
                //most browsers except IE before #9
                return pageYOffset;
            }
            else {
                var B = document.body; //IE 'quirks'
                var D = document.documentElement; //IE with doctype
                D = (D.clientHeight) ? D : B;
                return D.scrollTop;
            }
        },
        _watchContent: function () {
            var that = this;
            if (this._timer) clearInterval(this._timer);

            var prevContentHeight = 0;
            this._timer = setInterval(function () {
                if (that.smoothContent) {
                    var contentHeight = that.$content.outerHeight() || 0;
                    if (contentHeight !== prevContentHeight) {
                        that.$contentPane.css({
                            'height': contentHeight
                        }).scrollTop(0);
                        prevContentHeight = contentHeight;
                    }
                    var wh = $(window).height();
                    var total = that.offsetTop + that.offsetBottom + that.$jconfirmBox.height() - that.$contentPane.height() + that.$content.height();
                    if (total < wh) {
                        that.$contentPane.addClass('no-scroll');
                    } else {
                        that.$contentPane.removeClass('no-scroll');
                    }
                }
            }, this.watchInterval);
        },
        _overflowClass: 'jconfirm-overflow',
        _hilightAnimating: false,
        highlight: function () {
            this.hiLightModal();
        },
        hiLightModal: function () {
            var that = this;
            if (this._hilightAnimating)
                return;

            that.$body.addClass('hilight');
            var duration = parseFloat(that.$body.css('animation-duration')) || 2;
            this._hilightAnimating = true;
            setTimeout(function () {
                that._hilightAnimating = false;
                that.$body.removeClass('hilight');
            }, duration * 1000);
        },
        _bindEvents: function () {
            var that = this;
            this.boxClicked = false;

            this.$scrollPane.click(function (e) { // Ignore propagated clicks
                if (!that.boxClicked) { // Background clicked
                    /*
                     If backgroundDismiss is a function and its return value is truthy
                     proceed to close the modal.
                     */
                    var buttonName = false;
                    var shouldClose = false;
                    var str;

                    if (typeof that.backgroundDismiss == 'function')
                        str = that.backgroundDismiss();
                    else
                        str = that.backgroundDismiss;

                    if (typeof str == 'string' && typeof that.buttons[str] != 'undefined') {
                        buttonName = str;
                        shouldClose = false;
                    } else if (typeof str == 'undefined' || !!(str) == true) {
                        shouldClose = true;
                    } else {
                        shouldClose = false;
                    }

                    if (buttonName) {
                        var btnResponse = that.buttons[buttonName].action.apply(that);
                        shouldClose = (typeof btnResponse == 'undefined') || !!(btnResponse);
                    }

                    if (shouldClose)
                        that.close();
                    else
                        that.hiLightModal();
                }
                that.boxClicked = false;
            });

            this.$jconfirmBox.click(function (e) {
                that.boxClicked = true;
            });

            var isKeyDown = false;
            $(window).on('jcKeyDown.' + that._id, function (e) {
                if (!isKeyDown) {
                    isKeyDown = true;
                }
            });
            $(window).on('keyup.' + that._id, function (e) {
                if (isKeyDown) {
                    that.reactOnKey(e);
                    isKeyDown = false;
                }
            });

            $(window).on('resize.' + this._id, function () {
                that._updateContentMaxHeight();
                setTimeout(function () {
                    that.resetDrag();
                }, 100);
            });
        },
        _cubic_bezier: '0.36, 0.55, 0.19',
        _getCSS: function (speed, bounce) {
            return {
                '-webkit-transition-duration': speed / 1000 + 's',
                'transition-duration': speed / 1000 + 's',
                '-webkit-transition-timing-function': 'cubic-bezier(' + this._cubic_bezier + ', ' + bounce + ')',
                'transition-timing-function': 'cubic-bezier(' + this._cubic_bezier + ', ' + bounce + ')'
            };
        },
        _setButtons: function () {
            var that = this;
            /*
             * Settings up buttons
             */

            var total_buttons = 0;
            if (typeof this.buttons !== 'object')
                this.buttons = {};

            $.each(this.buttons, function (key, button) {
                total_buttons += 1;
                if (typeof button === 'function') {
                    that.buttons[key] = button = {
                        action: button
                    };
                }

                that.buttons[key].text = button.text || key;
                that.buttons[key].btnClass = button.btnClass || 'btn-default';
                that.buttons[key].action = button.action || function () {
                    };
                that.buttons[key].keys = button.keys || [];
                that.buttons[key].isHidden = button.isHidden || false;
                that.buttons[key].isDisabled = button.isDisabled || false;

                $.each(that.buttons[key].keys, function (i, a) {
                    that.buttons[key].keys[i] = a.toLowerCase();
                });

                var button_element = $('<button type="button" class="btn"></button>')
                    .html(that.buttons[key].text)
                    .addClass(that.buttons[key].btnClass)
                    .prop('disabled', that.buttons[key].isDisabled)
                    .css('display', that.buttons[key].isHidden ? 'none' : '')
                    .click(function (e) {
                        e.preventDefault();
                        var res = that.buttons[key].action.apply(that, [that.buttons[key]]);
                        that.onAction.apply(that, [key, that.buttons[key]]);
                        that._stopCountDown();
                        if (typeof res === 'undefined' || res)
                            that.close();
                    });

                that.buttons[key].el = button_element;
                that.buttons[key].setText = function (text) {
                    button_element.html(text);
                };
                that.buttons[key].addClass = function (className) {
                    button_element.addClass(className);
                };
                that.buttons[key].removeClass = function (className) {
                    button_element.removeClass(className);
                };
                that.buttons[key].disable = function () {
                    that.buttons[key].isDisabled = true;
                    button_element.prop('disabled', true);
                };
                that.buttons[key].enable = function () {
                    that.buttons[key].isDisabled = false;
                    button_element.prop('disabled', false);
                };
                that.buttons[key].show = function () {
                    that.buttons[key].isHidden = false;
                    button_element.css('display', '');
                };
                that.buttons[key].hide = function () {
                    that.buttons[key].isHidden = true;
                    button_element.css('display', 'none');
                };
                /*
                 Buttons are prefixed with $_ or $$ for quick access
                 */
                that['$_' + key] = that['$$' + key] = button_element;
                that.$btnc.append(button_element);
            });

            if (total_buttons === 0) this.$btnc.hide();
            if (this.closeIcon === null && total_buttons === 0) {
                /*
                 in case when no buttons are present & closeIcon is null, closeIcon is set to true,
                 set closeIcon to true to explicitly tell to hide the close icon
                 */
                this.closeIcon = true;
            }

            if (this.closeIcon) {
                if (this.closeIconClass) {
                    // user requires a custom class.
                    var closeHtml = '<i class="' + this.closeIconClass + '"></i>';
                    this.$closeIcon.html(closeHtml);
                }

                this.$closeIcon.click(function (e) {
                    e.preventDefault();

                    var buttonName = false;
                    var shouldClose = false;
                    var str;

                    if (typeof that.closeIcon == 'function') {
                        str = that.closeIcon();
                    } else {
                        str = that.closeIcon;
                    }

                    if (typeof str == 'string' && typeof that.buttons[str] != 'undefined') {
                        buttonName = str;
                        shouldClose = false;
                    } else if (typeof str == 'undefined' || !!(str) == true) {
                        shouldClose = true;
                    } else {
                        shouldClose = false;
                    }
                    if (buttonName) {
                        var btnResponse = that.buttons[buttonName].action.apply(that);
                        shouldClose = (typeof btnResponse == 'undefined') || !!(btnResponse);
                    }
                    if (shouldClose) {
                        that.close();
                    }
                });
                this.$closeIcon.show();
            } else {
                this.$closeIcon.hide();
            }
        },
        setTitle: function (string, force) {
            force = force || false;

            if (typeof string !== 'undefined')
                if (typeof string == 'string')
                    this.title = string;
                else if (typeof string == 'function') {
                    if (typeof string.promise == 'function')
                        console.error('Promise was returned from title function, this is not supported.');

                    var response = string();
                    if (typeof response == 'string')
                        this.title = response;
                    else
                        this.title = false;
                } else
                    this.title = false;

            if (this.isAjaxLoading && !force)
                return;

            this.$title.html(this.title || '');
            this.updateTitleContainer();
        },
        setIcon: function (iconClass, force) {
            force = force || false;

            if (typeof iconClass !== 'undefined')
                if (typeof iconClass == 'string')
                    this.icon = iconClass;
                else if (typeof iconClass === 'function') {
                    var response = iconClass();
                    if (typeof response == 'string')
                        this.icon = response;
                    else
                        this.icon = false;
                }
                else
                    this.icon = false;

            if (this.isAjaxLoading && !force)
                return;

            this.$icon.html(this.icon ? '<i class="' + this.icon + '"></i>' : '');
            this.updateTitleContainer();
        },
        updateTitleContainer: function () {
            if (!this.title && !this.icon) {
                this.$titleContainer.hide();
            } else {
                this.$titleContainer.show();
            }
        },
        setContentPrepend: function (content, force) {
            if (!content)
                return;

            this.contentParsed.prepend(content);
        },
        setContentAppend: function (content) {
            if (!content)
                return;

            this.contentParsed.append(content);
        },
        setContent: function (content, force) {
            force = !!force;
            var that = this;
            if (content)
                this.contentParsed.html('').append(content);
            if (this.isAjaxLoading && !force)
                return;

            this.$content.html('');
            this.$content.append(this.contentParsed);
            setTimeout(function () {
                that.$body.find('input[autofocus]:visible:first').focus();
            }, 100);
        },
        loadingSpinner: false,
        showLoading: function (disableButtons) {
            this.loadingSpinner = true;
            this.$jconfirmBox.addClass('loading');
            if (disableButtons)
                this.$btnc.find('button').prop('disabled', true);

        },
        hideLoading: function (enableButtons) {
            this.loadingSpinner = false;
            this.$jconfirmBox.removeClass('loading');
            if (enableButtons)
                this.$btnc.find('button').prop('disabled', false);

        },
        ajaxResponse: false,
        contentParsed: '',
        isAjax: false,
        isAjaxLoading: false,
        _parseContent: function () {
            var that = this;
            var e = '&nbsp;';

            if (typeof this.content == 'function') {
                var res = this.content.apply(this);
                if (typeof res == 'string') {
                    this.content = res;
                }
                else if (typeof res == 'object' && typeof res.always == 'function') {
                    // this is ajax loading via promise
                    this.isAjax = true;
                    this.isAjaxLoading = true;
                    res.always(function (data, status, xhr) {
                        that.ajaxResponse = {
                            data: data,
                            status: status,
                            xhr: xhr
                        };
                        that._contentReady.resolve(data, status, xhr);
                        if (typeof that.contentLoaded == 'function')
                            that.contentLoaded(data, status, xhr);
                    });
                    this.content = e;
                } else {
                    this.content = e;
                }
            }

            if (typeof this.content == 'string' && this.content.substr(0, 4).toLowerCase() === 'url:') {
                this.isAjax = true;
                this.isAjaxLoading = true;
                var u = this.content.substring(4, this.content.length);
                $.get(u).done(function (html) {
                    that.contentParsed.html(html);
                }).always(function (data, status, xhr) {
                    that.ajaxResponse = {
                        data: data,
                        status: status,
                        xhr: xhr
                    };
                    that._contentReady.resolve(data, status, xhr);
                    if (typeof that.contentLoaded == 'function')
                        that.contentLoaded(data, status, xhr);
                });
            }

            if (!this.content)
                this.content = e;

            if (!this.isAjax) {
                this.contentParsed.html(this.content);
                this.setContent();
                that._contentReady.resolve();
            }
        },
        _stopCountDown: function () {
            clearInterval(this.autoCloseInterval);
            if (this.$cd)
                this.$cd.remove();
        },
        _startCountDown: function () {
            var that = this;
            var opt = this.autoClose.split('|');
            if (opt.length !== 2) {
                console.error('Invalid option for autoClose. example \'close|10000\'');
                return false;
            }

            var button_key = opt[0];
            var time = parseInt(opt[1]);
            if (typeof this.buttons[button_key] === 'undefined') {
                console.error('Invalid button key \'' + button_key + '\' for autoClose');
                return false;
            }

            var seconds = Math.ceil(time / 1000);
            this.$cd = $('<span class="countdown"> (' + seconds + ')</span>')
                .appendTo(this['$_' + button_key]);

            this.autoCloseInterval = setInterval(function () {
                that.$cd.html(' (' + (seconds -= 1) + ') ');
                if (seconds <= 0) {
                    that['$$' + button_key].trigger('click');
                    that._stopCountDown();
                }
            }, 1000);
        },
        _getKey: function (key) {
            // very necessary keys.
            switch (key) {
                case 192:
                    return 'tilde';
                case 13:
                    return 'enter';
                case 16:
                    return 'shift';
                case 9:
                    return 'tab';
                case 20:
                    return 'capslock';
                case 17:
                    return 'ctrl';
                case 91:
                    return 'win';
                case 18:
                    return 'alt';
                case 27:
                    return 'esc';
                case 32:
                    return 'space';
            }

            // only trust alphabets with this.
            var initial = String.fromCharCode(key);
            if (/^[A-z0-9]+$/.test(initial))
                return initial.toLowerCase();
            else
                return false;
        },
        reactOnKey: function (e) {
            var that = this;

            /*
             Prevent keyup event if the dialog is not last!
             */
            var a = $('.jconfirm');
            if (a.eq(a.length - 1)[0] !== this.$el[0])
                return false;

            var key = e.which;
            /*
             Do not react if Enter or Space is pressed on input elements
             */
            if (this.$content.find(':input').is(':focus') && /13|32/.test(key))
                return false;

            var keyChar = this._getKey(key);

            // If esc is pressed
            if (keyChar === 'esc' && this.escapeKey) {
                if (this.escapeKey === true) {
                    this.$scrollPane.trigger('click');
                }
                else if (typeof this.escapeKey === 'string' || typeof this.escapeKey === 'function') {
                    var buttonKey;
                    if (typeof this.escapeKey === 'function') {
                        buttonKey = this.escapeKey();
                    } else {
                        buttonKey = this.escapeKey;
                    }

                    if (buttonKey)
                        if (typeof this.buttons[buttonKey] === 'undefined') {
                            console.warn('Invalid escapeKey, no buttons found with key ' + buttonKey);
                        } else {
                            this['$_' + buttonKey].trigger('click');
                        }
                }
            }

            // check if any button is listening to this key.
            $.each(this.buttons, function (key, button) {
                if (button.keys.indexOf(keyChar) != -1) {
                    that['$_' + key].trigger('click');
                }
            });
        },
        setDialogCenter: function () {
            console.info('setDialogCenter is deprecated, dialogs are centered with CSS3 tables');
        },
        _unwatchContent: function () {
            clearInterval(this._timer);
        },
        close: function () {
            var that = this;

            if (typeof this.onClose === 'function')
                this.onClose();

            this._unwatchContent();

            /*
             unbind the window resize & keyup event.
             */
            $(window).unbind('resize.' + this._id);
            $(window).unbind('keyup.' + this._id);
            $(window).unbind('jcKeyDown.' + this._id);

            if (this.draggable) {
                $(window).unbind('mousemove.' + this._id);
                $(window).unbind('mouseup.' + this._id);
                this.$titleContainer.unbind('mousedown');
            }

            that.$el.removeClass(that.loadedClass);
            $('body').removeClass('jconfirm-no-scroll-' + that._id);
            that.$jconfirmBoxContainer.removeClass('jconfirm-no-transition');

            setTimeout(function () {
                that.$body.addClass(that.closeAnimationParsed);
                that.$jconfirmBg.addClass('jconfirm-bg-h');
                var closeTimer = (that.closeAnimation === 'none') ? 1 : that.animationSpeed;

                setTimeout(function () {
                    that.$el.remove();

                    var l = jconfirm.instances;
                    var i = jconfirm.instances.length - 1;
                    for (i; i >= 0; i--) {
                        if (jconfirm.instances[i]._id === that._id) {
                            jconfirm.instances.splice(i, 1);
                        }
                    }

                    // Focusing a element, scrolls automatically to that element.
                    // no instances should be open, lastFocused should be true, the lastFocused element must exists in DOM
                    if (!jconfirm.instances.length) {
                        if (that.scrollToPreviousElement && jconfirm.lastFocused && jconfirm.lastFocused.length && $.contains(document, jconfirm.lastFocused[0])) {
                            var $lf = jconfirm.lastFocused;
                            if (that.scrollToPreviousElementAnimate) {
                                var st = $(window).scrollTop();
                                var ot = jconfirm.lastFocused.offset().top;
                                var wh = $(window).height();
                                if (!(ot > st && ot < (st + wh))) {
                                    var scrollTo = (ot - Math.round((wh / 3)));
                                    $('html, body').animate({
                                        scrollTop: scrollTo
                                    }, that.animationSpeed, 'swing', function () {
                                        // gracefully scroll and then focus.
                                        $lf.focus();
                                    });
                                } else {
                                    // the element to be focused is already in view.
                                    $lf.focus();
                                }
                            } else {
                                $lf.focus();
                            }
                            jconfirm.lastFocused = false;
                        }
                    }

                    if (typeof that.onDestroy === 'function')
                        that.onDestroy();

                }, closeTimer * 0.40);
            }, 50);

            return true;
        },
        open: function () {
            if (this.isOpen())
                return false;

            // var that = this;
            this._buildHTML();
            this._bindEvents();
            this._open();

            return true;
        },
        setStartingPoint: function () {
            var el = false;

            if (this.animateFromElement !== true && this.animateFromElement) {
                el = this.animateFromElement;
                jconfirm.lastClicked = false;
            } else if (jconfirm.lastClicked && this.animateFromElement === true) {
                el = jconfirm.lastClicked;
                jconfirm.lastClicked = false;
            } else {
                return false;
            }

            if (!el)
                return false;

            var offset = el.offset();

            var iTop = el.outerHeight() / 2;
            var iLeft = el.outerWidth() / 2;

            // placing position of jconfirm modal in center of clicked element
            iTop -= this.$jconfirmBox.outerHeight() / 2;
            iLeft -= this.$jconfirmBox.outerWidth() / 2;

            // absolute position on screen
            var sourceTop = offset.top + iTop;
            sourceTop = sourceTop - this._scrollTop();
            var sourceLeft = offset.left + iLeft;

            // window halved
            var wh = $(window).height() / 2;
            var ww = $(window).width() / 2;

            var targetH = wh - this.$jconfirmBox.outerHeight() / 2;
            var targetW = ww - this.$jconfirmBox.outerWidth() / 2;

            sourceTop -= targetH;
            sourceLeft -= targetW;

            // Check if the element is inside the viewable window.
            if (Math.abs(sourceTop) > wh || Math.abs(sourceLeft) > ww)
                return false;

            this.$jconfirmBoxContainer.css('transform', 'translate(' + sourceLeft + 'px, ' + sourceTop + 'px)');
        },
        _open: function () {
            var that = this;
            if (typeof that.onOpenBefore === 'function')
                that.onOpenBefore();

            this.$body.removeClass(this.animationParsed);
            this.$jconfirmBg.removeClass('jconfirm-bg-h');
            this.$body.focus();

            that.$jconfirmBoxContainer.css('transform', 'translate(' + 0 + 'px, ' + 0 + 'px)');

            setTimeout(function () {
                that.$body.css(that._getCSS(that.animationSpeed, 1));
                that.$body.css({
                    'transition-property': that.$body.css('transition-property') + ', margin'
                });
                that.$jconfirmBoxContainer.addClass('jconfirm-no-transition');
                that._modalReady.resolve();
                if (typeof that.onOpen === 'function')
                    that.onOpen();

                that.$el.addClass(that.loadedClass);
            }, this.animationSpeed);
        },
        loadedClass: 'jconfirm-open',
        isClosed: function () {
            return !this.$el || this.$el.css('display') === '';
        },
        isOpen: function () {
            return !this.isClosed();
        },
        toggle: function () {
            if (!this.isOpen())
                this.open();
            else
                this.close();
        }
    };

    jconfirm.instances = [];
    jconfirm.lastFocused = false;
    jconfirm.pluginDefaults = {
        template: '' +
        '<div class="jconfirm">' +
        '<div class="jconfirm-bg jconfirm-bg-h"></div>' +
        '<div class="jconfirm-scrollpane">' +
        '<div class="jconfirm-row">' +
        '<div class="jconfirm-cell">' +
        '<div class="jconfirm-holder">' +
        '<div class="jc-bs3-container">' +
        '<div class="jc-bs3-row">' +
        '<div class="jconfirm-box-container jconfirm-animated">' +
        '<div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1">' +
        '<div class="jconfirm-closeIcon">&times;</div>' +
        '<div class="jconfirm-title-c">' +
        '<span class="jconfirm-icon-c"></span>' +
        '<span class="jconfirm-title"></span>' +
        '</div>' +
        '<div class="jconfirm-content-pane">' +
        '<div class="jconfirm-content"></div>' +
        '</div>' +
        '<div class="jconfirm-buttons">' +
        '</div>' +
        '<div class="jconfirm-clear">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div></div>',
        title: 'Hello',
        titleClass: '',
        type: 'default',
        typeAnimated: true,
        draggable: true,
        dragWindowGap: 15,
        dragWindowBorder: true,
        animateFromElement: true,
        /**
         * @deprecated
         */
        alignMiddle: true,
        smoothContent: true,
        content: 'Are you sure to continue?',
        buttons: {},
        defaultButtons: {
            ok: {
                action: function () {
                }
            },
            close: {
                action: function () {
                }
            }
        },
        contentLoaded: function () {
        },
        icon: '',
        lazyOpen: false,
        bgOpacity: null,
        theme: 'light',
        animation: 'scale',
        closeAnimation: 'scale',
        animationSpeed: 400,
        animationBounce: 1,
        escapeKey: true,
        rtl: false,
        container: 'body',
        containerFluid: false,
        backgroundDismiss: false,
        backgroundDismissAnimation: 'shake',
        autoClose: false,
        closeIcon: null,
        closeIconClass: false,
        watchInterval: 100,
        columnClass: 'col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',
        boxWidth: '50%',
        scrollToPreviousElement: true,
        scrollToPreviousElementAnimate: true,
        useBootstrap: true,
        offsetTop: 40,
        offsetBottom: 40,
        bootstrapClasses: {
            container: 'container',
            containerFluid: 'container-fluid',
            row: 'row'
        },
        onContentReady: function () {

        },
        onOpenBefore: function () {

        },
        onOpen: function () {

        },
        onClose: function () {

        },
        onDestroy: function () {

        },
        onAction: function () {

        }
    };

    /**
     * This refers to the issue #241 and #246
     *
     * Problem:
     * Button A is clicked (keydown) using the Keyboard ENTER key
     * A opens the jconfirm modal B,
     * B has registered ENTER key for one of its button C
     * A is released (keyup), B gets the keyup event and triggers C.
     *
     * Solution:
     * Register a global keydown event, that tells jconfirm if the keydown originated inside jconfirm
     */
    var keyDown = false;
    $(window).on('keydown', function (e) {
        if (!keyDown) {
            var $target = $(e.target);
            var pass = false;
            if ($target.closest('.jconfirm-box').length)
                pass = true;
            if (pass)
                $(window).trigger('jcKeyDown');

            keyDown = true;
        }
    });
    $(window).on('keyup', function () {
        keyDown = false;
    });
    jconfirm.lastClicked = false;
    $(document).on('mousedown', 'button, a', function () {
        jconfirm.lastClicked = $(this);
    });
})(jQuery, window);
