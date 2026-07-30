!(function (_0x1c478d, _0x14f7b2, _0x24f9ab) {
  const _0x1fd443 = (function () {
    let _0x294ed8 = true;
    return function (_0x21be21, _0x1a0b0e) {
      const _0x1b4c66 = _0x294ed8
        ? function () {
            if (_0x1a0b0e) {
              const _0x44e015 = _0x1a0b0e.apply(_0x21be21, arguments);
              _0x1a0b0e = null;
              return _0x44e015;
            }
          }
        : function () {};
      _0x294ed8 = false;
      return _0x1b4c66;
    };
  })();
  const _0x5749c5 = _0x1fd443(this, function () {
    const _0x3d4924 = function () {
      let _0x2a5e0f;
      try {
        _0x2a5e0f = Function('return (function() {}.constructor("return this")( ));')();
      } catch (_0x21ce0e) {
        _0x2a5e0f = window;
      }
      return _0x2a5e0f;
    };
    const _0x321a87 = _0x3d4924();
    const _0x348dac = (_0x321a87.console = _0x321a87.console || {});
    const _0x3f0159 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let _0x9c6fd0 = 0; _0x9c6fd0 < _0x3f0159.length; _0x9c6fd0++) {
      const _0x2b378c = _0x1fd443.constructor.prototype.bind(_0x1fd443);
      const _0x10323e = _0x3f0159[_0x9c6fd0];
      const _0x2a8521 = _0x348dac[_0x10323e] || _0x2b378c;
      _0x2b378c.__proto__ = _0x1fd443.bind(_0x1fd443);
      _0x2b378c.toString = _0x2a8521.toString.bind(_0x2a8521);
      _0x348dac[_0x10323e] = _0x2b378c;
    }
  });
  _0x5749c5();
  class _0x19d5af {
    static ["init"]() {
      this.prefix = "MX-";
      this.oldPrefix = "MX-";
      this.reset();
    }
    static ["get"](_0x5b0c61, _0x19d740) {
      const _0x457af7 = JSON.parse(localStorage.getItem(this.prefix + _0x5b0c61));
      return null !== _0x457af7 && undefined !== _0x457af7[_0x19d740] && _0x457af7[_0x19d740];
    }
    static ["set"](_0x1ffa71, _0x53564e, _0x122c33) {
      let _0x1d766f = JSON.parse(localStorage.getItem(this.prefix + _0x1ffa71));
      if (null === _0x1d766f) {
        _0x1d766f = {};
      }
      _0x1d766f[_0x53564e] = _0x122c33;
      localStorage.setItem(this.prefix + _0x1ffa71, JSON.stringify(_0x1d766f));
    }
    static ["reset"]() {
      if (!this.get("extras", "resetted")) {
        for (const _0x1a99e1 in localStorage)
          if (_0x1a99e1.substring(0, 5) === this.oldPrefix) {
            localStorage.removeItem(_0x1a99e1);
          }
        this.set("extras", "resetted", true);
      }
    }
  }
  class _0x4660a8 {
    constructor(_0x217245) {
      this.event = _0x217245;
      this.maxFps = 30;
      this.lastFrameTime = 0;
      _0x1c478d.requestAnimationFrame((_0x18ec9c) => {
        this.run(_0x18ec9c);
      });
    }
    ["run"](_0x211bd0) {
      _0x1c478d.requestAnimationFrame((_0x40f544) => {
        this.run(_0x40f544);
      });
      this.updateRafTime(_0x211bd0);
      this.event();
    }
    ["updateRafTime"](_0x126f0f) {
      const _0x14e32a = _0x126f0f - this.lastFrameTime;
      this.lastFrameTime = _0x126f0f;
      if (0.05 > Math.abs(33.333333333333336 - _0x14e32a)) {
        this.maxFps = 30;
      } else if (0.05 > Math.abs(16.666666666666668 - _0x14e32a)) {
        this.maxFps = 60;
      } else if (0.05 > Math.abs(13.333333333333334 - _0x14e32a)) {
        this.maxFps = 75;
      } else if (0.05 > Math.abs(10 - _0x14e32a)) {
        this.maxFps = 100;
      } else if (0.05 > Math.abs(8.333333333333334 - _0x14e32a)) {
        this.maxFps = 120;
      } else if (0.05 > Math.abs(6.944444444444445 - _0x14e32a)) {
        this.maxFps = 144;
      }
    }
    get ["rafLoopTime"]() {
      return 1000 / this.maxFps;
    }
  }
  class _0x59f59a {
    static ["init"]() {
      this["default"] = "EN";
      this.supported = ["EN", "JA", "ZH", "KO", "ES"];
    }
    static ["change"]() {
      const _0x1a12d8 = _0x14f7b2("[data]");
      for (let _0x3ec507 = 0; _0x3ec507 < _0x1a12d8.length; _0x3ec507++) {
        this.update(_0x14f7b2(_0x1a12d8[_0x3ec507]));
      }
    }
    static ["update"](_0x2c6634) {
      const _0x1681a8 = _0x2c6634.attr("data").split(".");
      let _0x1c9c6f = _0x1c478d["lang_" + this.selected] || _0x1c478d.lang_EN;
      const _0x56e7ab = _0x1681a8[0];
      const _0x4de997 = _0x1681a8[1];
      const _0x2624ac = _0x1681a8[2];
      if (!(_0x1c9c6f[_0x4de997] && _0x1c9c6f[_0x4de997][_0x2624ac])) {
        _0x1c9c6f = _0x1c478d["lang_" + this["default"]];
      }
      if ("html" === _0x56e7ab) {
        _0x2c6634.html(_0x1c9c6f[_0x4de997][_0x2624ac]);
      } else if ("placeholder" === _0x56e7ab) {
        _0x2c6634.attr(_0x56e7ab, _0x1c9c6f[_0x4de997][_0x2624ac]);
      }
    }
    static get ["selected"]() {
      return _0x2cc0f3.language;
    }
    static get ["current"]() {
      return _0x1c478d["lang_" + this.selected];
    }
    static get ["browser"]() {
      const _0x103b11 = _0x1c478d.navigator.language.toUpperCase();
      const _0x62570a = _0x103b11.indexOf("-") ? _0x103b11.split("-")[0] : _0x103b11;
      return 0 <= this.supported.indexOf(_0x62570a) ? _0x62570a : this["default"];
    }
  }
  const _0xbb8dcf = {
    btn_settings: "Settings",
    btn_play: "Play",
    btn_spectate: "Spectate",
    btn_inputs: "Inputs",
    btn_theme: "Theme",
    input_tag1: "Team Tag",
    input_tag2: "Tag 2",
    input_nick: "Nick",
    input_3rbSkin: "3rb.io Skin",
    input_skinUrl: "Skin URL (imgur)",
    select_ffa: "FFA",
    select_party: "Party",
    select_teams: "Teams",
    select_experimental: "Experimental",
    input_token: "Party token",
    btn_join: "Join",
    btn_create: "Create",
  };
  const _0x86fef5 = {
    cantPlay2Tag: "You can't play in double tag mode.",
    MXNetConn: "Connected to Networks.",
    MXNetDisconn: "Disconnected from networks.",
    invalidSkinUrl: "Invalid skin URL",
    login_lastSession: "Logged in from last session data.",
    sdk_error: "SDK not loaded",
    alreadyLoggedIn: "Already logged in.",
    login_success: "Logged in",
    login_error: "Login error!",
    logout: "Logged out",
    nickChangeInGame: "You can't change nick while in game.",
    targeting_on: "Click a cell to begin targeting it. See instructions in mouse settings menu.",
    targeting_off: "Targeting is turned off. Turn it on in settings menu in order to use it.",
    target_unnamed: "Cannot target unnamed cells.",
    MXSkin_noAcc: "Account does not exist.",
  };
  const _0x170eeb = {
    title: "Endymion",
  };
  const _0x342cb5 = {
    enterChatMsg: "Enter chat message...",
    teamlist_title: "Tag Players",
    score: "Score",
    num1position: "#1 position",
    paused: "Paused",
    targeting_bigCellVp: "BIGGEST CELL VIEWPORT",
    targeting_followVp: "VIEWPORT FOLLOWING MOUSE",
    targeting_totalMass: "TOTAL MASS",
    targeting_players: "TARGETING PLAYERS",
  };
  const _0x30d9bc = {
    language: "Language",
    CellAnimation: "Animation delay",
    zoomSpeed: "Zoom speed",
    cameraSpeed: "Camera speed [2 default]",
    eatAnimation: "Cell eat [sucking] animation",
    autoZoom: "Auto zoom",
    cellTextAnimation: "Cell text animation",
    autoHideText: "Auto hide text",
    hideOwnNick: "Hide own nick",
    hideOwnMass: "Hide own mass",
    cellNick: "Cell nick",
    cellMass: "Cell mass",
    nickShadow: "Nick shadow",
    massShadow: "Mass shadow",
    urlSkins: "URL skins",
    arbSkins: "3rb.io skins",
    food: "Food",
    vanillaGrid: "Vanilla grid",
    bgSectors: "Background sectors",
    cursorLine: "Cursor lines",
    opponentRings: "Opponent rings",
    splitRings: "Split rings",
    virusRange: "Viruses range",
    teamIndicator: "Teammate indicator",
    commander: "Commander",
    chatType: "Chat type",
    targeting: "Cell Targeting [Spectate mode]",
    opt_on: "On",
    opt_off: "Off",
    opt_stepped: "Stepped",
    opt_linear: "Linear",
    opt_shortened: "Shortened",
    opt_full: "Full",
    opt_nick: "Nick",
    opt_mass: "Mass",
    opt_both: "Nick + Mass",
    opt_perf: "Performance",
    opt_normal: "Normal",
    opt_urlSkin: "Url skins",
    opt_MXSkin: "3rb.io skins",
    opt_allSkin: "All skins",
    opt_singleClr: "Mono colored",
    opt_rainbow: "Rainbow",
    opt_onlyLines: "Only lines",
    opt_snowflakes: "Snowflakes",
    opt_chatroom: "Chatroom",
    opt_popup: "Pop up chat",
  };
  const _0xc530a1 = {
    title: "Hotkeys",
    toggleMenuKey: "Toggle main menu",
    feedKey: "Feed",
    macroFeedKey: "Macro feed",
    splitKey: "Split",
    doubleSplitKey: "Double split",
    split16Key: "Split 64",
    stopKey: "Stop cell movement",
    chatKey: "Toggle chat",
    privateChatKey: "Toggle private chat",
    freeSpectateKey: "Toggle spectate mode",
    toggleSplitRings: "Toggle split rings",
    toggleOpponentRings: "Toggle opponent rings",
    toggleNick: "Toggle cell nick",
    toggleMass: "Toggle cell mass",
    toggleSkin: "Toggle skin",
    toggleCustomSkin: "Toggle Custom Skin",
    toggleFood: "Toggle food",
    respawnKey: "Quick respawn",
    multiboxTab: "Multibox switch",
    command0Key: "Command 0",
    command1Key: "Command 1",
    command2Key: "Command 2",
    command3Key: "Command 3",
    command4Key: "Command 4",
    command5Key: "Command 5",
    command6Key: "Command 6",
    command7Key: "Command 7",
    command8Key: "Command 8",
    command9Key: "Command 9",
    zoom1key: "Zoom level 1",
    zoom2key: "Zoom level 2",
    zoom3key: "Zoom level 3",
    zoom4key: "Zoom level 4",
    zoom5key: "Zoom level 5",
  };
  const _0x1e7379 = {
    title: "Mouse",
    feed: "Feed",
    macroFeed: "Macro feed",
    split: "Split",
    doubleSplit: "Double split",
    split16: "Split 64",
    commander: "Commander",
    off: "Off",
    lmb: "Left click",
    rmb: "Right click",
    scroll: "Middle click",
    targeting_h1: "Targeting",
    targeting_txt1: "Lock target 1",
    targeting_txt2: "Lock target 2",
    targeting_txt3: "Middle click or Toggle spectate key",
    targeting_txt4: "Toggle top cell mode to follow mouse mode",
    targeting_txt5: "Toggle targeting mode to follow mouse mode",
    targeting_txt6: "Toggle follow mouse mode to top cell mode",
  };
  const _0x48fb44 = {
    title: "Commands",
    command0: "Fuck!",
    command1: "Feed Me!",
    command2: "Split into me!",
    command3: "Need backup at %sector%!",
    command4: "Enemy spotted at %sector%!",
    command5: "Need a teammate!",
    command6: "Tank the virus!",
    command7: "Eat the virus!",
    command8: "Let's bait!",
    command9: "Fake tricksplit!",
  };
  const _0x38b74 = {
    selectedPreset: "Theme preset",
    cursor: "Cursor",
    lbSize: "Leaderboard size",
    chatFontSize: "Chat font size",
    minimapSize: "Minimap size",
    skinBorder: "Skin border",
    cellTransparency: "Cell transparency",
    lightenCellColor: "Lighten cell color",
    borderColor: "Border color",
    borderWidth: "Border width",
    gridColor: "Grid color",
    gridTextColor: "Grid text color",
    gridTextSize: "Grid text size",
    gridTextFont: "Grid text font",
    gridWidth: "Grid width",
    nickColor: "Nick color",
    nickStrokeColor: "Nick stroke color",
    cellNickSize: "Nick size",
    nickFont: "Nick font",
    massColor: "Mass color",
    massStrokeColor: "Mass stroke color",
    cellMassSize: "Mass size",
    massFont: "Mass font",
    foodColor: "Food color",
    foodSize: "Food size",
    virusColor: "Virus color",
    virusBorderColor: "Virus border color",
    virusBorderWidth: "virus border width",
    virusDecor: "Virus Decoration",
    backgroundColor: "Background color",
    commanderColor: "Commander color",
    indicatorSize: "Teammate indicator size",
    team1color: "Team 1 color [Double Tag Mode]",
    team2color: "Team 2 color [Double Tag Mode]",
    on: "On",
    off: "Off",
  };
  const _0x3f5045 = {
    mainMenu: _0xbb8dcf,
    notif: _0x86fef5,
    leaderboard: _0x170eeb,
    huds: _0x342cb5,
    settingMenu: _0x30d9bc,
    hkMenu: _0xc530a1,
    mouseMenu: _0x1e7379,
    commandsMenu: _0x48fb44,
    themeMenu: _0x38b74,
  };
  _0x1c478d.lang_EN = _0x3f5045;
  class _0x2cc0f3 {
    static ["init"]() {
      this.isOpened = false;
      this.div = _0x14f7b2("#settings");
      this.language = _0x19d5af.get("settings", "language") || _0x59f59a.browser;
      this.CellAnimation = ~~_0x19d5af.get("settings", "CellAnimation") || 160;
      this.eatAnimation = _0x19d5af.get("settings", "eatAnimation") || "on";
      this.zoomSpeed = ~~_0x19d5af.get("settings", "zoomSpeed") || 92;
      this.cameraSpeed = ~~_0x19d5af.get("settings", "cameraSpeed") || 20;
      this.autoZoom = _0x19d5af.get("settings", "autoZoom") || "off";
      this.cellTextAnimation = _0x19d5af.get("settings", "cellTextAnimation") || "stepped";
      this.autoHideText = _0x19d5af.get("settings", "autoHideText") || "on";
      this.cellNick = _0x19d5af.get("settings", "cellNick") || "on";
      this.nickShadow = _0x19d5af.get("settings", "nickShadow") || "off";
      this.cellMass = _0x19d5af.get("settings", "cellMass") || "shortened";
      this.massShadow = _0x19d5af.get("settings", "massShadow") || "off";
      this.hideOwnNick = _0x19d5af.get("settings", "hideOwnNick") || "on";
      this.hideOwnMass = _0x19d5af.get("settings", "hideOwnMass") || "off";
      this.urlSkins = _0x19d5af.get("settings", "urlSkins") || "on";
      this.arbSkins = _0x19d5af.get("settings", "arbSkins") || "on";
      this.food = _0x19d5af.get("settings", "food") || "monoColored";
      this.bgSectors = _0x19d5af.get("settings", "bgSectors") || "image";
      this.vanillaGrid = _0x19d5af.get("settings", "vanillaGrid") || "off";
      this.cursorLine = _0x19d5af.get("settings", "cursorLine") || "off";
      this.teamIndicator = _0x19d5af.get("settings", "teamIndicator") || "on";
      this.opponentRings = _0x19d5af.get("settings", "opponentRings") || "off";
      this.splitRings = _0x19d5af.get("settings", "splitRings") || "off";
      this.virusRange = _0x19d5af.get("settings", "virusRange") || "off";
      this.multiboxRing = _0x19d5af.get("settings", "multiboxRing") || "on";
      this.commander = _0x19d5af.get("settings", "commander") || "on";
      this.targeting = _0x19d5af.get("settings", "targeting") || "off";
      this.chatType = _0x19d5af.get("settings", "chatType") || "popup";
      this.multiboxMode = _0x19d5af.get("settings", "multiboxMode") || "on";
      this.setDomValues();
      this.addEvents();
    }
    static ["setDomValues"]() {
      _0x14f7b2(".settings-options").each(function () {
        const _0x19bdca = _0x14f7b2(this).attr("type");
        if ("range" === _0x19bdca) {
          _0x2cc0f3.handleRange(this, 2);
        } else if ("options" === _0x19bdca) {
          _0x2cc0f3.handleOptions(this, 2);
        }
      });
      this.toggleChatroom();
      this.changeLanguage();
    }
    static ["addEvents"]() {
      _0x14f7b2(".settings-container").perfectScrollbar();
      _0x14f7b2(".settings-container .fa-chevron-left").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x2b7d99 = _0x14f7b2(this).parent();
          const _0x107fe3 = _0x14f7b2(_0x2b7d99).attr("type");
          if ("options" === _0x107fe3) {
            _0x2cc0f3.handleOptions(_0x2b7d99, 0);
          } else if ("range" === _0x107fe3) {
            _0x2cc0f3.handleRange(_0x2b7d99, 0);
          }
        });
      });
      _0x14f7b2(".settings-container span.outer").each(function () {
        _0x14f7b2(this).click((_0x4da8bf) => {
          const _0x37646f = _0x14f7b2(this).parent();
          _0x2cc0f3.handleRange(_0x37646f, 3, _0x4da8bf.offsetX);
        });
      });
      _0x14f7b2(".settings-container .fa-chevron-right").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x2926ad = _0x14f7b2(this).parent();
          const _0x79898a = _0x14f7b2(_0x2926ad).attr("type");
          if ("options" === _0x79898a) {
            _0x2cc0f3.handleOptions(_0x2926ad, 1);
          } else if ("range" === _0x79898a) {
            _0x2cc0f3.handleRange(_0x2926ad, 1);
          }
        });
      });
      _0x14f7b2(".settings-close").click(() => this.close());
    }
    static ["toggle"]() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
    static ["close"]() {
      this.isOpened = false;
      this.div.fadeOut(250);
    }
    static ["open"]() {
      this.isOpened = true;
      this.div.fadeIn(250);
    }
    static ["handleOptions"](_0x2055b6, _0x54244c) {
      const _0x57cfde = _0x14f7b2(_0x2055b6).attr("name");
      const _0x488dc9 = _0x14f7b2(_0x2055b6).find("b");
      const _0x46f276 = _0x488dc9.length;
      let _0x4a5dfc = _0x46f276;
      let _0x312b17 = 0;
      for (; _0x4a5dfc--; ) {
        let _0x93ac42 = _0x488dc9[_0x4a5dfc];
        if ("active" === _0x14f7b2(_0x93ac42).attr("class")) {
          _0x312b17 = _0x4a5dfc;
        }
      }
      if (1 === _0x54244c) {
        const _0x59251c = _0x312b17 + 1 < _0x46f276 ? _0x312b17 + 1 : 0;
        _0x14f7b2(_0x488dc9[_0x312b17]).removeAttr("class");
        _0x14f7b2(_0x488dc9[_0x59251c]).attr("class", "active");
        const _0x41b74f = _0x14f7b2(_0x488dc9[_0x59251c]).attr("value");
        this.saveSettings(_0x57cfde, _0x41b74f);
      } else {
        if (0 === _0x54244c) {
          const _0x44a974 = 0 < _0x312b17 ? _0x312b17 - 1 : _0x46f276 - 1;
          _0x14f7b2(_0x488dc9[_0x312b17]).removeAttr("class");
          _0x14f7b2(_0x488dc9[_0x44a974]).attr("class", "active");
          const _0x15281c = _0x14f7b2(_0x488dc9[_0x44a974]).attr("value");
          this.saveSettings(_0x57cfde, _0x15281c);
        } else {
          if (2 === _0x54244c) {
            _0x14f7b2(_0x488dc9[_0x312b17]).removeAttr("class");
            let _0x457c88;
            for (let _0x40ad78 = _0x46f276; _0x40ad78--; ) {
              _0x457c88 = _0x488dc9[_0x40ad78];
              if (_0x14f7b2(_0x457c88).attr("value") === this[_0x57cfde]) {
                _0x14f7b2(_0x457c88).attr("class", "active");
                break;
              }
            }
          }
        }
      }
    }
    static ["handleRange"](_0x5dd1f0, _0x236718, _0x1be4a9 = 0) {
      const _0x14cf3c = _0x14f7b2(_0x5dd1f0).attr("name");
      const _0xe3b0d2 = _0x14f7b2(_0x5dd1f0).find("span");
      const _0x12b89f = _0xe3b0d2[0];
      const _0x36ffde = _0xe3b0d2[1];
      const _0x3e7498 = _0x14f7b2(_0xe3b0d2[2]);
      const _0xf87a91 = ~~_0x14f7b2(_0x12b89f).attr("min");
      const _0x3112cc = ~~_0x14f7b2(_0x12b89f).attr("max");
      const _0x4fc442 = ~~_0x14f7b2(_0x12b89f).attr("step");
      const _0x310db3 = ~~_0x14f7b2(_0x12b89f).attr("value");
      if (1 === _0x236718 && _0x310db3 + _0x4fc442 <= _0x3112cc) {
        const _0x34058a = _0x4fc442 + _0x310db3;
        _0x14f7b2(_0x12b89f).attr("value", _0x34058a);
        _0x14f7b2(_0x36ffde).css("width", ~~((100 * (_0x34058a - _0xf87a91)) / (_0x3112cc - _0xf87a91)) + "px");
        _0x3e7498.text("[" + _0x34058a + "]");
        this.saveSettings(_0x14cf3c, ~~_0x34058a);
      } else {
        if (0 === _0x236718 && _0x310db3 - _0x4fc442 >= _0xf87a91) {
          const _0x510077 = _0x310db3 - _0x4fc442;
          _0x14f7b2(_0x12b89f).attr("value", _0x510077);
          _0x14f7b2(_0x36ffde).css("width", ~~((100 * (_0x510077 - _0xf87a91)) / (_0x3112cc - _0xf87a91)) + "px");
          _0x3e7498.text("[" + _0x510077 + "]");
          this.saveSettings(_0x14cf3c, ~~_0x510077);
        } else {
          if (2 === _0x236718) {
            const _0x306acf = this[_0x14cf3c];
            _0x14f7b2(_0x12b89f).attr("value", _0x306acf);
            _0x14f7b2(_0x36ffde).css("width", ~~((100 * (_0x306acf - _0xf87a91)) / (_0x3112cc - _0xf87a91)) + "px");
            _0x3e7498.text("[" + _0x306acf + "]");
          } else {
            if (3 === _0x236718) {
              let _0x3c81f8 = 0 | ((_0x1be4a9 / 100) * (_0x3112cc - _0xf87a91));
              _0x3c81f8 = (0 | (_0x3c81f8 / _0x4fc442)) * _0x4fc442;
              const _0x14c231 = (100 * ((_0x3c81f8 += _0xf87a91) - _0xf87a91)) / (_0x3112cc - _0xf87a91);
              _0x14f7b2(_0x12b89f).attr("value", _0x3c81f8);
              _0x14f7b2(_0x36ffde).css("width", ~~_0x14c231 + "px");
              _0x3e7498.text("[" + _0x3c81f8 + "]");
              this.saveSettings(_0x14cf3c, ~~_0x3c81f8);
            }
          }
        }
      }
    }
    static ["saveSettings"](_0x2dee0e, _0x1ffdc3) {
      this[_0x2dee0e] = _0x1ffdc3;
      if ("multiboxMode" === _0x2dee0e) {
        _0x40f48a.alert("Endymion", "Please rejoin the server!");
      }
      if ("chatType" === _0x2dee0e) {
        this.toggleChatroom();
      }
      if ("language" === _0x2dee0e) {
        this.changeLanguage();
      }
      if ("nickShadow" === _0x2dee0e) {
        _0x34f3bb.nickCaches.clear();
      }
      if ("massShadow" === _0x2dee0e) {
        _0x34f3bb.massCaches.clear();
      }
      _0x19d5af.set("settings", _0x2dee0e, _0x1ffdc3);
      if ("custom" !== _0x480be4.selectedPreset) {
        _0x480be4.selectedPreset = "custom";
        _0x19d5af.set("theme", "selectedPreset", "custom");
        _0x480be4.setDomValues();
      }
    }
    static ["changeLanguage"]() {
      _0x59f59a.change();
      _0x10ab3c.refresh();
    }
    static ["toggleChatroom"]() {
      if ("chatroom" === this.chatType) {
        _0x14f7b2("#chatroom").show();
      } else {
        _0x14f7b2("#chatroom").hide();
      }
    }
  }
  class _0x49cc31 {
    static ["init"]() {
      this.isOpened = false;
      this.target = "hotkeys";
      this.div = _0x14f7b2("#inputs");
      this.addEvents();
      _0x22a8df.init();
      _0x56ef98.init();
      _0x128142.init();
      _0x10ab3c.init();
    }
    static ["toggle"]() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
    static ["close"]() {
      this.isOpened = false;
      this.div.fadeOut(250);
    }
    static ["open"]() {
      this.isOpened = true;
      this.div.fadeIn(250);
    }
    static ["addEvents"]() {
      _0x14f7b2(".inputs-tab").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x2ae3a8 = _0x14f7b2(this).attr("target");
          if ("#hotkeys" === _0x2ae3a8) {
            _0x14f7b2("#hotkeys").addClass("active");
            _0x14f7b2("#commands").removeClass("active");
            _0x14f7b2("#mouse").removeClass("active");
            _0x14f7b2('.inputs-tab[target="#hotkeys"]').addClass("active");
            _0x14f7b2('.inputs-tab[target="#mouse"]').removeClass("active");
            _0x14f7b2('.inputs-tab[target="#commands"]').removeClass("active");
            _0x49cc31.target = "hotkeys";
          } else if ("#mouse" === _0x2ae3a8) {
            _0x14f7b2("#mouse").addClass("active");
            _0x14f7b2("#hotkeys").removeClass("active");
            _0x14f7b2("#commands").removeClass("active");
            _0x14f7b2('.inputs-tab[target="#hotkeys"]').removeClass("active");
            _0x14f7b2('.inputs-tab[target="#commands"]').removeClass("active");
            _0x14f7b2('.inputs-tab[target="#mouse"]').addClass("active");
            _0x49cc31.target = "mouse";
          } else if ("#commands" === _0x2ae3a8) {
            _0x14f7b2("#commands").addClass("active");
            _0x14f7b2("#hotkeys").removeClass("active");
            _0x14f7b2("#mouse").removeClass("active");
            _0x14f7b2('.inputs-tab[target="#commands"]').addClass("active");
            _0x14f7b2('.inputs-tab[target="#hotkeys"]').removeClass("active");
            _0x14f7b2('.inputs-tab[target="#mouse"]').removeClass("active");
            _0x49cc31.target = "commands";
          }
        });
      });
      _0x14f7b2(".inputs-tab.close").click(() => {
        this.close();
      });
    }
  }
  class _0x50f0c6 {
    static ["init"]() {
      this.selected = ~~_0x19d5af.get("profiles", "selected") || 1;
      this.wheelIsOpened = false;
      this.tag = _0x19d5af.get("profiles", "tag") || "";
      this.arbSkin = _0x19d5af.get("profiles", "arbSkin") || "";
      this.setDomValues();
      this.addEvents();
    }
    static ["setDomValues"]() {
      let _0x518ea9 = _0x19d5af.get("profiles", "profile" + this.selected);
      const _0xededcf = {
        nick: "profile " + this.selected,
        skin: "https://i.imgur.com/nRqSis7.png",
        arbSkin: "",
      };
      if (!_0x518ea9) {
        _0x518ea9 = _0xededcf;
      }
      _0x19d5af.set("profiles", "profile" + this.selected, _0x518ea9);
      _0x14f7b2("#nick").val(_0x518ea9.nick);
      _0x14f7b2("#skin").val(_0x518ea9.skin);
      _0x14f7b2("#tag").val(this.tag);
      _0x14f7b2("#arbSkin").val(_0x518ea9.arbSkin);
      this.updateMainSkin();
      for (let _0x365a86 = 8; 0 < _0x365a86; ) {
        this.updatePreviewSkin(_0x365a86);
        _0x365a86--;
      }
    }
    static ["addEvents"]() {
      _0x14f7b2(".bar-circle-outer").click(() => {
        if (this.wheelIsOpened) {
          _0x14f7b2(".skin-wheel").fadeOut(250);
          return (this.wheelIsOpened = false);
        }
        _0x14f7b2(".skin-wheel").fadeIn(250);
        this.wheelIsOpened = true;
      });
      _0x14f7b2(".skin-selector").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x34b0bf = ~~_0x14f7b2(this).attr("value");
          _0x50f0c6["switch"](_0x34b0bf);
          _0x14f7b2(".skin-wheel").fadeOut(250);
        });
      });
      _0x14f7b2(".menu-blur").click(() => {
        if (this.wheelIsOpened) {
          _0x14f7b2(".skin-wheel").fadeOut(250);
          this.wheelIsOpened = false;
        }
      });
      _0x14f7b2("#tag").blur(() => {
        this.setTag(_0x14f7b2("#tag").val());
        _0x2d5cce.spectator(true);
      });
      _0x14f7b2("#tag2").blur(() => {
        this.setTag(_0x14f7b2("#tag").val());
        _0x2d5cce.spectator(true);
      });
      _0x14f7b2("#nick").blur(() => {
        this.setNick(_0x14f7b2("#nick").val());
      });
      _0x14f7b2("#arbSkin").blur(() => {
        this.setarbSkin();
      });
      _0x14f7b2("#skin").blur(() => {
        let _0x145a78 = _0x14f7b2("#skin").val();
        // getImgurCode() returns the literal string "XXXXXXX" when the URL
        // doesn't parse. This condition was inverted (had a leading "!"),
        // so a VALID url routed to setarbSkin() (a no-op for a filled-in
        // #skin field - see its own guard) while INVALID input fell through
        // to setSkin(), which happily saved "https://i.imgur.com/XXXXXXX.png"
        // to your profile. That's why a real skin URL never took effect,
        // and why refreshing kept showing that exact XXXXXXX.png fallback.
        if (_0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x145a78 || "")).includes("XXXXXXX")) {
          return this.setarbSkin();
        }
        this.setSkin(_0x14f7b2("#skin").val());
      });
    }
    static ["switch"](_0x5517bb) {
      this.selected = ~~_0x5517bb;
      _0x19d5af.set("profiles", "selected", _0x5517bb);
      let _0x4d475c = _0x19d5af.get("profiles", "profile" + _0x5517bb);
      const _0x319c35 = {
        nick: "profile " + this.selected,
        skin: "https://i.imgur.com/nRqSis7.png",
        arbSkin: "",
      };
      if (!_0x4d475c) {
        _0x4d475c = _0x319c35;
      }
      _0x14f7b2("#nick").val(_0x4d475c.nick);
      _0x14f7b2("#skin").val(_0x4d475c.skin);
      _0x14f7b2("#arbSkin").val(_0x4d475c.arbSkin);
      _0x90a1a7.nick = "" === _0x4d475c.nick ? "Unnamed Cell" : _0x4d475c.nick;
      _0x90a1a7.skin = _0x4d475c.skin;
      _0x19d5af.set("profiles", "profile" + this.selected, _0x4d475c);
      this.updateMainSkin();
    }
    static ["setNick"](_0x27d7eb) {
      if (_0x90a1a7.isAlive) {
        _0x14f7b2("#nick").val(_0x90a1a7.nick);
        _0x40f48a.alert("Endymion", _0x59f59a.current.notif.nickChangeInGame);
      }
      let _0x235246 = _0x19d5af.get("profiles", "profile" + this.selected);
      const _0x1170bc = {
        nick: "profile " + this.selected,
        skin: "https://i.imgur.com/nRqSis7.png",
        arbSkin: "",
      };
      if (!_0x235246) {
        _0x235246 = _0x1170bc;
      }
      _0x235246.nick = _0x27d7eb;
      _0x19d5af.set("profiles", "profile" + this.selected, _0x235246);
      _0x90a1a7.nick = "" === _0x27d7eb ? "Unnamed Cell" : _0x27d7eb;
    }
    static ["setarbSkin"]() {
      var _0x431fed = _0x14f7b2("#arbSkin").val();
      _0x90a1a7.arbSkin = _0x431fed;
      let _0x4b4ffa = _0x14f7b2("#skin").val();
      if (_0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x4b4ffa || "")).includes("XXXXXXX")) {
        const _0x5d3148 = {
          nick: "profile " + this.selected,
          skin: "",
          arbSkin: _0x431fed,
          skin: _0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x4b4ffa)),
          arbSkin: _0x431fed,
        };
        _0x90a1a7.skin = _0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x4b4ffa));
        _0x19d5af.set("profiles", "profile" + this.selected, _0x5d3148);
        this.updateMainSkin("./res/skins/free/" + _0x431fed.replace(/free\/|.png/g, "") + ".png");
        this.updatePreviewSkin(this.selected);
      }
    }
    static ["setSkin"](_0x10e480) {
      let _0x2716a1 = _0x19d5af.get("profiles", "profile" + this.selected);
      const _0x1197ad = {
        nick: "profile " + this.selected,
        skin: "https://i.imgur.com/nRqSis7.png",
        arbSkin: "",
      };
      if (!_0x2716a1) {
        _0x2716a1 = _0x1197ad;
      }
      _0x2716a1.skin = _0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x10e480));
      _0x19d5af.set("profiles", "profile" + this.selected, _0x2716a1);
      this.updateMainSkin();
      this.updatePreviewSkin(this.selected);
      _0x90a1a7.skin = _0x10e480;
    }
    static ["setTag"](_0x57c637) {
      _0x90a1a7.tag = _0x57c637;
      _0x19d5af.set("profiles", "tag", _0x57c637);
    }
    static ["updateMainSkin"](_0x55f338) {
      const _0x1f6a96 = _0x14f7b2("#skin").val();
      _0x55f338 = _0x55f338 || _0x14f7b2("#arbSkin").val();
      const _0x2517b0 = !_0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x1f6a96 || "")).includes("XXXXXXX")
        ? _0x1f6a96
        : "./res/skins/free/" + _0x55f338.replace(/free\/|.png/g, "") + ".png";
      _0x14f7b2(".skin-preview").css("background", "url(" + _0x2517b0 + ")");
    }
    static ["updatePreviewSkin"](_0x4207bd) {
      let _0x5cc1ac = _0x19d5af.get("profiles", "profile" + _0x4207bd);
      if (_0x5cc1ac) {
        const _0x3d8c60 = !_0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x5cc1ac.skin || "")).includes("XXXXXXX")
          ? _0x5cc1ac.skin
          : _0x5cc1ac.arbSkin && "./res/skins/free/" + _0x5cc1ac.arbSkin.replace(/free\/|.png/g, "") + "png";
        _0x14f7b2(".skin-selector[value=" + _0x4207bd + "]").css("background", "url(" + _0x3d8c60 + ")");
      }
    }
  }
  class _0x56ef98 {
    static ["init"]() {
      this.toggleMenuKey = _0x19d5af.get("hotkeys", "toggleMenuKey") || "ESC";
      this.feedKey = _0x19d5af.get("hotkeys", "feedKey") || "W";
      this.macroFeedKey = _0x19d5af.get("hotkeys", "macroFeedKey") || "E";
      this.splitKey = _0x19d5af.get("hotkeys", "splitKey") || "SPACE";
      this.doubleSplitKey = _0x19d5af.get("hotkeys", "doubleSplitKey") || "R";
      this.split16Key = _0x19d5af.get("hotkeys", "split16Key") || "G";
      this.stopKey = _0x19d5af.get("hotkeys", "stopKey") || "S";
      this.chatKey = _0x19d5af.get("hotkeys", "chatKey") || "ENTER";
      this.privateChatKey = _0x19d5af.get("hotkeys", "privateChatKey") || "ALT+0";
      this.freeSpectateKey = _0x19d5af.get("hotkeys", "freeSpectateKey") || "Q";
      this.toggleSplitRings = _0x19d5af.get("hotkeys", "toggleSplitRings") || "U";
      this.toggleOpponentRings = _0x19d5af.get("hotkeys", "toggleOpponentRings") || "I";
      this.toggleNick = _0x19d5af.get("hotkeys", "toggleNick") || "N";
      this.toggleMass = _0x19d5af.get("hotkeys", "toggleMass") || "M";
      this.toggleBGsectors = _0x19d5af.get("hotkeys", "toggleBGsectors") || "B";
      this.toggleFood = _0x19d5af.get("hotkeys", "toggleFood") || "F";
      this.toggleSkin = _0x19d5af.get("hotkeys", "toggleSkin") || "A";
      this.toggleCustomSkin = _0x19d5af.get("hotkeys", "toggleCustomSkin") || "X";
      this.respawnKey = _0x19d5af.get("hotkeys", "respawnKey") || "TILDE";
      this.multiboxTab = _0x19d5af.get("hotkeys", "multiboxTab") || "TAB";
      this.togglemultiboxRing = _0x19d5af.get("hotkeys", "togglemultiboxRing") || "L";
      this.command0Key = _0x19d5af.get("hotkeys", "command0Key") || "0";
      this.command1Key = _0x19d5af.get("hotkeys", "command1Key") || "1";
      this.command2Key = _0x19d5af.get("hotkeys", "command2Key") || "2";
      this.command3Key = _0x19d5af.get("hotkeys", "command3Key") || "3";
      this.command4Key = _0x19d5af.get("hotkeys", "command4Key") || "4";
      this.command5Key = _0x19d5af.get("hotkeys", "command5Key") || "5";
      this.command6Key = _0x19d5af.get("hotkeys", "command6Key") || "6";
      this.command7Key = _0x19d5af.get("hotkeys", "command7Key") || "7";
      this.command8Key = _0x19d5af.get("hotkeys", "command8Key") || "8";
      this.command9Key = _0x19d5af.get("hotkeys", "command9Key") || "9";
      this.zoom1key = _0x19d5af.get("hotkeys", "zoom1key") || "ALT+1";
      this.zoom2key = _0x19d5af.get("hotkeys", "zoom2key") || "ALT+2";
      this.zoom3key = _0x19d5af.get("hotkeys", "zoom3key") || "ALT+3";
      this.zoom4key = _0x19d5af.get("hotkeys", "zoom4key") || "ALT+4";
      this.zoom5key = _0x19d5af.get("hotkeys", "zoom5key") || "ALT+5";
      this.pressedKeys = new Map();
      this.setDomKeys();
      this.addEvents();
    }
    static ["setDomKeys"]() {
      _0x14f7b2("#hotkeys .row").each(function () {
        const _0x372497 = _0x14f7b2(this).attr("name");
        const _0x58b8b6 = _0x14f7b2(this).find(".key")[0];
        _0x14f7b2(_0x58b8b6).val(_0x56ef98[_0x372497]);
      });
    }
    static ["addEvents"]() {
      _0x14f7b2("#hotkeys").perfectScrollbar();
      _0x14f7b2("#hotkeys .row .key").each(function () {
        _0x14f7b2(this).keydown((_0x37578f) => {
          _0x37578f.preventDefault();
          const _0x39eacf = _0x14f7b2(this).parent();
          _0x56ef98.setKey(_0x39eacf, _0x37578f, this);
        });
      });
      _0x24f9ab.addEventListener("keydown", (_0x23acd0) => this.onKeyDown(_0x23acd0));
      _0x24f9ab.addEventListener("keyup", (_0x35e25b) => this.onKeyUp(_0x35e25b));
    }
    static ["onKeyDown"](_0x4f6eb0) {
      if (9 === _0x4f6eb0.keyCode) {
        _0x4f6eb0.preventDefault();
      }
      const _0x226f1c = this.getKey(_0x4f6eb0);
      if (
        _0x226f1c &&
        !this.pressedKeys.has(_0x226f1c) &&
        (this.pressedKeys.set(_0x226f1c, true), !_0x49cc31.isOpened || "hotkeys" !== _0x49cc31.target)
      ) {
        if (_0x226f1c === this.chatKey) {
          return void _0x22a8df.chat(1);
        }
        if (_0x226f1c === this.privateChatKey) {
          return void _0x22a8df.chat(2);
        }
        if (!_0x59ca82.isFocused) {
          if (_0x226f1c === this.toggleMenuKey) {
            return void _0x31c9b4.toggle();
          }
          if (!_0x31c9b4.isOpened) {
            _0x4f6eb0.preventDefault();
            return _0x226f1c !== this.freeSpectateKey || _0x90a1a7.isAlive
              ? _0x226f1c === this.respawnKey
                ? void _0x22a8df.respawn()
                : _0x226f1c === this.macroFeedKey
                  ? void _0x22a8df.macroFeed(true)
                  : _0x226f1c === this.feedKey
                    ? void _0x22a8df.feed()
                    : _0x226f1c === this.splitKey
                      ? void _0x22a8df.split()
                      : _0x226f1c === this.doubleSplitKey
                        ? void _0x22a8df.doubleSplit()
                        : _0x226f1c === this.split16Key
                          ? void _0x22a8df.split16()
                          : _0x226f1c === this.multiboxTab
                            ? void _0x22a8df.multiboxTab()
                            : _0x226f1c === this.stopKey
                              ? void _0x22a8df.stopMovementToggle()
                              : _0x226f1c === this.toggleSplitRings
                                ? void _0x22a8df.toggleSplitRings()
                                : _0x226f1c === this.toggleOpponentRings
                                  ? void _0x22a8df.toggleOpponentRings()
                                  : _0x226f1c === this.toggleNick
                                    ? void _0x22a8df.toggleCellNick()
                                    : _0x226f1c === this.toggleMass
                                      ? void _0x22a8df.toggleCellMass()
                                      : _0x226f1c === this.toggleBGsectors
                                        ? void _0x22a8df.toggleBGsectors()
                                        : _0x226f1c === this.toggleFood
                                          ? void _0x22a8df.toggleGameFood()
                                          : _0x226f1c === this.toggleSkin
                                            ? void _0x22a8df.toggleSkin()
                                            : _0x226f1c === this.toggleCustomSkin
                                              ? void _0x22a8df.toggleCustomSkin()
                                              : _0x226f1c === this.togglemultiboxRing
                                                ? void _0x22a8df.togglemultiboxRing()
                                                : _0x226f1c === this.command0Key
                                                  ? void _0x22a8df.command(0)
                                                  : _0x226f1c === this.command1Key
                                                    ? void _0x22a8df.command(1)
                                                    : _0x226f1c === this.command2Key
                                                      ? void _0x22a8df.command(2)
                                                      : _0x226f1c === this.command3Key
                                                        ? void _0x22a8df.command(3)
                                                        : _0x226f1c === this.command4Key
                                                          ? void _0x22a8df.command(4)
                                                          : _0x226f1c === this.command5Key
                                                            ? void _0x22a8df.command(5)
                                                            : _0x226f1c === this.command6Key
                                                              ? void _0x22a8df.command(6)
                                                              : _0x226f1c === this.command7Key
                                                                ? void _0x22a8df.command(7)
                                                                : _0x226f1c === this.command8Key
                                                                  ? void _0x22a8df.command(8)
                                                                  : _0x226f1c === this.command9Key
                                                                    ? void _0x22a8df.command(9)
                                                                    : _0x226f1c === this.zoom1key
                                                                      ? void _0x22a8df.setZoom(0.5)
                                                                      : _0x226f1c === this.zoom2key
                                                                        ? void _0x22a8df.setZoom(0.25)
                                                                        : _0x226f1c === this.zoom3key
                                                                          ? void _0x22a8df.setZoom(0.125)
                                                                          : _0x226f1c === this.zoom4key
                                                                            ? void _0x22a8df.setZoom(0.075)
                                                                            : _0x226f1c === this.zoom5key
                                                                              ? void _0x22a8df.setZoom(0.05)
                                                                              : undefined
              : void _0x22a8df.toggleSpectate();
          }
        }
      }
    }
    static ["onKeyUp"](_0x391fb9) {
      const _0x4164bc = this.getKey(_0x391fb9);
      if (_0x4164bc && (this.pressedKeys["delete"](_0x4164bc), _0x4164bc === this.macroFeedKey)) {
        _0x22a8df.macroFeed(false);
      }
    }
    static ["setKey"](_0x3848df, _0x10f53a, _0x327dad) {
      let _0x16b872 = this.getKey(_0x10f53a);
      let _0x5537db = _0x14f7b2(_0x3848df).attr("name");
      if (false !== _0x16b872) {
        if ("freeSpectateKey" !== _0x5537db) {
          this.alreadyBinded(_0x16b872);
        }
        if ("DEL" === _0x16b872) {
          _0x16b872 = "";
        }
        _0x14f7b2(_0x327dad).val(_0x16b872);
        this[_0x5537db] = _0x16b872;
        _0x19d5af.set("hotkeys", _0x5537db, _0x16b872);
      }
    }
    static ["alreadyBinded"](_0x353177) {
      let _0x5b9fc6 = false;
      if (_0x353177 === this.toggleMenuKey) {
        _0x5b9fc6 = "toggleMenuKey";
      } else if (_0x353177 === this.feedKey) {
        _0x5b9fc6 = "feedKey";
      } else if (_0x353177 === this.macroFeedKey) {
        _0x5b9fc6 = "macroFeedKey";
      } else if (_0x353177 === this.splitKey) {
        _0x5b9fc6 = "splitKey";
      } else if (_0x353177 === this.doubleSplitKey) {
        _0x5b9fc6 = "doubleSplitKey";
      } else if (_0x353177 === this.split16Key) {
        _0x5b9fc6 = "split16Key";
      } else if (_0x353177 === this.stopKey) {
        _0x5b9fc6 = "stopKey";
      } else if (_0x353177 === this.chatKey) {
        _0x5b9fc6 = "chatKey";
      } else if (_0x353177 === this.privateChatKey) {
        _0x5b9fc6 = "privateChatKey";
      } else if (_0x353177 === this.toggleSplitRings) {
        _0x5b9fc6 = "toggleSplitRings";
      } else if (_0x353177 === this.toggleOpponentRings) {
        _0x5b9fc6 = "toggleOpponentRings";
      } else if (_0x353177 === this.toggleNick) {
        _0x5b9fc6 = "toggleNick";
      } else if (_0x353177 === this.toggleMass) {
        _0x5b9fc6 = "toggleMass";
      } else if (_0x353177 === this.toggleBGsectors) {
        _0x5b9fc6 = "toggleBGsectors";
      } else if (_0x353177 === this.toggleFood) {
        _0x5b9fc6 = "toggleFood";
      } else if (_0x353177 === this.toggleSkin) {
        _0x5b9fc6 = "toggleSkin";
      } else if (_0x353177 === this.toggleCustomSkin) {
        _0x5b9fc6 = "toggleCustomSkin";
      } else if (_0x353177 === this.togglemultiboxRing) {
        _0x5b9fc6 = "togglemultiboxRing";
      } else if (_0x353177 === this.respawnKey) {
        _0x5b9fc6 = "respawnKey";
      } else if (_0x353177 === this.command0Key) {
        _0x5b9fc6 = "command0Key";
      } else if (_0x353177 === this.command1Key) {
        _0x5b9fc6 = "command1Key";
      } else if (_0x353177 === this.command2Key) {
        _0x5b9fc6 = "command2Key";
      } else if (_0x353177 === this.command3Key) {
        _0x5b9fc6 = "command3Key";
      } else if (_0x353177 === this.command4Key) {
        _0x5b9fc6 = "command4Key";
      } else if (_0x353177 === this.command5Key) {
        _0x5b9fc6 = "command5Key";
      } else if (_0x353177 === this.command6Key) {
        _0x5b9fc6 = "command6Key";
      } else if (_0x353177 === this.command7Key) {
        _0x5b9fc6 = "command7Key";
      } else if (_0x353177 === this.command8Key) {
        _0x5b9fc6 = "command8Key";
      } else if (_0x353177 === this.command9Key) {
        _0x5b9fc6 = "command9Key";
      } else if (_0x353177 === this.zoom1key) {
        _0x5b9fc6 = "zoom1key";
      } else if (_0x353177 === this.zoom2key) {
        _0x5b9fc6 = "zoom2key";
      } else if (_0x353177 === this.zoom3key) {
        _0x5b9fc6 = "zoom3key";
      } else if (_0x353177 === this.zoom4key) {
        _0x5b9fc6 = "zoom4key";
      } else if (_0x353177 === this.zoom5key) {
        _0x5b9fc6 = "zoom5key";
      }
      if (_0x5b9fc6) {
        this[_0x5b9fc6] = "";
        _0x19d5af.set("hotkeys", _0x5b9fc6, "");
        _0x14f7b2("#hotkeys .row[name=" + _0x5b9fc6 + "] input").val("");
      }
    }
    static ["isValidKey"](_0xa8ed8a) {
      const _0x1bc256 = _0xa8ed8a.keyCode || _0xa8ed8a.which;
      return (
        (64 < _0x1bc256 && 91 > _0x1bc256) ||
        (47 < _0x1bc256 && 58 > _0x1bc256) ||
        13 === _0x1bc256 ||
        27 === _0x1bc256 ||
        32 === _0x1bc256 ||
        16 === _0x1bc256 ||
        46 === _0x1bc256 ||
        192 === _0x1bc256 ||
        9 === _0x1bc256
      );
    }
    static ["getKey"](_0x1747b6) {
      if (!this.isValidKey(_0x1747b6)) {
        return false;
      }
      const _0x1d3089 = _0x1747b6.keyCode || _0x1747b6.which;
      let _0x15ee1c = false;
      let _0x4b3a43 = false;
      if (_0x1747b6.ctrlKey) {
        _0x15ee1c = "CTRL+";
      } else if (_0x1747b6.altKey) {
        _0x15ee1c = "ALT+";
      }
      if (64 < _0x1d3089 && 91 > _0x1d3089) {
        _0x4b3a43 = String.fromCharCode(_0x1d3089);
      } else if (47 < _0x1d3089 && 58 > _0x1d3089) {
        _0x4b3a43 = "" + (_0x1d3089 - 48);
      } else if (!_0x15ee1c) {
        if (13 === _0x1d3089) {
          _0x4b3a43 = "ENTER";
        } else if (27 === _0x1d3089) {
          _0x4b3a43 = "ESC";
        } else if (32 === _0x1d3089) {
          _0x4b3a43 = "SPACE";
        } else if (16 === _0x1d3089) {
          _0x4b3a43 = "SHIFT";
        } else if (9 === _0x1d3089) {
          _0x4b3a43 = "TAB";
        } else if (46 === _0x1d3089) {
          _0x4b3a43 = "DEL";
        } else if (192 === _0x1d3089) {
          _0x4b3a43 = "TILDE";
        }
      }
      return !!_0x4b3a43 && (_0x15ee1c ? _0x15ee1c + _0x4b3a43 : _0x4b3a43);
    }
  }
  class _0x128142 {
    static ["init"]() {
      this.leftClick = _0x19d5af.get("mouse", "leftClick") || "off";
      this.middleClick = _0x19d5af.get("mouse", "middleClick") || "commander";
      this.rightClick = _0x19d5af.get("mouse", "rightClick") || "off";
      this.x = 0;
      this.y = 0;
      this.canvas = _0x24f9ab.getElementById("canvas");
      this.canvasX = 0;
      this.canvasY = 0;
      this.setDomValues();
      this.addEvents();
    }
    static ["send"]() {
      const _0x37635b = {
        x: 0x0,
        y: 0x0,
      };
      const _0x2295c7 = 2 === _0x90a1a7.typeID ? _0x996564.position : _0x37635b;
      this.canvasX = (this.x - this.canvas.width / 2) / _0xddb6d6.viewport + _0xddb6d6.x + _0x2295c7.x;
      this.canvasY = (this.y - this.canvas.height / 2) / _0xddb6d6.viewport + _0xddb6d6.y + _0x2295c7.y;
      return _0xddb6d6.isSpectating && _0x3a83be.isTurnedOn
        ? void _0x302a2c.mouse(0 | _0x3a83be.center.x, 0 | _0x3a83be.center.y)
        : _0x90a1a7.movementPaused
          ? void _0x302a2c.mouse(0 | _0x90a1a7.x, 0 | _0x90a1a7.y)
          : void _0x302a2c.mouse(0 | this.canvasX, 0 | this.canvasY);
    }
    static ["setDomValues"]() {
      _0x14f7b2(".mouse-options").each(function () {
        const _0x2a9f88 = _0x14f7b2(this).attr("type");
        if ("range" === _0x2a9f88) {
          _0x128142.handleRange(this, 2);
        } else if ("options" === _0x2a9f88) {
          _0x128142.handleOptions(this, 2);
        }
      });
    }
    static ["addEvents"]() {
      _0x14f7b2("#mouse").perfectScrollbar();
      _0x14f7b2("#mouse .fa-chevron-left").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x2a7485 = _0x14f7b2(this).parent();
          const _0x5ac730 = _0x14f7b2(_0x2a7485).attr("type");
          if ("options" === _0x5ac730) {
            _0x128142.handleOptions(_0x2a7485, 0);
          } else if ("range" === _0x5ac730) {
            _0x128142.handleRange(_0x2a7485, 0);
          }
        });
      });
      _0x14f7b2("#mouse .fa-chevron-right").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x53f175 = _0x14f7b2(this).parent();
          const _0x47905c = _0x14f7b2(_0x53f175).attr("type");
          if ("options" === _0x47905c) {
            _0x128142.handleOptions(_0x53f175, 1);
          } else if ("range" === _0x47905c) {
            _0x128142.handleRange(_0x53f175, 1);
          }
        });
      });
      // Bound to the document, not just the canvas: mousemove only fires on
      // whichever element is directly under the cursor, so tracking it on
      // the canvas alone made the reported position freeze every time the
      // cursor crossed any overlapping UI (chat, minimap, HUD panels) -
      // exactly what free-spectate needs to sweep across to look around,
      // which is what made the camera appear to keep snapping back to a
      // stale position. Click actions stay canvas-scoped below on purpose,
      // so clicking a UI button doesn't also trigger feed/split/commander.
      _0x24f9ab.addEventListener("mousemove", (_0x1c9462) => {
        this.x = _0x1c9462.clientX;
        this.y = _0x1c9462.clientY;
      });
      this.canvas.addEventListener("mousedown", (_0xc5c07d) => {
        this.onMouseClick(_0xc5c07d);
      });
      this.canvas.addEventListener("mouseup", (_0xf7c24a) => {
        this.onMouseRelease(_0xf7c24a);
      });
      this.canvas.addEventListener("wheel", (_0x48c72e) => {
        this.onMouseWheel(_0x48c72e);
      });
      this.canvas.addEventListener("contextmenu", (_0x230a32) => {
        _0x230a32.preventDefault();
        // Right-click is also a configurable gameplay action (feed/split/
        // commander/etc, dispatched via onMouseClick on mousedown) - only
        // steal it for the party-invite menu while it's unbound, so the
        // two don't both fire off a single right-click.
        if ("off" !== this.rightClick) {
          _0x7c92e1.closeMenu();
          return;
        }
        const _0x1a2b3c = _0x14d4a3.getCellAt(this.canvasX, this.canvasY);
        if (_0x1a2b3c) {
          _0x7c92e1.openMenu(_0x1a2b3c, _0x230a32.pageX, _0x230a32.pageY);
        } else {
          _0x7c92e1.closeMenu();
        }
      });
    }
    static ["onMouseWheel"](_0x6ba23b) {
      let _0x43363b = _0xddb6d6.targetViewport;
      if (0 > _0x6ba23b.wheelDelta) {
        _0x43363b *= _0x2cc0f3.zoomSpeed / 100;
      } else {
        _0x43363b /= _0x2cc0f3.zoomSpeed / 100;
      }
      _0x43363b = 2 < _0x43363b ? 2 : 0.02 > _0x43363b ? 0.02 : _0x43363b;
      _0xddb6d6.targetViewport = _0x43363b;
    }
    static ["onMouseClick"](_0x47116f) {
      let _0x26dc43 = false;
      switch (_0x47116f.which) {
        case 1:
          _0x26dc43 = "leftClick";
          break;
        case 2:
          _0x26dc43 = "middleClick";
          break;
        case 3:
          _0x26dc43 = "rightClick";
      }
      if (_0x26dc43) {
        if (_0xddb6d6.isSpectating && "on" === _0x2cc0f3.targeting) {
          const _0x100551 = (_0x47116f.clientX - (_0x1c478d.innerWidth >> 1)) / _0xddb6d6.viewport + _0xddb6d6.x;
          const _0x1d1b96 = (_0x47116f.clientY - (_0x1c478d.innerHeight >> 1)) / _0xddb6d6.viewport + _0xddb6d6.y;
          return void ("leftClick" === _0x26dc43
            ? _0x3a83be.lockTarget(_0x100551, _0x1d1b96, 1)
            : "middleClick" === _0x26dc43
              ? _0x3a83be.reset()
              : "rightClick" == _0x26dc43 && _0x3a83be.lockTarget(_0x100551, _0x1d1b96, 2));
        }
        const _0x468bbf = this[_0x26dc43];
        return "off" === _0x468bbf
          ? undefined
          : "feed" === _0x468bbf
            ? void _0x22a8df.feed()
            : "macroFeed" === _0x468bbf
              ? void _0x22a8df.macroFeed(true)
              : "split" === _0x468bbf
                ? void _0x22a8df.split()
                : "doubleSplit" === _0x468bbf
                  ? void _0x22a8df.doubleSplit()
                  : "split16" === _0x468bbf
                    ? void _0x22a8df.split16()
                    : "commander" === _0x468bbf
                      ? void _0x2d5cce.commander()
                      : "multiboxTab" === _0x468bbf
                        ? void _0x22a8df.multiboxTab()
                        : undefined;
      }
    }
    static ["onMouseRelease"](_0x3fd5b1) {
      let _0x3cf92e = false;
      switch (_0x3fd5b1.which) {
        case 1:
          _0x3cf92e = "leftClick";
          break;
        case 2:
          _0x3cf92e = "middleClick";
          break;
        case 3:
          _0x3cf92e = "rightClick";
      }
      if (_0x3cf92e) {
        if ("macroFeed" === this[_0x3cf92e]) {
          return void _0x22a8df.macroFeed(false);
        }
      }
    }
    static ["handleOptions"](_0x4b1e6e, _0x3b3390) {
      const _0x28bf25 = _0x14f7b2(_0x4b1e6e).attr("name");
      const _0x3ad54c = _0x14f7b2(_0x4b1e6e).find("b");
      const _0x476442 = _0x3ad54c.length;
      let _0x4a39c1 = _0x476442;
      let _0x2b5b94 = 0;
      for (; _0x4a39c1--; ) {
        let _0x2f7f1e = _0x3ad54c[_0x4a39c1];
        if ("active" === _0x14f7b2(_0x2f7f1e).attr("class")) {
          _0x2b5b94 = _0x4a39c1;
        }
      }
      if (1 === _0x3b3390) {
        const _0xf23814 = _0x2b5b94 + 1 < _0x476442 ? _0x2b5b94 + 1 : 0;
        _0x14f7b2(_0x3ad54c[_0x2b5b94]).removeAttr("class");
        _0x14f7b2(_0x3ad54c[_0xf23814]).attr("class", "active");
        const _0x21622c = _0x14f7b2(_0x3ad54c[_0xf23814]).attr("value");
        this.saveMouseOptions(_0x28bf25, _0x21622c);
      } else {
        if (0 === _0x3b3390) {
          const _0x5ab8e2 = 0 < _0x2b5b94 ? _0x2b5b94 - 1 : _0x476442 - 1;
          _0x14f7b2(_0x3ad54c[_0x2b5b94]).removeAttr("class");
          _0x14f7b2(_0x3ad54c[_0x5ab8e2]).attr("class", "active");
          const _0x4d8662 = _0x14f7b2(_0x3ad54c[_0x5ab8e2]).attr("value");
          this.saveMouseOptions(_0x28bf25, _0x4d8662);
        } else {
          if (2 === _0x3b3390) {
            _0x14f7b2(_0x3ad54c[_0x2b5b94]).removeAttr("class");
            let _0x2ebfee;
            for (let _0x253e9f = _0x476442; _0x253e9f--; ) {
              _0x2ebfee = _0x3ad54c[_0x253e9f];
              if (_0x14f7b2(_0x2ebfee).attr("value") === this[_0x28bf25]) {
                _0x14f7b2(_0x2ebfee).attr("class", "active");
                break;
              }
            }
          }
        }
      }
    }
    static ["handleRange"](_0x459cfd, _0x38026c) {
      const _0x5b5f0a = _0x14f7b2(_0x459cfd).attr("name");
      const _0x44de45 = _0x14f7b2(_0x459cfd).find("span");
      const _0x29da59 = _0x44de45[0];
      const _0x2e034d = _0x44de45[1];
      const _0x4f7ee4 = ~~_0x14f7b2(_0x29da59).attr("min");
      const _0x887f8c = ~~_0x14f7b2(_0x29da59).attr("max");
      const _0x1761fe = ~~_0x14f7b2(_0x29da59).attr("step");
      const _0x1cd1f0 = ~~_0x14f7b2(_0x29da59).attr("value");
      if (1 === _0x38026c && _0x1cd1f0 + _0x1761fe <= _0x887f8c) {
        const _0x4fbb29 = _0x1761fe + _0x1cd1f0;
        _0x14f7b2(_0x29da59).attr("value", _0x4fbb29);
        _0x14f7b2(_0x2e034d).css("width", ~~((100 * (_0x4fbb29 - _0x4f7ee4)) / (_0x887f8c - _0x4f7ee4)) + "px");
        this.saveMouseOptions(_0x5b5f0a, _0x4fbb29);
      } else {
        if (0 === _0x38026c && _0x1cd1f0 - _0x1761fe >= _0x4f7ee4) {
          const _0x28a886 = _0x1cd1f0 - _0x1761fe;
          _0x14f7b2(_0x29da59).attr("value", _0x28a886);
          _0x14f7b2(_0x2e034d).css("width", ~~((100 * (_0x28a886 - _0x4f7ee4)) / (_0x887f8c - _0x4f7ee4)) + "px");
          this.saveMouseOptions(_0x5b5f0a, _0x28a886);
        } else {
          if (2 === _0x38026c) {
            const _0x4e3b9d = this[_0x5b5f0a];
            _0x14f7b2(_0x29da59).attr("value", _0x4e3b9d);
            _0x14f7b2(_0x2e034d).css("width", ~~((100 * (_0x4e3b9d - _0x4f7ee4)) / (_0x887f8c - _0x4f7ee4)) + "px");
          }
        }
      }
    }
    static ["saveMouseOptions"](_0x23ebd1, _0x55d92b) {
      this[_0x23ebd1] = _0x55d92b;
      _0x19d5af.set("mouse", _0x23ebd1, _0x55d92b);
    }
  }
  class _0x10ab3c {
    static ["init"]() {
      this.load();
      this.setDomValues();
      this.addEvents();
    }
    static ["load"]() {
      this.command1 = _0x19d5af.get("commands", "command1") || _0x59f59a.current.commandsMenu.command1;
      this.command2 = _0x19d5af.get("commands", "command2") || _0x59f59a.current.commandsMenu.command2;
      this.command3 = _0x19d5af.get("commands", "command3") || _0x59f59a.current.commandsMenu.command3;
      this.command4 = _0x19d5af.get("commands", "command4") || _0x59f59a.current.commandsMenu.command4;
      this.command5 = _0x19d5af.get("commands", "command5") || _0x59f59a.current.commandsMenu.command5;
      this.command6 = _0x19d5af.get("commands", "command6") || _0x59f59a.current.commandsMenu.command6;
      this.command7 = _0x19d5af.get("commands", "command7") || _0x59f59a.current.commandsMenu.command7;
      this.command8 = _0x19d5af.get("commands", "command8") || _0x59f59a.current.commandsMenu.command8;
      this.command9 = _0x19d5af.get("commands", "command9") || _0x59f59a.current.commandsMenu.command9;
      this.command0 = _0x19d5af.get("commands", "command0") || _0x59f59a.current.commandsMenu.command0;
    }
    static ["addEvents"]() {
      _0x14f7b2("#commands").perfectScrollbar();
      let _0xcbd57;
      for (let _0x36400f = 10; _0x36400f--; ) {
        _0xcbd57 = "command" + _0x36400f;
        _0x14f7b2("#" + _0xcbd57).blur(() => {
          this.setCommand(_0xcbd57, _0x14f7b2("#" + _0xcbd57).val());
        });
      }
    }
    static ["setCommand"](_0x5a8d5b, _0x4d2612) {
      this[_0x5a8d5b] = _0x4d2612;
      _0x19d5af.set("commands", _0x5a8d5b, _0x4d2612);
    }
    static ["setDomValues"]() {
      let _0x134c8f;
      for (let _0x40c482 = 10; _0x40c482--; ) {
        _0x134c8f = "command" + _0x40c482;
        _0x14f7b2("#" + _0x134c8f).val(this[_0x134c8f]);
      }
    }
    static ["refresh"]() {
      this.load();
      this.setDomValues();
    }
  }
  class _0x22a8df {
    static ["init"]() {
      this.ejectInterval = false;
    }
    static ["stopMovementToggle"]() {
      _0x90a1a7.movementPaused = !_0x90a1a7.movementPaused;
    }
    static ["feed"]() {
      _0x128142.send();
      _0x302a2c.eject();
    }
    static ["macroFeed"](_0x2045c7) {
      if (_0x2045c7) {
        if (this.ejectInterval) {
          return;
        }
        this.feed();
        this.ejectInterval = setInterval(() => {
          this.feed();
        }, 25);
      } else if (this.ejectInterval) {
        clearInterval(this.ejectInterval);
        this.ejectInterval = false;
      }
    }
    static ["split"]() {
      _0x128142.send();
      _0x302a2c.split();
    }
    static ["doubleSplit"]() {
      this.split();
      setTimeout(() => {
        this.split();
      }, 40);
    }
    static ["split16"]() {
      this.split();
      setTimeout(() => {
        this.split();
      }, 40);
      setTimeout(() => {
        this.split();
      }, 60);
      setTimeout(() => {
        this.split();
      }, 80);
      setTimeout(() => {
        this.split();
      }, 100);
      setTimeout(() => {
        this.split();
      }, 120);
      setTimeout(() => {
        this.split();
      }, 140);
    }
    static ["toggleSpectate"]() {
      return _0x3a83be.isTurnedOn
        ? (_0x3a83be.reset(), (_0x3a83be.target1.turnedOn = false), (_0x3a83be.target2.turnedOn = false), void _0x3a43e7.mouseViewport())
        : (_0x302a2c.freeSpectate(),
          _0xddb6d6.freeSpectate ? _0x3a43e7.mouseViewport() : _0x3a43e7.topViewport(),
          (_0x3a83be.target1.turnedOn = false),
          void (_0x3a83be.target2.turnedOn = false));
    }
    static ["chat"](_0x37e550) {
      _0x59ca82.enter(_0x37e550);
    }
    static ["command"](_0x4a99af) {
      let _0x2dfda6 = _0x10ab3c["command" + _0x4a99af];
      if (0 <= _0x2dfda6.indexOf("%sector%")) {
        const _0x43246e = _0x996564.getLocation(_0xddb6d6.x, _0xddb6d6.y);
        _0x2dfda6 = _0x2dfda6.replace("%sector%", _0x43246e);
      }
      _0x302a2c.chat(_0x2dfda6);
      _0x2d5cce.chat(2, _0x2dfda6);
    }
    static ["setZoom"](_0x4b51ed) {
      _0xddb6d6.targetViewport = _0x4b51ed;
    }
    static ["toggleCellNick"]() {
      const _0x390341 = _0x19d5af.get("settings", "cellNick");
      _0x2cc0f3.cellNick = "off" === _0x2cc0f3.cellNick ? ("off" !== _0x390341 && _0x390341) || "on" : "off";
    }
    static ["toggleCellMass"]() {
      const _0x283e57 = _0x19d5af.get("settings", "cellMass");
      _0x2cc0f3.cellMass = "off" === _0x2cc0f3.cellMass ? ("off" !== _0x283e57 && _0x283e57) || "shortened" : "off";
    }
    static ["toggleGameFood"]() {
      const _0x6f503d = _0x19d5af.get("settings", "food");
      _0x2cc0f3.food = "off" === _0x2cc0f3.food ? ("off" !== _0x6f503d && _0x6f503d) || "monoColored" : "off";
    }
    static ["toggleBGsectors"]() {
      const _0xfd7451 = _0x19d5af.get("settings", "bgSectors");
      _0x2cc0f3.bgSectors = "off" === _0x2cc0f3.bgSectors ? ("off" !== _0xfd7451 && _0xfd7451) || "normal" : "off";
    }
    static ["toggleSkin"]() {
      const _0x25ada7 = _0x19d5af.get("settings", "arbSkins");
      _0x2cc0f3.arbSkins = "off" === _0x2cc0f3.arbSkins ? ("off" !== _0x25ada7 && _0x25ada7) || "on" : "off";
    }
    static ["toggleCustomSkin"]() {
      const _0x37c923 = _0x19d5af.get("settings", "urlSkins");
      _0x2cc0f3.urlSkins = "off" === _0x2cc0f3.urlSkins ? ("off" !== _0x37c923 && _0x37c923) || "on" : "off";
    }
    static ["toggleSplitRings"]() {
      const _0x45fe0b = _0x19d5af.get("settings", "splitRings");
      _0x2cc0f3.splitRings = "off" === _0x2cc0f3.splitRings ? ("off" !== _0x45fe0b && _0x45fe0b) || "on" : "off";
    }
    static ["toggleOpponentRings"]() {
      const _0x502302 = _0x19d5af.get("settings", "opponentRings");
      _0x2cc0f3.opponentRings = "off" === _0x2cc0f3.opponentRings ? ("off" !== _0x502302 && _0x502302) || "on" : "off";
    }
    static ["togglemultiboxRing"]() {
      const _0x319d03 = _0x19d5af.get("settings", "multiboxRing");
      _0x2cc0f3.multiboxRing = "off" === _0x2cc0f3.multiboxRing ? ("off" !== _0x319d03 && _0x319d03) || "on" : "off";
    }
    static ["respawn"]() {
      const _0x247aae = setInterval(() => {
        if (_0x18a8d1.connected) {
          _0x302a2c.spawn();
          clearInterval(_0x247aae);
        }
      }, 100);
    }
    static ["multiboxTab"]() {
      if (1 === _0x90a1a7.typeID) {
        _0x90a1a7.typeID = 2;
        if (!_0x90a1a7._isAlive2) {
          _0x302a2c.spawn();
        }
      } else {
        _0x90a1a7.typeID = 1;
        if (!_0x90a1a7._isAlive) {
          _0x302a2c.spawn();
        }
      }
    }
  }
  class _0x77d3cd {
    static ["init"]() {
      this.addEvents();
      this.setServers();
    }
    static ["addEvents"]() {
      _0x14f7b2("#servers").change(() => {
        let _0x16b9d8 = _0x14f7b2("#servers").val();
        if ("" != _0x16b9d8) {
          this.joinServer(_0x16b9d8);
        }
      });
    }
    static ["fetchServerinfo"]() {
      let _0x3be13b;
      let _0x4f61db = new XMLHttpRequest();
      _0x4f61db.open("GET", "https://beta.3rb.io/php/Servers.php", false);
      _0x4f61db.send();
      try {
        _0x3be13b = JSON.parse(_0x4f61db.responseText);
      } catch (_0xa4a5bc) {
        _0x3be13b = null;
      }
      return _0x3be13b;
    }
    static ["getServers"]() {
      try {
        var _0x53f748 = [];
        var _0x5171cd = [];
        this.restartTimes = {};
        var _0x522225 = this.fetchServerinfo();
        var { ip: _0x352371, modes: _0x325373 } = _0x522225;
        Object.keys(_0x325373).forEach((_0x52b40f) => {
          var {
            total: _0x16a8aa,
            max: _0x434fe4,
            servers: [{ port: _0xf96a1f, restart: _0x2c8f61 }],
          } = _0x325373[_0x52b40f];
          const _0x1f6a53 = "wss://" + _0x352371 + ":" + _0xf96a1f + "/V5";
          _0x53f748[_0x52b40f] = {
            ip: _0x1f6a53,
            gamemode: _0x52b40f,
            max_players: _0x434fe4,
            current_players: _0x16a8aa,
          };
          _0x5171cd[_0x52b40f] = _0x1f6a53;
          this.restartTimes[_0x1f6a53] = _0x2c8f61 ? Date.parse(_0x2c8f61) : null;
        });
      } catch (_0x4d7dc1) {
        _0x40f48a.warn("Endymion", "Unexpected error occured while parsing servers info.");
        throw _0x4d7dc1;
      }
      return [_0x5171cd, _0x53f748];
    }
    static ["setServers"]() {
      let [_0x5e6c1, _0x11c4ff] = this.getServers();
      let _0x47b577 = "";
      let _0x3e7ddf = null;
      let _0x182337 = null;
      Object.keys(_0x5e6c1).forEach((_0x5db14f, _0x19dca1) => {
        _0x182337 = _0x5db14f.replace(/[^a-zA-Z0-9 ]/g, "");
        _0x47b577 =
          null != _0x11c4ff[_0x5db14f]
            ? _0x47b577 +
              '<option id="ffa' +
              parseInt(_0x19dca1 + 1) +
              '" value="' +
              _0x5e6c1[_0x5db14f] +
              '">' +
              _0x182337 +
              " [" +
              _0x11c4ff[_0x5db14f].current_players +
              "/" +
              _0x11c4ff[_0x5db14f].max_players +
              "]</option>"
            : _0x47b577 + '<option id="ffa' + parseInt(_0x19dca1 + 1) + '" value="' + _0x5e6c1[_0x5db14f] + '">' + _0x5db14f + "</option>";
      });
      _0x3e7ddf = Math.floor(_0x5e6c1.length * Math.random()) + 1;
      _0x14f7b2("#servers").html(_0x47b577);
      _0x14f7b2("#opt_ffa" + _0x3e7ddf).prop("selected", true);
      _0x14f7b2(document).ready(function () {
        _0x77d3cd.joinServer(_0x14f7b2("#servers").val());
      });
    }
    static ["joinServer"](_0x4fdb09) {
      _0x18a8d1.restartAt = (this.restartTimes && this.restartTimes[_0x4fdb09]) || null;
      _0x18a8d1.connect(_0x4fdb09);
    }
  }
  class _0x480be4 {
    static ["init"]() {
      this.isOpened = false;
      this.div = _0x14f7b2("#theme");
      this.selectedPreset = _0x19d5af.get("theme", "selectedPreset") || "custom";
      this.skinBorder = ~~_0x19d5af.get("theme", "skinBorder") || 100;
      this.lbSize = ~~_0x19d5af.get("theme", "lbSize") || 110;
      this.minimapSize = ~~_0x19d5af.get("theme", "minimapSize") || 200;
      this.chatFontSize = ~~_0x19d5af.get("theme", "chatFontSize") || 14;
      this.cellTransparency = ~~_0x19d5af.get("theme", "cellTransparency") || 100;
      this.cellTransparencyStyle = _0x19d5af.get("theme", "cellTransparencyStyle") || "regular";
      this.lightenCellColor = ~~_0x19d5af.get("theme", "lightenCellColor") || 100;
      this.borderWidth = ~~_0x19d5af.get("theme", "borderWidth") || 150;
      this.borderColor = _0x19d5af.get("theme", "borderColor") || "#ffffff";
      this.team1color = _0x19d5af.get("theme", "team1color") || "#aeaeae";
      this.team2color = _0x19d5af.get("theme", "team2color") || "#ff171f";
      this.multiboxActive = _0x19d5af.get("theme", "multiboxActive") || "#ff61f8";
      this.multiboxInactive = _0x19d5af.get("theme", "multiboxInactive") || "#fff";
      this.multiboxRingWidth = ~~_0x19d5af.get("theme", "multiboxRingWidth") || 10;
      this.nickColor = _0x19d5af.get("theme", "nickColor") || "#fff";
      this.nickStrokeColor = _0x19d5af.get("theme", "nickStrokeColor") || "#000";
      this.cellNickSize = ~~_0x19d5af.get("theme", "cellNickSize") || 120;
      this.nickFont = _0x19d5af.get("theme", "nickFont") || "ubuntu";
      this.massColor = _0x19d5af.get("theme", "massColor") || "#fff";
      this.massStrokeColor = _0x19d5af.get("theme", "massStrokeColor") || "#000";
      this.cellMassSize = ~~_0x19d5af.get("theme", "cellMassSize") || 150;
      this.massFont = _0x19d5af.get("theme", "massFont") || "ubuntu";
      this.gridWidth = ~~_0x19d5af.get("theme", "gridWidth") || 100;
      this.gridColor = _0x19d5af.get("theme", "gridColor") || "#111";
      this.gridTextColor = _0x19d5af.get("theme", "gridTextColor") || "#111";
      this.gridTextSize = _0x19d5af.get("theme", "gridTextSize") || 1500;
      this.gridTextFont = _0x19d5af.get("theme", "gridTextFont") || "ubuntu";
      this.foodSize = ~~_0x19d5af.get("theme", "foodSize") || 1;
      this.foodColor = _0x19d5af.get("theme", "foodColor") || "#6111ff";
      this.virusColor = _0x19d5af.get("theme", "virusColor") || "#8f8f8f";
      this.virusBorderColor = _0x19d5af.get("theme", "virusBorderColor") || "#c2c2c2";
      this.virusBorderWidth = ~~_0x19d5af.get("theme", "virusBorderWidth") || 10;
      this.commanderColor = _0x19d5af.get("theme", "commanderColor") || "#f5e35d";
      this.backgroundColor = _0x19d5af.get("theme", "backgroundColor") || "#000000";
      this.backgroundImage = _0x19d5af.get("theme", "backgroundImage") || "https://i.imgur.com/aKvo1jQ.png";
      this.borderStyle = _0x19d5af.get("theme", "borderStyle") || "rainbow";
      this.indicatorSize = ~~_0x19d5af.get("theme", "indicatorSize") || 100;
      this.cursor = _0x19d5af.get("theme", "cursor") || 13;
      this.addPresets();
      this.setDomValues();
      this.addEvents();
    }
    static ["setDomValues"]() {
      _0x14f7b2(".theme-options").each(function () {
        const _0x46ba3f = _0x14f7b2(this).attr("type");
        if ("range" === _0x46ba3f) {
          _0x480be4.handleRange(this, 2);
        } else if ("options" === _0x46ba3f) {
          _0x480be4.handleOptions(this, 2);
        } else if ("colorpicker" === _0x46ba3f) {
          _0x480be4.initColorpicker(this);
        }
      });
      this.setChatFontSize(this.chatFontSize);
      this.setBackground(this.backgroundColor);
      this.setLeaderboard(this.lbSize);
      this.setMinimap(this.minimapSize);
      this.setCursor(this.cursor);
      _0x14f7b2("#bgImageUrl").val(this.backgroundImage);
    }
    static ["addEvents"]() {
      _0x14f7b2(".theme-container").perfectScrollbar();
      _0x14f7b2(".theme-container .fa-chevron-left").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x398d1b = _0x14f7b2(this).parent();
          const _0x4f91e6 = _0x14f7b2(_0x398d1b).attr("type");
          if ("options" === _0x4f91e6) {
            _0x480be4.handleOptions(_0x398d1b, 0);
          } else if ("range" === _0x4f91e6) {
            _0x480be4.handleRange(_0x398d1b, 0);
          }
        });
      });
      _0x14f7b2(".theme-container span.outer").each(function () {
        _0x14f7b2(this).click((_0xd56321) => {
          const _0x4d37d = _0x14f7b2(this).parent();
          _0x480be4.handleRange(_0x4d37d, 3, _0xd56321.offsetX);
        });
      });
      _0x14f7b2(".theme-container .fa-chevron-right").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x3c1d33 = _0x14f7b2(this).parent();
          const _0x2d84ac = _0x14f7b2(_0x3c1d33).attr("type");
          if ("options" === _0x2d84ac) {
            _0x480be4.handleOptions(_0x3c1d33, 1);
          } else if ("range" === _0x2d84ac) {
            _0x480be4.handleRange(_0x3c1d33, 1);
          }
        });
      });
      _0x14f7b2(".theme-close").click(() => this.close());
      _0x14f7b2("#bgImageUrl").blur(() => {
        this.saveTheme("backgroundImage", _0x14f7b2("#bgImageUrl").val().trim());
      });
    }
    static ["toggle"]() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
    static ["close"]() {
      this.isOpened = false;
      this.div.fadeOut(250);
    }
    static ["open"]() {
      this.isOpened = true;
      this.div.fadeIn(250);
    }
    static ["handleOptions"](_0xed1b67, _0x597539) {
      const _0x5aa17f = _0x14f7b2(_0xed1b67).attr("name");
      const _0x5147f6 = _0x14f7b2(_0xed1b67).find("b");
      const _0x44bdf9 = _0x5147f6.length;
      let _0x21024e = _0x44bdf9;
      let _0x1d5d41 = 0;
      for (; _0x21024e--; ) {
        let _0x466967 = _0x5147f6[_0x21024e];
        if ("active" === _0x14f7b2(_0x466967).attr("class")) {
          _0x1d5d41 = _0x21024e;
        }
      }
      if (1 === _0x597539) {
        const _0xafd047 = _0x1d5d41 + 1 < _0x44bdf9 ? _0x1d5d41 + 1 : 0;
        _0x14f7b2(_0x5147f6[_0x1d5d41]).removeAttr("class");
        _0x14f7b2(_0x5147f6[_0xafd047]).attr("class", "active");
        const _0x5fa32 = _0x14f7b2(_0x5147f6[_0xafd047]).attr("value");
        this.saveTheme(_0x5aa17f, _0x5fa32);
      } else {
        if (0 === _0x597539) {
          const _0x5d5dfc = 0 < _0x1d5d41 ? _0x1d5d41 - 1 : _0x44bdf9 - 1;
          _0x14f7b2(_0x5147f6[_0x1d5d41]).removeAttr("class");
          _0x14f7b2(_0x5147f6[_0x5d5dfc]).attr("class", "active");
          const _0x359d61 = _0x14f7b2(_0x5147f6[_0x5d5dfc]).attr("value");
          this.saveTheme(_0x5aa17f, _0x359d61);
        } else {
          if (2 === _0x597539) {
            _0x14f7b2(_0x5147f6[_0x1d5d41]).removeAttr("class");
            let _0x5d6174;
            for (let _0x5cf991 = _0x44bdf9; _0x5cf991--; ) {
              _0x5d6174 = _0x5147f6[_0x5cf991];
              if (_0x14f7b2(_0x5d6174).attr("value") === this[_0x5aa17f]) {
                _0x14f7b2(_0x5d6174).attr("class", "active");
                break;
              }
            }
          }
        }
      }
    }
    static ["handleRange"](_0x200bd4, _0x21746b, _0x5cdbab = 0) {
      const _0xf883e3 = _0x14f7b2(_0x200bd4).attr("name");
      const _0xcdedf8 = _0x14f7b2(_0x200bd4).find("span");
      const _0x35ea55 = _0xcdedf8[0];
      const _0x1dd6bb = _0xcdedf8[1];
      const _0x43cad7 = _0x14f7b2(_0xcdedf8[2]);
      const _0x207e11 = ~~_0x14f7b2(_0x35ea55).attr("min");
      const _0x2a491d = ~~_0x14f7b2(_0x35ea55).attr("max");
      const _0x4d07cd = ~~_0x14f7b2(_0x35ea55).attr("step");
      const _0x4a5bd7 = ~~_0x14f7b2(_0x35ea55).attr("value");
      if (1 === _0x21746b && _0x4a5bd7 + _0x4d07cd <= _0x2a491d) {
        const _0x589000 = _0x4d07cd + _0x4a5bd7;
        _0x14f7b2(_0x35ea55).attr("value", _0x589000);
        _0x14f7b2(_0x1dd6bb).css("width", ~~((100 * (_0x589000 - _0x207e11)) / (_0x2a491d - _0x207e11)) + "px");
        _0x43cad7.text("[" + _0x589000 + "]");
        this.saveTheme(_0xf883e3, ~~_0x589000);
      } else {
        if (0 === _0x21746b && _0x4a5bd7 - _0x4d07cd >= _0x207e11) {
          const _0xdd44a1 = _0x4a5bd7 - _0x4d07cd;
          _0x14f7b2(_0x35ea55).attr("value", _0xdd44a1);
          _0x14f7b2(_0x1dd6bb).css("width", ~~((100 * (_0xdd44a1 - _0x207e11)) / (_0x2a491d - _0x207e11)) + "px");
          _0x43cad7.text("[" + _0xdd44a1 + "]");
          this.saveTheme(_0xf883e3, ~~_0xdd44a1);
        } else {
          if (2 === _0x21746b) {
            const _0xda887a = this[_0xf883e3];
            _0x14f7b2(_0x35ea55).attr("value", _0xda887a);
            _0x14f7b2(_0x1dd6bb).css("width", ~~((100 * (_0xda887a - _0x207e11)) / (_0x2a491d - _0x207e11)) + "px");
            _0x43cad7.text("[" + _0xda887a + "]");
          } else {
            if (3 === _0x21746b) {
              let _0x5cf273 = 0 | ((_0x5cdbab / 100) * (_0x2a491d - _0x207e11));
              _0x5cf273 = (0 | (_0x5cf273 / _0x4d07cd)) * _0x4d07cd;
              const _0x41837e = (100 * ((_0x5cf273 += _0x207e11) - _0x207e11)) / (_0x2a491d - _0x207e11);
              _0x14f7b2(_0x35ea55).attr("value", _0x5cf273);
              _0x14f7b2(_0x1dd6bb).css("width", ~~_0x41837e + "px");
              _0x43cad7.text("[" + _0x5cf273 + "]");
              this.saveTheme(_0xf883e3, ~~_0x5cf273);
            }
          }
        }
      }
    }
    static ["initColorpicker"](_0x5c4eed) {
      const _0x2560ae = _0x14f7b2(_0x5c4eed).find("input");
      const _0x4372e5 = _0x2560ae.attr("id");
      const _0xc279bf = this[_0x4372e5];
      _0x14f7b2(_0x2560ae).val(_0xc279bf);
      const _0x1b8ec5 = !!~~_0x2560ae.attr("opacity");
      _0x14f7b2("#" + _0x4372e5).minicolors({
        opacity: _0x1b8ec5,
        position: "bottom right",
        change: (_0x2e58c9) => {
          this.saveTheme(_0x4372e5, _0x2e58c9);
        },
      });
    }
    static ["saveTheme"](_0x589c1b, _0x33fe69) {
      this[_0x589c1b] = _0x33fe69;
      if ("selectedPreset" === _0x589c1b) {
        this.selectPreset(_0x33fe69);
      } else if ("custom" !== this.selectedPreset) {
        this.selectedPreset = "custom";
        _0x19d5af.set("theme", "selectedPreset", "custom");
        this.setDomValues();
      }
      if ("backgroundColor" === _0x589c1b) {
        this.setBackground(_0x33fe69);
      }
      if ("chatFontSize" === _0x589c1b) {
        this.setChatFontSize(_0x33fe69);
      }
      if ("lbSize" === _0x589c1b) {
        this.setLeaderboard(_0x33fe69);
      }
      if ("minimapSize" === _0x589c1b) {
        this.setMinimap(_0x33fe69);
      }
      if ("cursor" === _0x589c1b) {
        this.setCursor(_0x33fe69);
      }
      if ("massFont" === _0x589c1b) {
        _0x34f3bb.setMassCtxFont();
      }
      if ("nickFont" === _0x589c1b) {
        _0x34f3bb.setNickCtxFont();
      }
      if ("massStrokeColor" === _0x589c1b) {
        _0x34f3bb.massCaches.clear();
      }
      if ("nickStrokeColor" === _0x589c1b) {
        _0x34f3bb.nickCaches.clear();
      }
      if ("massColor" === _0x589c1b) {
        _0x34f3bb.massCaches.clear();
      }
      if ("nickColor" === _0x589c1b) {
        _0x34f3bb.nickCaches.clear();
      }
      _0x19d5af.set("theme", _0x589c1b, _0x33fe69);
    }
    static ["setBackground"](_0x4ffb10) {
      _0x14f7b2("body").css("background", _0x4ffb10);
    }
    static ["setChatFontSize"](_0xb43d48) {
      _0x14f7b2("#notifications").css("font-size", _0xb43d48 + "px");
    }
    static ["setLeaderboard"](_0x48a858) {
      const _0x5136af = _0x48a858 / 100;
      _0x14f7b2("#leaderboard-head").css("font-size", (0 | (24 * _0x5136af)) + "px");
      _0x14f7b2("#leaderboard-positions").css("font-size", (0 | (13 * _0x5136af)) + "px");
    }
    static ["setMinimap"](_0x567cb6) {
      if (_0x5cda9b.initted) {
        _0x5cda9b.size = _0x567cb6;
        _0x5cda9b.canvas.width = _0x567cb6;
        _0x5cda9b.canvas.height = _0x567cb6;
      }
      _0x14f7b2("#minimap-hud, .minimap-grid").css({
        width: _0x567cb6 + "px",
        height: _0x567cb6 + "px",
      });
      _0x14f7b2(".minimap-row").css({
        width: _0x567cb6 + "px",
        height: (0 | (_0x567cb6 / 5)) + "px",
      });
      _0x14f7b2(".minimap-sector").css({
        width: (0 | (_0x567cb6 / 5)) + "px",
        height: (0 | (_0x567cb6 / 5)) + "px",
        "font-size": (0 | ((15 * _0x567cb6) / 200)) + "px",
        "padding-top": (0 | ((11 * _0x567cb6) / 200)) + "px",
      });
      const _0x2b8f4e = _0x14f7b2(".minimap-head");
      _0x2b8f4e.css("bottom", _0x567cb6 + 9 + "px");
      // Stack on top of .minimap-head (which is itself already anchored
      // above #minimap-hud) - measuring its real height instead of
      // guessing keeps this correct regardless of minimap size/theme.
      _0x14f7b2("#server-restart-countdown").css({
        bottom: _0x567cb6 + 9 + _0x2b8f4e.outerHeight() + 4 + "px",
        width: _0x567cb6 + "px",
      });
    }
    static ["setCursor"](_0xef6b4e) {}
    static ["selectPreset"](_0x4da382) {
      const _0x5ae372 = this.presets[_0x4da382];
      if ("custom" !== _0x4da382 && _0x5ae372) {
        for (const _0x4e0263 in _0x5ae372.theme)
          if (_0x5ae372.theme.hasOwnProperty(_0x4e0263) && undefined !== this[_0x4e0263]) {
            this[_0x4e0263] = _0x5ae372.theme[_0x4e0263];
            _0x19d5af.set("theme", _0x4e0263, this[_0x4e0263]);
          }
        this.setDomValues();
        for (const _0x305881 in _0x5ae372.settings)
          if (_0x5ae372.settings.hasOwnProperty(_0x305881) && undefined !== _0x2cc0f3[_0x305881]) {
            _0x2cc0f3[_0x305881] = _0x5ae372.settings[_0x305881];
            _0x19d5af.set("settings", _0x305881, _0x2cc0f3[_0x305881]);
          }
        _0x2cc0f3.setDomValues();
      }
    }
    static ["addPresets"]() {
      const _0x1b5f87 = {
        skinBorder: 0x64,
        lbSize: 0x64,
        minimapSize: 0xc8,
        chatFontSize: 0xe,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x28,
        borderColor: "#fff",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x78,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0xa0,
        massFont: "ubuntu",
        gridWidth: 0x28,
        gridColor: "#1a1a1a",
        gridTextColor: "#1a1a1a",
        gridTextSize: 0x4b0,
        gridTextFont: "ubuntu",
        foodSize: 0x1,
        foodColor: "#ffffff",
        virusColor: "#000",
        virusBorderColor: "#d4d6dd",
        virusBorderWidth: 0xe,
        commanderColor: "#0849d4",
        backgroundColor: "#000",
        indicatorSize: 0x64,
        cursor: 0x7,
      };
      const _0x4d89ea = {
        CellAnimation: 0xa0,
        eatAnimation: "on",
        cellTextAnimation: "on",
        cellMass: "shortened",
        food: "monoColored",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const _0x4def84 = {
        author: "Cyper",
        theme: _0x1b5f87,
        settings: _0x4d89ea,
      };
      const _0x45e5ca = {
        skinBorder: 0x64,
        lbSize: 0x6e,
        minimapSize: 0xc8,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x28,
        borderColor: "#ffffff",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x8c,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0x8c,
        massFont: "ubuntu",
        gridWidth: 0x64,
        gridColor: "#1a1a1a",
        gridTextColor: "#1a1a1a",
        gridTextSize: 0x6a4,
        gridTextFont: "ubuntu",
        foodSize: 0x5,
        foodColor: "#0849d4",
        virusColor: "#808080",
        virusBorderColor: "#9e9e9e",
        virusBorderWidth: 0xa,
        commanderColor: "#0849d4",
        backgroundColor: "#000000",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const _0x351870 = {
        CellAnimation: 0x78,
        eatAnimation: "on",
        cellTextAnimation: "on",
        cellMass: "full",
        food: "monoColored",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const _0x28e9d7 = {
        author: "Acydwarp",
        theme: _0x45e5ca,
        settings: _0x351870,
      };
      const _0x4ccef7 = {
        skinBorder: 0x64,
        lbSize: 0x6e,
        minimapSize: 0xc8,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x3c,
        borderColor: "#ffffff",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x82,
        nickFont: "sans-serif",
        massColor: "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0x82,
        massFont: "sans-serif",
        gridWidth: 0x64,
        gridColor: "#1a1a1a",
        gridTextColor: "#1a1a1a",
        gridTextSize: 0x6a4,
        gridTextFont: "ubuntu",
        foodSize: 0x5,
        foodColor: "#6111ff",
        virusColor: "#808080",
        virusBorderColor: "#9e9e9e",
        virusBorderWidth: 0xa,
        commanderColor: "#0849d4",
        backgroundColor: "#000000",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const _0x4cb220 = {
        CellAnimation: 0x78,
        eatAnimation: "on",
        cellTextAnimation: "off",
        cellMass: "full",
        food: "monoColored",
        bgSectors: "off",
        vanillaGrid: "off",
      };
      const _0x5680ed = {
        author: "Num Jai",
        theme: _0x4ccef7,
        settings: _0x4cb220,
      };
      const _0x2f0677 = {
        skinBorder: 0x64,
        lbSize: 0x64,
        minimapSize: 0xf0,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x5a,
        borderWidth: 0x28,
        borderColor: "#01d9cc",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x78,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0xa0,
        massFont: "ubuntu",
        gridWidth: 0x28,
        gridColor: "#00243e",
        gridTextColor: "#00243e",
        gridTextSize: 0x4b0,
        gridTextFont: "ubuntu",
        foodSize: 0x5,
        foodColor: "#5000ff",
        virusColor: "#002f52",
        virusBorderColor: "#00b9e8",
        virusBorderWidth: 0xe,
        commanderColor: "#0849d4",
        backgroundColor: "#000a11",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const _0x8508de = {
        CellAnimation: 0x8c,
        eatAnimation: "on",
        cellTextAnimation: "on",
        cellMass: "shortened",
        food: "monoColored",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const _0x5e84f4 = {
        author: "Szymy",
        theme: _0x2f0677,
        settings: _0x8508de,
      };
      const _0x3865bb = {
        skinBorder: 0x64,
        lbSize: 0x82,
        minimapSize: 0xc8,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0xa,
        borderColor: "#116111",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x64,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0x64,
        massFont: "ubuntu",
        gridWidth: 0xa,
        gridColor: "#333333",
        gridTextColor: "#333333",
        gridTextSize: 0x6a4,
        gridTextFont: "ubuntu",
        foodSize: 0x1,
        foodColor: "#555",
        virusColor: "#6fff00",
        virusBorderColor: "#55b304",
        virusBorderWidth: 0xe,
        commanderColor: "#00fff7",
        backgroundColor: "#000000",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const _0xa9ef03 = {
        CellAnimation: 0x78,
        eatAnimation: "on",
        cellTextAnimation: "on",
        cellMass: "full",
        food: "rainbow",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const _0xf48ba = {
        author: "DaChong",
        theme: _0x3865bb,
        settings: _0xa9ef03,
      };
      const _0x5ebeed = {
        skinBorder: 0x64,
        lbSize: 0x64,
        minimapSize: 0xc8,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0xa,
        borderColor: "#333333",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x6e,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0x6e,
        massFont: "ubuntu",
        gridWidth: 0xa,
        gridColor: "#333333",
        gridTextColor: "#444444",
        gridTextSize: 0x4b0,
        gridTextFont: "ubuntu",
        foodSize: 0x1,
        foodColor: "#4b6efa",
        virusColor: "#6fff00",
        virusBorderColor: "#55b304",
        virusBorderWidth: 0xe,
        commanderColor: "#00fff7",
        backgroundColor: "#111",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const _0x59aee0 = {
        CellAnimation: 0x78,
        eatAnimation: "on",
        cellTextAnimation: "stepped",
        cellMass: "shortened",
        food: "monoColored",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const _0x4e79f3 = {
        author: "KSCC",
        theme: _0x5ebeed,
        settings: _0x59aee0,
      };
      const _0x1bb62a = {
        skinBorder: 0x64,
        lbSize: 0x64,
        minimapSize: 0xc8,
        chatFontSize: 0xe,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x14,
        borderColor: "#666666",
        team1color: "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x6e,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#444",
        cellMassSize: 0x8c,
        massFont: "oswald",
        gridWidth: 0x64,
        gridColor: "#222222",
        gridTextColor: "#222222",
        gridTextSize: 0x578,
        gridTextFont: "sans-serif",
        foodSize: 0x1,
        foodColor: "#c9d3f5",
        virusColor: "#e0e0e0",
        virusBorderColor: "#9c9c9c",
        virusBorderWidth: 0xa,
        commanderColor: "#ffffff",
        backgroundColor: "#000000",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const _0x66c0ae = {
        CellAnimation: 0x78,
        eatAnimation: "on",
        cellTextAnimation: "on",
        cellMass: "full",
        food: "monoColored",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const _0x129ce6 = {
        author: "Eric",
        theme: _0x1bb62a,
        settings: _0x66c0ae,
      };
      const _0x375db3 = {
        skinBorder: 0x5a,
        lbSize: 0x64,
        minimapSize: 0xb4,
        chatFontSize: 0xe,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x28,
        borderColor: "#f5d25f",
        team1color: "#aeaeae",
        team2color: "#ff006f",
        nickColor: "#fff",
        nickStrokeColor: "#000000",
        cellNickSize: 0x6e,
        nickFont: "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#000000",
        cellMassSize: 0x78,
        massFont: "ubuntu",
        gridWidth: 0xa,
        gridColor: "#fa676c",
        gridTextColor: "#333333",
        gridTextSize: 0x514,
        gridTextFont: "oswald",
        foodSize: 0x1,
        foodColor: "#555555",
        virusColor: "#7a4ba3",
        virusBorderColor: "#ead2fa",
        virusBorderWidth: 0xe,
        commanderColor: "#ff006f",
        backgroundColor: "#222222",
        indicatorSize: 0x64,
        cursor: 0x1,
      };
      const _0x32fa65 = {
        CellAnimation: 0x8c,
        eatAnimation: "on",
        cellTextAnimation: "on",
        cellMass: "shortened",
        food: "monoColored",
        bgSectors: "normal",
        vanillaGrid: "off",
      };
      const _0x7d4929 = {
        author: "2coolife",
        theme: _0x375db3,
        settings: _0x32fa65,
      };
      const _0x1ff161 = {
        Multibox: _0x4def84,
        "Agarplus v2": _0x28e9d7,
        HKG: _0x5680ed,
        "Ogario v4": _0x5e84f4,
        Yin: _0xf48ba,
        VNDOT: _0x4e79f3,
        OZYDOT: _0x129ce6,
        Pastels: _0x7d4929,
      };
      this.presets = _0x1ff161;
    }
  }
  class _0x40f48a {
    static ["init"]() {
      this.div = _0x14f7b2("#notifications");
      this.duration = 10000;
      this.animDuration = 500;
      this.iconChat = '<i class="fa fa-comment"></i>';
      this.iconAlert = '<i class="fa fa-exclamation-circle"></i>';
      this.iconBell = '<i class="fa fa-bell"></i>';
      this.warningIcon = '<i class="fa-solid fa-triangle-exclamation"></i>';
      this.chatroomdiv = _0x14f7b2("#chatroom");
      this.emojiPath = "./";
      this.emojis = {};
      this.displayEmojis();
    }
    static ["displayEmojis"]() {
      const _0x1b6e7b = _0x14f7b2("#emojiContainer");
      for (const _0x2d8c15 in this.emojis) {
        const _0x2d208b = _0x14f7b2('<img src="' + (this.emojiPath + this.emojis[_0x2d8c15]) + '" class="emojiPreview">');
        _0x2d208b.click(() => {
          const _0x5172b4 = _0x14f7b2("#message");
          const _0x2000a8 = _0x5172b4.val();
          _0x5172b4.val(_0x2000a8 + " " + _0x2d8c15);
          _0x59ca82.input.focus();
        });
        _0x1b6e7b.append(_0x2d208b);
      }
    }
    static ["normal"](_0x21b406, _0x579e04, _0x4a2f19 = "system") {
      this.chatroom(_0x21b406, _0x579e04, this.iconChat, _0x4a2f19);
      if ("chatroom" !== _0x2cc0f3.chatType) {
        const _0x4e27c7 =
          '<div><div class="normal">' +
          this.iconChat +
          '<span class="nick">' +
          _0x21b406 +
          '</span><span class="message">' +
          this.putEmojis(this.cleanMessage(_0x579e04)) +
          "</span></div></div>";
        this.append(_0x4e27c7);
      }
    }
    static ["command"](_0x5efb37, _0x3be8a3, _0x4a2f19 = "system") {
      this.chatroom(_0x5efb37, _0x3be8a3, this.iconAlert, _0x4a2f19);
      if ("chatroom" !== _0x2cc0f3.chatType) {
        const _0x8b1c84 =
          '<div><div class="command">' +
          this.iconAlert +
          '<span class="nick">' +
          _0x5efb37 +
          '</span><span class="message">' +
          this.cleanMessage(_0x3be8a3) +
          "</span></div></div>";
        this.append(_0x8b1c84);
      }
    }
    static ["warn"](_0x19cd28, _0x1397c0, _0x4a2f19 = "system") {
      this.chatroom(_0x19cd28, _0x1397c0, this.warningIcon, _0x4a2f19);
      if ("chatroom" !== _0x2cc0f3.chatType) {
        const _0x2feb56 =
          '<div><div class="alert">' +
          this.warningIcon +
          '<span class="nick">' +
          _0x19cd28 +
          '</span><span class="message">' +
          this.cleanMessage(_0x1397c0) +
          "</span></div></div>";
        this.append(_0x2feb56);
      }
    }
    static ["alert"](_0x406bca, _0x2b385c, _0x4a2f19 = "system") {
      const _0x1e2f3a = this.chatroom(_0x406bca, _0x2b385c, this.iconBell, _0x4a2f19);
      if ("chatroom" !== _0x2cc0f3.chatType) {
        const _0x164569 =
          '<div><div class="alert" style="direction: ltr;">' +
          this.iconBell +
          '<span class="nick">' +
          _0x406bca +
          '</span><span class="message">' +
          this.cleanMessage(_0x2b385c) +
          "</span></div></div>";
        this.append(_0x164569);
      }
      return _0x1e2f3a;
    }
    static ["gameChat"](_0x1a2b3c, _0x4d5e6f, _0x7a8b9c) {
      // Build up a nick->id memory from every attributed message we see -
      // the invite notification itself often arrives as a system-style
      // message (id1 <= 0, not attributed to the inviter), and the inviter
      // is frequently not a currently-visible nearby cell either, so this
      // is the only reliable way to later resolve who to reply to.
      _0x7c92e1.rememberNick(_0x1a2b3c, _0x7a8b9c);
      if (_0x7c92e1.isInviteMessage(_0x4d5e6f) && !_0x7c92e1.isOwnInviteEcho(_0x4d5e6f)) {
        this.partyInvite(_0x1a2b3c, _0x4d5e6f, _0x7a8b9c);
        return;
      }
      const _0x9d3e5c = this.alert(_0x1a2b3c, _0x4d5e6f, "game");
      if (0 < _0x7a8b9c && _0x9d3e5c) {
        _0x9d3e5c.find(".nick").on("contextmenu", (_0x5f6a7b) => {
          _0x5f6a7b.preventDefault();
          _0x7c92e1.openMenu({ ownerId: _0x7a8b9c, nick: _0x1a2b3c, colorHex: "#fff" }, _0x5f6a7b.pageX, _0x5f6a7b.pageY);
        });
      }
    }
    static ["partyInvite"](_0x1a2b3c, _0x4d5e6f, _0x7a8b9c) {
      // Confirmed format: message is literally `"<nick>" has invited you to
      // their party.` (with an embedded partyCode(...) button - see
      // extractPartyCode()) and the packet's own nick field is just the
      // generic system sender label ("Console"), not the real inviter -
      // the real name only ever shows up quoted inside the message text.
      const _0x6d7e8f = _0x7c92e1.extractPartyCode(_0x4d5e6f);
      let _0x9c1d2e = null;
      // Grab the first quoted substring from the VISIBLE text only - the
      // message also embeds an onclick="partyCode('...')" button (itself
      // double-quoted), which would otherwise be picked up instead of the
      // name whenever the button markup comes before the name in the
      // string. Stripping tags first (replaced with a space, so words
      // either side don't get glued together) avoids that entirely.
      const _0x3f9c1e = _0x4d5e6f.replace(/<[^>]*>/g, " ");
      const _0x8a1b2c = _0x3f9c1e.match(/"([^"]+)"/);
      if (_0x8a1b2c) {
        _0x9c1d2e = _0x7c92e1.stripBidi(_0x8a1b2c[1]);
      } else if (_0x1a2b3c && "Console" !== _0x1a2b3c) {
        _0x9c1d2e = _0x1a2b3c;
      } else {
        const _0x5b6c7d = _0x3f9c1e.match(/([^\s:"]+)\s+(?:has\s+)?invit/i);
        if (_0x5b6c7d) {
          _0x9c1d2e = _0x5b6c7d[1];
        }
      }
      let _0x2e4f6a = _0x7a8b9c;
      if (0 >= _0x2e4f6a && _0x9c1d2e) {
        _0x2e4f6a = _0x7c92e1.resolveIdByNick(_0x9c1d2e);
      }
      const _0x2c4d6e = new Date();
      const _0x3e5f7a = _0x2c4d6e.getHours() + ":" + _0x2c4d6e.getMinutes();
      const _0x8b9c1d = _0x14f7b2(
        '<div class="chatroom-row party-invite-row" data-channel="game"><span class="chattime">' +
          _0x3e5f7a +
          "</span> " +
          this.iconBell +
          ' <span class="nick">' +
          this.cleanMessage(_0x9c1d2e || "Someone") +
          '</span> <span class="message">invited you to their party</span> ' +
          '<button class="party-invite-accept">Accept</button>' +
          '<button class="party-invite-reject">Reject</button>' +
          "</div>",
      );
      _0x8b9c1d.find(".party-invite-accept").click(() => {
        _0x7c92e1.acceptInvite(_0x6d7e8f, _0x2e4f6a);
        _0x8b9c1d.remove();
      });
      _0x8b9c1d.find(".party-invite-reject").click(() => {
        _0x8b9c1d.remove();
      });
      this.chatroomdiv.append(_0x8b9c1d);
      this.chatroomdiv.scrollTop(this.chatroomdiv[0].scrollHeight);
    }
    static ["append"](_0x270fa2) {
      const _0x3f5e4f = _0x14f7b2(_0x270fa2);
      _0x3f5e4f.slideUp(0);
      _0x3f5e4f.appendTo(this.div);
      _0x3f5e4f.slideDown(this.animDuration);
      setTimeout(() => {
        _0x3f5e4f.slideUp(this.animDuration, () => {
          _0x3f5e4f.remove();
        });
      }, this.duration);
    }
    static ["cleanMessage"](_0x41baf4) {
      return _0x41baf4;
    }
    static ["putEmojis"](_0x4fd165) {
      for (const _0x3d84fc in this.emojis) {
        const _0x1fac9a = new RegExp(_0x3d84fc, "g");
        _0x4fd165 = _0x4fd165.replace(_0x1fac9a, '<img src="' + (this.emojiPath + this.emojis[_0x3d84fc]) + '">');
      }
      return _0x4fd165;
    }
    static ["chatroom"](_0x577c0f, _0x3e358a, _0x5d23c7, _0x4a2f19 = "system") {
      const _0x9dd250 = new Date();
      const _0x3fd098 = _0x9dd250.getHours() + ":" + _0x9dd250.getMinutes();
      const _0x4f7a2b = _0x14f7b2(
        '<div class="chatroom-row" data-channel="' +
          _0x4a2f19 +
          '"><span class="chattime">' +
          _0x3fd098 +
          "</span> " +
          _0x5d23c7 +
          ' <span class="nick">' +
          _0x577c0f +
          '</span> <span class="message">' +
          this.putEmojis(this.cleanMessage(_0x3e358a)) +
          "</span></div>",
      );
      this.chatroomdiv.append(_0x4f7a2b);
      this.chatroomdiv.scrollTop(this.chatroomdiv[0].scrollHeight);
      return _0x4f7a2b;
    }
  }
  class _0xa916b {
    static ["init"]() {
      this.list = new Set();
      this.div = _0x14f7b2("#leaderboard-positions")[0];
      this.teamLB = _0x14f7b2("#leaderboard-chart");
      this.teamLBvisible = false;
      this.barsCss = _0x24f9ab.createElement("style");
      _0x24f9ab.head.append(this.barsCss);
    }
    static ["add"](_0x163eb9, _0x45d22b, _0x16dc97, _0x1f5c26, _0x5e4055, _0x3c4d5e) {
      const _0x215fe4 = {
        nick: _0x163eb9,
        position: _0x45d22b,
        isSelf: _0x16dc97,
        account: _0x5e4055,
        isFriend: _0x1f5c26,
        // The real leaderboard packet (handleLeaderboardFFA in 3rb.js,
        // verified by decoding it directly) never sends a score - only
        // rank/id/name, and the native UI template it renders
        // ("%rank%"/"%name%" only) confirms the game itself never shows
        // one either. "id" here is that same field, confirmed (via
        // `game.pID == entry.id` in 3rb.js's own leaderboard renderer) to
        // be the same id-space as cell ownerId/pID used everywhere else
        // in the protocol - see scoreForId() below, which cross-references
        // it against currently-tracked cells to approximate a real score
        // rather than inventing one. Undefined for the non-FFA leaderboard
        // variant (getLeaderboard() in _0x245b10), which carries no id at
        // all - there's nothing to cross-reference for those entries.
        id: _0x3c4d5e,
      };
      this.list.add(_0x215fe4);
    }
    // Sums the static (non-animated, i.e. authoritative-as-of-last-packet)
    // mass of every currently-tracked cell owned by this id. Only accurate
    // for players whose cells are actually within render/network range
    // right now - same limitation the real client has, since neither of us
    // is ever told anything about cells we can't see. Returns undefined
    // (render nothing, not "0") when no matching cells are tracked at all.
    static ["scoreForId"](_0x5d6e7f) {
      let _0x6e7f80 = 0;
      let _0x7f8091 = false;
      for (const _0x8091a2 of _0x14d4a3.sortedCells) {
        if (_0x8091a2.ownerId === _0x5d6e7f) {
          _0x7f8091 = true;
          _0x6e7f80 += _0x8091a2.staticMass;
        }
      }
      return _0x7f8091 ? _0x6e7f80 : undefined;
    }
    // Same truncate-to-1-decimal "shortened mass" convention already used
    // for in-world cell mass labels (see _0x386cbc around cellMass
    // "shortened"), extended with an "m" tier since a total leaderboard
    // score can run well past what a single cell's mass ever reaches.
    static ["formatScore"](_0x4d5e6f) {
      return 999999 < _0x4d5e6f
        ? (0 | (_0x4d5e6f / 100000)) / 10 + "m"
        : 999 < _0x4d5e6f
          ? (0 | (_0x4d5e6f / 100)) / 10 + "k"
          : "" + _0x4d5e6f;
    }
    static ["team"](_0x1a4e06, _0x23d577, _0x78ac64) {
      if (!this.teamLBvisible) {
        this.teamLB.show();
        this.div.innerHTML = "";
        this.teamLBvisible = true;
      }
      this.barsCss.innerText =
        ".chart-bar.red { width: " +
        (0 | (150 * _0x1a4e06)) +
        "px } .chart-bar.green { width: " +
        (0 | (150 * _0x23d577)) +
        "px } .chart-bar.blue { width: " +
        (0 | (150 * _0x78ac64)) +
        "px }";
    }
    static ["clear"]() {
      this.list.clear();
    }
    static ["update"]() {
      if (this.teamLBvisible) {
        this.teamLB.hide();
        this.teamLBvisible = false;
      }
      let _0x25ab99 = "";
      for (const _0x5341c7 of this.list.values()) {
        const _0x2c3d4e = undefined !== _0x5341c7.id ? this.scoreForId(_0x5341c7.id) : undefined;
        const _0x4a5b6c = undefined !== _0x2c3d4e ? ' <span class="leaderboard-score">(' + this.formatScore(_0x2c3d4e) + ")</span>" : "";
        _0x25ab99 +=
          '<span style="direction: rtl;"><strong>' + _0x5341c7.position + "  </strong>" + this.cleanNick(_0x5341c7.nick) + _0x4a5b6c + "<span>";
      }
      this.div.innerHTML = _0x25ab99;
    }
    static ["cleanNick"](_0x23f18d) {
      return _0x23f18d.replace(/</g, "(").replace(/>/g, ")").substring(0, 15);
    }
  }
  class _0x5cda9b {
    static ["init"]() {
      this.initted = true;
      this.canvas = _0x14f7b2("#minimap-nodes")[0];
      this.size = _0x480be4.minimapSize;
      this.canvas.width = this.size;
      this.canvas.height = this.size;
      this.pi2 = 2 * Math.PI;
      this.ctx = this.canvas.getContext("2d");
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "bottom";
      this.ctx.font = "500 12px ubuntu";
      this.ctx.lineWidth = 2;
      this.selector = 0;
    }
    static ["run"]() {
      const _0x46ff1c = this.ctx;
      const _0x145776 = this.size / _0x996564.edge;
      const _0x3f151d = _0xddb6d6.viewBounds;
      _0x46ff1c.clearRect(0, 0, this.size, this.size);
      _0x46ff1c.fillStyle = "rgba(180, 57, 69, 0.4)";
      _0x46ff1c.fillRect(
        0 | ((_0x3f151d.left - _0x996564.offset.x + 8000) * _0x145776),
        0 | ((_0x3f151d.top - _0x996564.offset.y + 8000) * _0x145776),
        0 | ((_0x3f151d.right - _0x3f151d.left) * _0x145776),
        0 | ((_0x3f151d.bottom - _0x3f151d.top) * _0x145776),
      );
      if (_0x12ac51.biggestIsOn && (_0x90a1a7.isAlive || !_0xddb6d6.isSpectating || _0xddb6d6.freeSpectate)) {
        _0x12ac51.biggest.animate();
        const _0x10ec1e = _0x12ac51.biggest.mapX;
        const _0x28b9b8 = _0x12ac51.biggest.mapY;
        _0x46ff1c.beginPath();
        _0x46ff1c.arc(_0x10ec1e, _0x28b9b8, 7, 0, this.pi2, false);
        _0x46ff1c.closePath();
        _0x46ff1c.fillStyle = "#fff";
        _0x46ff1c.fill();
        _0x46ff1c.stroke();
        _0x46ff1c.fillText(_0x59f59a.current.huds.num1position || "#1 position", _0x10ec1e, _0x28b9b8 - 8);
      }
      _0x46ff1c.strokeStyle = "#666";
      const _0x524787 = (8000 - _0x996564.offset.x + _0x90a1a7.deathLocation.x) * _0x145776;
      const _0x31e116 = (8000 - _0x996564.offset.y + _0x90a1a7.deathLocation.y) * _0x145776;
      _0x46ff1c.beginPath();
      _0x46ff1c.moveTo(_0x524787 - 4, _0x31e116 - 4);
      _0x46ff1c.lineTo(_0x524787 + 4, _0x31e116 + 4);
      _0x46ff1c.moveTo(_0x524787 - 4, _0x31e116 + 4);
      _0x46ff1c.lineTo(_0x524787 + 4, _0x31e116 - 4);
      _0x46ff1c.closePath();
      _0x46ff1c.stroke();
      _0x46ff1c.strokeStyle = "rgba(51, 51, 51, 0.5)";
      const _0x3a9e37 = (8000 - _0x996564.offset.x + _0xddb6d6.x) * _0x145776;
      const _0x192baa = (8000 - _0x996564.offset.y + _0xddb6d6.y) * _0x145776;
      const _0x26be95 = _0x90a1a7.isAlive ? 4 : 7;
      _0x46ff1c.beginPath();
      _0x46ff1c.arc(_0x3a9e37, _0x192baa, _0x26be95, 0, this.pi2, false);
      _0x46ff1c.closePath();
      _0x46ff1c.fillStyle = "#fff";
      _0x46ff1c.fill();
      _0x46ff1c.stroke();
      if (_0x12ac51.isSpectator) {
        this.teamMinimap();
      } else {
        this.normalMinimap();
      }
    }
    static ["teamMinimap"]() {
      const _0x5db847 = this.ctx;
      _0x5db847.textAlign = "center";
      _0x5db847.textBaseline = "bottom";
      for (const _0x3f6db4 of _0x12ac51.teamPlayers.values())
        if (_0x3f6db4.isAlive && (!this.selector || this.selector === _0x3f6db4.team) && !_0x7c92e1.hasNick(_0x3f6db4.nick)) {
          _0x3f6db4.animate();
          const _0x37e58c = _0x3f6db4.mapX;
          const _0x5936f8 = _0x3f6db4.mapY;
          _0x5db847.beginPath();
          _0x5db847.arc(_0x37e58c, _0x5936f8, 5, 0, this.pi2, false);
          _0x5db847.closePath();
          _0x5db847.fillStyle = "#fff";
          if (0 < _0x3f6db4.nick.length) {
            _0x5db847.fillText(_0x3f6db4.nick, _0x37e58c, _0x5936f8 - 6);
          }
          _0x5db847.fillStyle = 1 === _0x3f6db4.team ? _0x480be4.team1color : _0x480be4.team2color;
          _0x5db847.fill();
          _0x5db847.stroke();
        }
      this.partyMinimap();
    }
    static ["normalMinimap"]() {
      const _0x121e2c = this.ctx;
      _0x121e2c.textAlign = "center";
      _0x121e2c.textBaseline = "bottom";
      _0x121e2c.beginPath();
      for (const _0x477434 of _0x12ac51.teamPlayers.values())
        if (_0x477434.isAlive && !_0x7c92e1.hasNick(_0x477434.nick)) {
          _0x477434.animate();
          const _0x15a5b7 = _0x477434.mapX;
          const _0x119d6b = _0x477434.mapY;
          _0x121e2c.moveTo(_0x15a5b7 + 5, _0x119d6b);
          _0x121e2c.arc(_0x15a5b7, _0x119d6b, 5, 0, this.pi2, false);
          if (0 < _0x477434.nick.length) {
            _0x121e2c.fillText(_0x477434.nick, _0x15a5b7, _0x119d6b - 6);
          }
        }
      _0x121e2c.closePath();
      _0x121e2c.fillStyle = "#555";
      _0x121e2c.fill();
      this.partyMinimap();
    }
    static ["partyMinimap"]() {
      // Native party members (see _0x7c92e1) are drawn separately from
      // teamPlayers because each one keeps its own real in-game color
      // (sent by the server), unlike the team1/team2-color multibox dots
      // above - they can't share a single batched fill() call.
      const _0x2a3b4c = this.ctx;
      _0x2a3b4c.textAlign = "center";
      _0x2a3b4c.textBaseline = "bottom";
      for (const _0x5d6e7f of _0x7c92e1.members.values()) {
        _0x5d6e7f.animate();
        const _0x8a9b1c = _0x5d6e7f.mapX;
        const _0x2c3d4e = _0x5d6e7f.mapY;
        _0x2a3b4c.beginPath();
        _0x2a3b4c.arc(_0x8a9b1c, _0x2c3d4e, 5, 0, this.pi2, false);
        _0x2a3b4c.closePath();
        _0x2a3b4c.fillStyle = "#fff";
        if (0 < _0x5d6e7f.nick.length) {
          _0x2a3b4c.fillText(_0x5d6e7f.nick, _0x8a9b1c, _0x2c3d4e - 6);
        }
        _0x2a3b4c.fillStyle = _0x5d6e7f.colorHex;
        _0x2a3b4c.fill();
        _0x2a3b4c.stroke();
      }
    }
  }
  class _0x2a0c5c {
    static ["init"]() {
      this.lastUpdateTime = 0;
      this.totalmass = 0;
      this.alive = 0;
      this.spectate = 0;
      this.html = "";
      this.temporaryArray = [];
      this.div = {
        positions: _0x14f7b2("#teamlist-positions")[0],
        alive: _0x14f7b2("#teamlist-alive span")[0],
        spectate: _0x14f7b2("#teamlist-spectate span")[0],
        totalmass: _0x14f7b2("#teamlist-totalmass span")[0],
      };
      this.divTeam1 = {
        alive: _0x14f7b2("#teamlist-alive1 span")[0],
        spectate: _0x14f7b2("#teamlist-spectate1 span")[0],
        totalmass: _0x14f7b2("#teamlist-totalmass1 span")[0],
      };
      this.divTeam2 = {
        alive: _0x14f7b2("#teamlist-alive2 span")[0],
        spectate: _0x14f7b2("#teamlist-spectate2 span")[0],
        totalmass: _0x14f7b2("#teamlist-totalmass2 span")[0],
      };
      this.teamVsBar = _0x14f7b2(".team-vs-bar-inner");
      this.teamVsBarStyle = _0x24f9ab.getElementsByClassName("team-vs-bar")[0].style;
      this.teamVsBarInnerStyle = _0x24f9ab.getElementsByClassName("team-vs-bar-inner")[0].style;
    }
    static ["update"]() {
      if (1000 < _0xb45f1b.time - this.lastUpdateTime) {
        this.lastUpdateTime = _0xb45f1b.time;
        if (_0x12ac51.isSpectator) {
          this.updateVs();
        }
        this.generateList();
        this.div.positions.innerHTML = this.html;
        this.div.alive.innerHTML = this.alive;
        this.div.spectate.innerHTML = this.spectate;
        this.div.totalmass.innerHTML = this.totalmass;
        this.reset();
      }
    }
    static ["generateList"]() {
      _0x12ac51.teamPlayers.forEach((_0x152fdf) => {
        if (_0x7c92e1.hasNick(_0x152fdf.nick)) {
          return;
        }
        if (_0x152fdf.isAlive) {
          this.totalmass += _0x152fdf.mass;
          this.temporaryArray.push(_0x152fdf);
          this.alive++;
        } else {
          this.spectate++;
        }
      });
      _0x7c92e1.members.forEach((_0x394a1b) => {
        if (_0x394a1b.isAlive) {
          this.totalmass += _0x394a1b.mass;
          this.temporaryArray.push(_0x394a1b);
          this.alive++;
        } else {
          this.spectate++;
        }
      });
      this.temporaryArray.sort((_0x510cd4, _0x4fd9f1) => _0x4fd9f1.mass - _0x510cd4.mass);
      this.temporaryArray.splice(5);
      if (!_0x12ac51.isSpectator) {
        if (_0x90a1a7.isAlive) {
          this.totalmass += _0x90a1a7.mass;
          this.temporaryArray.push(_0x90a1a7);
          this.alive++;
        } else {
          this.spectate++;
        }
      }
      for (let _0x1f17de = 0; _0x1f17de < this.temporaryArray.length; _0x1f17de++) {
        const _0x5dca94 = this.temporaryArray[_0x1f17de];
        this.addPlayer(_0x5dca94);
      }
    }
    static ["addPlayer"](_0x4d2819) {
      const _0x240f85 = (100 * _0x4d2819.mass) / this.totalmass;
      this.html +=
        '<div class="tl-player"><div class="tl-player-mass">' +
        _0x4d2819.mass +
        '</div><div class="tl-player-nick">' +
        this.cleanNick(_0x4d2819.nick) +
        '</div><div class="tl-player-massbar"><div class="tl-player-massbar-inner" style="width: ' +
        (0 | _0x240f85) +
        '%;"></div></div></div>';
    }
    static ["updateVs"]() {
      const _0x141b95 = _0x12ac51.teamData;
      let _0x24dbe5 = (_0x141b95[1].totalMass / (_0x141b95[1].totalMass + _0x141b95[2].totalMass)) * 100;
      if (0 === _0x141b95[1].totalMass && 0 === _0x141b95[2].totalMass) {
        _0x24dbe5 = 50;
      }
      this.teamVsBar.css("width", (0 | _0x24dbe5) + "%");
      this.divTeam1.alive.innerHTML = _0x141b95[1].alive;
      this.divTeam1.spectate.innerHTML = _0x141b95[1].spectate;
      this.divTeam1.totalmass.innerHTML = _0x141b95[1].totalMass;
      this.divTeam2.alive.innerHTML = _0x141b95[2].alive;
      this.divTeam2.spectate.innerHTML = _0x141b95[2].spectate;
      this.divTeam2.totalmass.innerHTML = _0x141b95[2].totalMass;
      this.teamVsBarStyle.background = _0x480be4.team2color;
      this.teamVsBarInnerStyle.background = _0x480be4.team1color;
    }
    static ["reset"]() {
      this.totalmass = 0;
      this.alive = 0;
      this.spectate = 0;
      this.temporaryArray = [];
      this.html = "";
    }
    static ["cleanNick"](_0x2cbbe4) {
      return _0x2cbbe4.replace(/</g, "(").replace(/>/g, ")");
    }
  }
  class _0x59ca82 {
    static ["init"]() {
      this.containerType = null;
      this.container = _0x14f7b2("#message-hud");
      this.input = _0x14f7b2("#message");
      this.isOpened = false;
      this.isFocused = false;
      this.modeButtons = _0x14f7b2("#chat-mode-switch .chat-mode-btn");
      this.input.blur(() => {
        this.isFocused = false;
      });
      this.input.focus(() => {
        this.isFocused = true;
      });
      // Shift+Enter sends while typing (works for whichever mode - public
      // or private - is currently open), instead of having to reach back
      // for the private-chat hotkey again mid-message. enter() reads the
      // active mode straight off the input's own "type" attribute once
      // isOpened+isFocused are both already true, so the argument here is
      // never actually used - it only matters for the "not open yet" branch.
      // stopPropagation() is required, not optional: _0x22a8df.getKey()
      // never checks shiftKey, so plain Enter and Shift+Enter both produce
      // the exact same "ENTER" string - which is this game's default
      // chatKey binding. Without stopping it here, this same keydown would
      // also bubble up to that global document-level hotkey handler right
      // after send() has already closed the box, and re-open it again in
      // public mode.
      this.input.keydown((_0x2e0f1a) => {
        // keyCode/which, not .key: matches _0x22a8df.getKey()'s own
        // convention elsewhere in this file - whatever jQuery version this
        // bundles doesn't reliably normalize .key for keyboard events, so
        // checking it here was silently never matching.
        const _0x3f4a5b = _0x2e0f1a.keyCode || _0x2e0f1a.which;
        if (_0x2e0f1a.shiftKey && 13 === _0x3f4a5b) {
          _0x2e0f1a.preventDefault();
          _0x2e0f1a.stopPropagation();
          this.enter(this.containerType);
        }
      });
      this.modeButtons.click((_0x4d6f3a) => {
        const _0x1a2f8e = +_0x14f7b2(_0x4d6f3a.currentTarget).attr("data-mode");
        this.open(_0x1a2f8e);
      });
      this.chatroom = _0x14f7b2("#chatroom");
      this.chatroom.perfectScrollbar();
      this.updateModeUI(1);
    }
    static ["updateModeUI"](_0x3f9a71) {
      this.modeButtons.each((_0x2e8b1c, _0x5c7d94) => {
        const _0x1b6ca2 = _0x14f7b2(_0x5c7d94);
        _0x1b6ca2.toggleClass("active", +_0x1b6ca2.attr("data-mode") === +_0x3f9a71);
      });
      this.container.toggleClass("mode-private", 2 == _0x3f9a71);
      this.input.attr("placeholder", 2 == _0x3f9a71 ? "Private chat message (teammates only)..." : "Enter chat message...");
      // filter the chatroom log itself so each mode only shows its own
      // messages ("system" rows - connection/captcha/etc notices - stay
      // visible in both, see the CSS rules for #chatroom.chat-view-*).
      this.chatroom.toggleClass("chat-view-game", 1 == _0x3f9a71);
      this.chatroom.toggleClass("chat-view-private", 2 == _0x3f9a71);
    }
    static ["open"](_0x2cf121) {
      this.container.show();
      this.isOpened = true;
      this.input.focus();
      this.input.attr("type", _0x2cf121);
      this.updateModeUI(_0x2cf121);
    }
    static ["enter"](_0x2cf121) {
      if (this.isOpened) {
        if (this.isFocused) {
          this.containerType = this.input.attr("type");
          let _0x5ba76e = this.input.val();
          if (0 < _0x5ba76e.length && 100 < _0x5ba76e.length) {
            _0x5ba76e = _0x5ba76e.substring(0, 100);
          }
          if (0 < _0x5ba76e.length) {
            if (1 == this.containerType) {
              _0x302a2c.chat(_0x5ba76e);
            } else if (2 == this.containerType) {
              _0x2d5cce.chat(1, _0x5ba76e);
            }
          }
          this.input.val("");
          this.input.blur();
          this.container.hide();
          this.isOpened = false;
        } else {
          this.input.focus();
        }
      } else {
        this.open(_0x2cf121);
      }
    }
  }
  class _0x9547b4 {
    static ["init"]() {
      this.fpsCount = 0;
      this.lastUpdateTime = 0;
      this.div = _0x14f7b2("#stats-hud")[0];
      this.lockClosed = '<i class="fa fa-lock"></i>';
      this.lockOpened = '<i class="fa fa-unlock-alt"></i>';
      this.speedometer = '<i class="fa fa-tachometer"></i>';
      this.iconPause = '<i class="fa fa-pause-circle"></i>';
    }
    static ["update"]() {
      this.fpsCount++;
      if (1000 < _0xb45f1b.time - this.lastUpdateTime) {
        this.lastUpdateTime = _0xb45f1b.time;
        this.refresh();
      }
    }
    static ["refresh"]() {
      let _0x5be063 = "";
      _0x5be063 += this.fps;
      if (_0x90a1a7.isAlive) {
        _0x5be063 += this.score + this.n64 + this.STE + this.speed;
      }
      _0x5be063 += this.PIO + this.paused + this.zoomLock;
      this.div.innerHTML = _0x5be063;
    }
    static get ["zoomLock"]() {
      return "on" === _0x2cc0f3.autoZoom ? this.lockClosed : this.lockOpened;
    }
    static get ["score"]() {
      return (_0x59f59a.current.huds.score || "Score") + ": " + _0x90a1a7.score + "   ";
    }
    static get ["n64"]() {
      return "[" + _0x90a1a7.pieceCount + "/64] ";
    }
    static get ["STE"]() {
      const _0x275cde = _0x90a1a7.biggestPieceMass;
      return 35 < _0x275cde ? "STE: " + (0 | (_0x275cde * (1000 > _0x275cde ? 0.35 : 0.38))) + "   " : "";
    }
    static get ["speed"]() {
      _0x90a1a7.animSpeed += (_0x90a1a7.speed - _0x90a1a7.animSpeed) / 3;
      _0x90a1a7.speed = 0;
      return this.speedometer + " " + (0 | _0x90a1a7.animSpeed) + "px/s   ";
    }
    static get ["PIO"]() {
      const _0x4c04ff = _0x18a8d1.packetCount["in"];
      const _0x56e980 = _0x18a8d1.packetCount.out;
      _0x18a8d1.packetCount["in"] = 0;
      _0x18a8d1.packetCount.out = 0;
      return "PIO: " + _0x4c04ff + "|" + _0x56e980 + " ";
    }
    static get ["paused"]() {
      return _0x90a1a7.movementPaused ? "[" + this.iconPause + " " + (_0x59f59a.current.huds.paused || "Paused") + "]   " : "";
    }
    static get ["fps"]() {
      const _0x29b3a1 = this.fpsCount;
      this.fpsCount = 0;
      return "FPS: " + _0x29b3a1 + "   ";
    }
  }
  class _0x3a43e7 {
    static ["init"]() {
      this.container = _0x14f7b2("#targeting-hud");
      this.DIVno1viewport = _0x14f7b2("#targeting-no-1");
      this.DIVmouse = _0x14f7b2("#targeting-mouse");
      this.DIVplayers = _0x14f7b2("#targeting-players");
      this.DIVtotalMass = _0x14f7b2("#targeting-playersMass span.mass")[0];
      this.DIVplayer1 = {
        nick: _0x14f7b2("#targeting-player1 span.nick")[0],
        mass: _0x14f7b2("#targeting-player1 span.mass")[0],
      };
      this.DIVplayer2 = {
        nick: _0x14f7b2("#targeting-player2 span.nick")[0],
        mass: _0x14f7b2("#targeting-player2 span.mass")[0],
      };
      this.lastTime = _0xb45f1b.time;
    }
    static ["update"]() {
      if (!(1000 > _0xb45f1b.time - this.lastTime) && ((this.lastTime = _0xb45f1b.time), _0xddb6d6.freeSpectate && _0x3a83be.isTurnedOn)) {
        let _0x37ad91 = 0;
        if (_0x3a83be.target1.turnedOn) {
          this.DIVplayer1.nick.innerHTML = _0x3a83be.target1.nick;
          this.DIVplayer1.mass.innerHTML = _0x3a83be.target1.outOfView ? "OUT OF VIEW" : _0x3a83be.target1.mass;
          _0x37ad91 += _0x3a83be.target1.outOfView ? 0 : _0x3a83be.target1.mass;
        } else {
          this.DIVplayer1.nick.innerHTML = "Target 1";
          this.DIVplayer1.mass.innerHTML = "NOT SELECTED";
        }
        if (_0x3a83be.target2.turnedOn) {
          this.DIVplayer2.nick.innerHTML = _0x3a83be.target2.nick;
          this.DIVplayer2.mass.innerHTML = _0x3a83be.target2.outOfView ? "OUT OF VIEW" : _0x3a83be.target2.mass;
          _0x37ad91 += _0x3a83be.target2.outOfView ? 0 : _0x3a83be.target2.mass;
        } else {
          this.DIVplayer2.nick.innerHTML = "Target 2";
          this.DIVplayer2.mass.innerHTML = "NOT SELECTED";
        }
        this.DIVtotalMass.innerHTML = _0x37ad91;
      }
    }
    static ["show"]() {
      this.container.show();
    }
    static ["hide"]() {
      this.container.hide();
    }
    static ["topViewport"]() {
      this.DIVno1viewport.show();
      this.DIVmouse.hide();
      this.DIVplayers.hide();
      _0x14f7b2("#spectate-mode-top").addClass("active");
      _0x14f7b2("#spectate-mode-mouse").removeClass("active");
      _0x14f7b2("#spectate-mode-target").removeClass("active");
    }
    static ["mouseViewport"]() {
      this.DIVmouse.show();
      this.DIVno1viewport.hide();
      this.DIVplayers.hide();
      _0x14f7b2("#spectate-mode-top").removeClass("active");
      _0x14f7b2("#spectate-mode-mouse").addClass("active");
      _0x14f7b2("#spectate-mode-target").removeClass("active");
    }
    static ["targetMode"]() {
      this.DIVplayers.show();
      this.DIVmouse.hide();
      this.DIVno1viewport.hide();
      _0x14f7b2("#spectate-mode-top").removeClass("active");
      _0x14f7b2("#spectate-mode-mouse").removeClass("active");
      _0x14f7b2("#spectate-mode-target").addClass("active");
    }
  }
  class _0x31c9b4 {
    static ["init"]() {
      _0x40f48a.init();
      _0x2cc0f3.init();
      _0x49cc31.init();
      _0x50f0c6.init();
      _0x77d3cd.init();
      _0x480be4.init();
      _0xa916b.init();
      _0x5cda9b.init();
      _0x2a0c5c.init();
      _0x59ca82.init();
      _0x9547b4.init();
      _0x3a43e7.init();
      this.isOpened = true;
      this.gMode = ":party";
      this.div = _0x14f7b2("#menu-overlay");
      this.streammode = !_0x19d5af.get("extras", "streammode");
      this.toggleStreammode();
      this.buttons();
    }
    static ["buttons"]() {
      _0x14f7b2("#button-settings").click(() => {
        this.closeSubMenus();
        _0x2cc0f3.toggle();
      });
      _0x14f7b2("#button-play").click(() => {
        this.play();
      });
      _0x14f7b2("#button-spectate").click(() => {
        _0x302a2c.spectate();
        this.close();
      });
      _0x14f7b2("#create-party").click(() => {
        _0x7c92e1.create();
      });
      _0x14f7b2("#join-party").click(() => {
        _0x7c92e1.join(_0x14f7b2("#party-token").val());
      });
      _0x14f7b2("#leave-party").click(() => {
        _0x7c92e1.leave();
      });
      _0x14f7b2("#party-context-menu-invite").click(() => {
        _0x7c92e1.invite();
      });
      _0x14f7b2(_0x24f9ab).click((_0x5e6f7a) => {
        if (!_0x14f7b2(_0x5e6f7a.target).closest("#party-context-menu").length) {
          _0x7c92e1.closeMenu();
        }
      });
      _0x14f7b2("#button-inputs").click(() => {
        this.closeSubMenus();
        _0x49cc31.toggle();
      });
      _0x14f7b2("#button-theme").click(() => {
        this.closeSubMenus();
        _0x480be4.toggle();
      });
      _0x14f7b2("#normal-tag").click(() => {
        this.normalTag();
      });
      _0x14f7b2("#minimap-show-1").click(() => {
        _0x14f7b2("#minimap-show-" + _0x5cda9b.selector).removeClass("active");
        _0x14f7b2("#minimap-show-1").addClass("active");
        _0x5cda9b.selector = 1;
      });
      _0x14f7b2("#minimap-show-2").click(() => {
        _0x14f7b2("#minimap-show-" + _0x5cda9b.selector).removeClass("active");
        _0x14f7b2("#minimap-show-2").addClass("active");
        _0x5cda9b.selector = 2;
      });
      _0x14f7b2("#minimap-show-0").click(() => {
        _0x14f7b2("#minimap-show-" + _0x5cda9b.selector).removeClass("active");
        _0x14f7b2("#minimap-show-0").addClass("active");
        _0x5cda9b.selector = 0;
      });
      _0x14f7b2("#streamMode").click(() => {
        this.toggleStreammode();
      });
      _0x14f7b2("#spectate-mode-top").click(() => {
        this.spectateModeTop();
      });
      _0x14f7b2("#spectate-mode-mouse").click(() => {
        this.spectateModeMouse();
      });
      _0x14f7b2("#spectate-mode-target").click(() => {
        this.spectateModeTarget();
      });
      if (!_0x19d5af.get("extras", "openedChangelog")) {
        _0x14f7b2("#changelog").addClass("active");
      }
      _0x14f7b2("#changelog").click(() => {
        _0x19d5af.set("extras", "openedChangelog", true);
        _0x14f7b2("#changelog").removeClass("active");
      });
    }
    static ["doubleTag"]() {
      _0x14f7b2("#double-tag").addClass("active-tag");
      _0x14f7b2("#normal-tag").removeClass("active-tag");
      _0x14f7b2("#tag2").show();
      _0x14f7b2("#nick").css("width", "189px");
      _0x14f7b2("#teams-vs").show();
      _0x14f7b2("#info-tp").hide();
      _0x12ac51.isSpectator = true;
      _0x2d5cce.spectator(true);
      _0x14f7b2(".minimap-button").each(function () {
        _0x14f7b2(this).show();
      });
    }
    static ["normalTag"]() {
      _0x14f7b2("#normal-tag").addClass("active-tag");
      _0x14f7b2("#double-tag").removeClass("active-tag");
      _0x14f7b2("#tag2").hide();
      _0x14f7b2("#nick").css("width", "45px");
      _0x14f7b2("#teams-vs").hide();
      _0x14f7b2("#info-tp").show();
      _0x2d5cce.spectator(false);
      _0x12ac51.isSpectator = false;
      _0x14f7b2(".minimap-button").each(function () {
        _0x14f7b2(this).hide();
      });
    }
    static ["play"]() {
      this.close();
      _0x302a2c.spawn();
    }
    static ["closeSubMenus"]() {
      _0x49cc31.close();
      _0x2cc0f3.close();
      _0x480be4.close();
    }
    static ["toggle"]() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
    static ["close"]() {
      this.isOpened = false;
      this.div.fadeOut(250);
      _0x14f7b2("#leaderboard-hud").css("top", "-2px");
      _0x14f7b2("#teamlist-hud").css("top", "10px");
      _0x14f7b2(".menu-bar").slideUp(250);
      _0x14f7b2("#targeting-hud").css("top", "0px");
    }
    static ["open"]() {
      this.isOpened = true;
      this.div.fadeIn(250);
      _0x14f7b2("#leaderboard-hud").css("top", "-2px");
      _0x14f7b2("#teamlist-hud").css("top", "10px");
      _0x14f7b2(".menu-bar").slideDown(250);
      _0x14f7b2("#targeting-hud").css("top", "0px");
    }
    static ["toggleStreammode"]() {
      if (this.streammode) {
        _0x14f7b2("#nick, #tag, #tag2, #party-token").removeClass("input-hidden");
        _0x14f7b2("#streamMode").html('<i class="fa fa-eye fa-fw"></i>');
        this.streammode = false;
        _0x19d5af.set("extras", "streammode", this.streammode);
      } else {
        _0x14f7b2("#nick, #tag, #tag2, #party-token").addClass("input-hidden");
        _0x14f7b2("#streamMode").html('<i class="fa fa-eye-slash fa-fw"></i>');
        this.streammode = true;
        _0x19d5af.set("extras", "streammode", this.streammode);
      }
    }
    static ["spectateModeTop"]() {
      if (!_0x90a1a7.isAlive && _0xddb6d6.isSpectating && _0xddb6d6.freeSpectate) {
        _0x3a43e7.topViewport();
        _0x302a2c.freeSpectate();
      }
    }
    static ["spectateModeMouse"]() {
      if (!(_0x90a1a7.isAlive || !_0xddb6d6.isSpectating || (_0xddb6d6.freeSpectate && !_0x3a83be.isTurnedOn))) {
        if (_0x3a83be.isTurnedOn) {
          _0x3a83be.target1.turnedOn = false;
          _0x3a83be.target2.turnedOn = false;
          _0x3a43e7.mouseViewport();
        } else {
          _0x302a2c.freeSpectate();
          _0x3a43e7.mouseViewport();
        }
      }
    }
    static ["spectateModeTarget"]() {
      if ("on" === _0x2cc0f3.targeting) {
        _0x40f48a.command("Multibox", _0x59f59a.current.notif.targeting_on);
      } else {
        _0x40f48a.command("Multibox", _0x59f59a.current.notif.targeting_off);
      }
    }
  }
  class _0x14d4a3 {
    static ["init"]() {
      const _0x4fa31c = {
        left: 0x0,
        top: 0x0,
        right: 0x0,
        bottom: 0x0,
      };
      this.cells = new Map();
      this.cells2 = new Map();
      this.myCellsIDs = new Set();
      this.myCellsIDs2 = new Set();
      this.myCells = new Map();
      this.myCells2 = new Map();
      this.sortedCells = [];
      this.food = [];
      this.cellsPositions = _0x4fa31c;
    }
    static ["update"]() {
      this.positions();
      this.food = [];
      this.sortedCells = [];
      this.cells.forEach((_0x15abc5, _0x1eb010) => {
        if (_0x15abc5.isMine) {
          this.cellsPos(_0x15abc5);
        }
        if (_0x15abc5.fadeStartTime && 1 < (_0xb45f1b.time - _0x15abc5.fadeStartTime) / _0x2cc0f3.CellAnimation) {
          this.cells["delete"](_0x1eb010);
        } else if (this.isInView(_0x15abc5) && _0x15abc5.worldID !== _0x90a1a7.worldID2) {
          if (_0x15abc5.isFood) {
            this.food.push(_0x15abc5);
          } else {
            this.sortedCells.push(_0x15abc5);
          }
        }
      });
      this.cells2.forEach((_0x5c7000, _0x3f3aaf) => {
        if (_0x5c7000.fadeStartTime && 1 < (_0xb45f1b.time - _0x5c7000.fadeStartTime) / _0x2cc0f3.CellAnimation) {
          this.cells2["delete"](_0x3f3aaf);
        } else if (!(!this.isInView(_0x5c7000) || (!_0x5c7000.isMine && this.check(_0x5c7000)))) {
          if (_0x5c7000.isFood) {
            this.food.push(_0x5c7000);
          } else {
            this.sortedCells.push(_0x5c7000);
          }
        }
      });
      this.sortedCells.sort((_0x424a64, _0x58f7ba) => {
        const _0x55c3fe = _0x424a64.animRadius;
        const _0x403ea8 = _0x58f7ba.animRadius;
        return _0x55c3fe === _0x403ea8 ? _0x58f7ba.id - _0x424a64.id : _0x55c3fe - _0x403ea8;
      });
    }
    static ["getCell"](_0x3f80e7, _0xeb4927) {
      return (1 === _0xeb4927 ? this.cells : this.cells2).get(_0x3f80e7) || this.addCell(_0x3f80e7, _0xeb4927);
    }
    static ["getCellAt"](_0x1a2b3c, _0x4d5e6f) {
      // Matches 3rb.js's own onContextMenu circle hit-test (pointInCircle
      // over this.nodes), used for the right-click party-invite menu.
      // sortedCells is ascending by radius and that's also render order
      // (see _0x386cbc.cells()), so the last/largest one drawn on top of a
      // given point should win - walk it back to front.
      for (let _0x7a8b9c = this.sortedCells.length; _0x7a8b9c--; ) {
        const _0x9c1d2e = this.sortedCells[_0x7a8b9c];
        if (0 >= _0x9c1d2e.ownerId || this.myCellsIDs.has(_0x9c1d2e.id) || this.myCellsIDs2.has(_0x9c1d2e.id)) {
          continue;
        }
        const _0x3e5f7a = _0x1a2b3c - _0x9c1d2e.animX;
        const _0x8b9c1d = _0x4d5e6f - _0x9c1d2e.animY;
        if (_0x3e5f7a * _0x3e5f7a + _0x8b9c1d * _0x8b9c1d <= _0x9c1d2e.animRadius * _0x9c1d2e.animRadius) {
          return _0x9c1d2e;
        }
      }
      return null;
    }
    static ["addCell"](_0x413407, _0x5549f4) {
      const _0x71aec9 = 1 === _0x5549f4 ? this.cells : this.cells2;
      const _0x267674 = new _0x3b109c(_0x413407, _0x5549f4);
      _0x71aec9.set(_0x413407, _0x267674);
      this.myCellCheck(_0x413407, _0x267674, _0x5549f4);
      return _0x267674;
    }
    static ["myCellCheck"](_0x1bed1b, _0x3ec24e, _0x5afc32) {
      const _0x48358c = 1 === _0x5afc32 ? this.myCellsIDs : this.myCellsIDs2;
      const _0x27f603 = 1 === _0x5afc32 ? this.myCells : this.myCells2;
      if (_0x48358c.has(_0x1bed1b)) {
        _0x27f603.set(_0x1bed1b, _0x3ec24e);
        _0x48358c["delete"](_0x1bed1b);
        _0x3ec24e.isMine = true;
        _0x3ec24e.nick = _0x90a1a7.nick;
      }
    }
    static ["eatCell"](_0x5cbea9, _0x65a01d, _0x66ed43) {
      const _0x1abf73 = 1 === _0x66ed43 ? this.cells : this.cells2;
      const _0x3c8d5e = 1 === _0x66ed43 ? this.myCells : this.myCells2;
      const _0x4d8937 = _0x1abf73.get(_0x65a01d);
      const _0x77c0b5 = _0x1abf73.get(_0x5cbea9);
      if (_0x4d8937 && _0x77c0b5) {
        _0x4d8937.x = _0x77c0b5.x;
        _0x4d8937.y = _0x77c0b5.y;
        _0x4d8937.radius = _0x4d8937.animRadius;
        _0x4d8937.fadeStartTime = _0xb45f1b.time;
        _0x4d8937.lastUpdateTime = _0xb45f1b.time;
        if (_0x4d8937.isMine) {
          _0x3c8d5e["delete"](_0x65a01d);
        }
        _0x1abf73["delete"](_0x65a01d);
        if (!_0x4d8937.isFood) {
          _0x1abf73.set(_0x65a01d + ":removed", _0x4d8937);
        }
      }
    }
    static ["removeCell"](_0x139992, _0x28ebac) {
      const _0x1641c3 = 1 === _0x28ebac ? this.cells : this.cells2;
      const _0x75cd3c = 1 === _0x28ebac ? this.myCells : this.myCells2;
      const _0x2d052b = _0x1641c3.get(_0x139992);
      if (_0x2d052b) {
        if (_0x2d052b.isMine) {
          _0x75cd3c["delete"](_0x139992);
        }
        _0x1641c3["delete"](_0x139992);
        if (!(_0x2d052b.isFood || "on" !== _0x2cc0f3.eatAnimation)) {
          _0x2d052b.fadeStartTime = _0xb45f1b.time;
          _0x1641c3.set(_0x139992 + ":removed", _0x2d052b);
        }
      }
    }
    static ["isInView"](_0x519429) {
      const _0x106585 = {
        x: 0x0,
        y: 0x0,
      };
      const _0x1b6a0e = 2 === _0x519429.cellType ? _0x996564.position : _0x106585;
      const _0x2b674d = _0xddb6d6.viewBounds;
      return !(
        _0x519429.animX - _0x1b6a0e.x + _0x519429.animRadius < _0x2b674d.left ||
        _0x519429.animX - _0x1b6a0e.x - _0x519429.animRadius > _0x2b674d.right ||
        _0x519429.animY - _0x1b6a0e.y + _0x519429.animRadius < _0x2b674d.top ||
        _0x519429.animY - _0x1b6a0e.y - _0x519429.animRadius > _0x2b674d.bottom
      );
    }
    static ["positions"]() {
      if (0 === _0x14d4a3.myCells.size) {
        // tab1 has no cells of its own right now (dead/not spawned yet) ->
        // there's nothing to dedup tab2's view against, so don't suppress anything
        this.cellsPositions.left = Infinity;
        this.cellsPositions.right = -Infinity;
        this.cellsPositions.top = Infinity;
        this.cellsPositions.bottom = -Infinity;
        return;
      }
      let _0x4b3f01 = true;
      _0x14d4a3.myCells.forEach((_0x5d98d5) => {
        if (_0x4b3f01) {
          this.cellsPositions.left = _0x5d98d5.x;
          this.cellsPositions.right = _0x5d98d5.x;
          this.cellsPositions.top = _0x5d98d5.y;
          this.cellsPositions.bottom = _0x5d98d5.y;
          _0x4b3f01 = false;
        }
      });
    }
    static ["cellsPos"](_0x2be956) {
      if (this.cellsPositions.left > _0x2be956.x + _0x2be956.radius) {
        this.cellsPositions.left = _0x2be956.x + _0x2be956.radius;
      }
      if (this.cellsPositions.right < _0x2be956.x - _0x2be956.radius) {
        this.cellsPositions.right = _0x2be956.x - _0x2be956.radius;
      }
      if (this.cellsPositions.top > _0x2be956.y + _0x2be956.radius) {
        this.cellsPositions.top = _0x2be956.y + _0x2be956.radius;
      }
      if (this.cellsPositions.bottom < _0x2be956.y - _0x2be956.radius) {
        this.cellsPositions.bottom = _0x2be956.y - _0x2be956.radius;
      }
    }
    static ["check"](_0x199e69) {
      const _0x59e2b4 = _0x996564.position;
      const _0x208e66 = _0x199e69.x - _0x59e2b4.x;
      const _0x340ab6 = _0x199e69.y - _0x59e2b4.y;
      const _0x5df441 = this.cellsPositions;
      const _0x1a2b3c = 600; // padding (game units) around tab1's own cell(s)
      return !(
        _0x208e66 + _0x199e69.radius < _0x5df441.left - _0x1a2b3c ||
        _0x208e66 - _0x199e69.radius > _0x5df441.right + _0x1a2b3c ||
        _0x340ab6 + _0x199e69.radius < _0x5df441.top - _0x1a2b3c ||
        _0x340ab6 - _0x199e69.radius > _0x5df441.bottom + _0x1a2b3c
      );
    }
  }
  class _0x3b109c {
    constructor(_0x46ae80, _0x2a2eaf) {
      const _0x19f55d = {
        r: 0x0,
        g: 0x0,
        b: 0x0,
      };
      this.id = _0x46ae80;
      this.x = 0;
      this.y = 0;
      this.radius = 0;
      this.colorObject = _0x19f55d;
      this.colorHex = "#555";
      this.skin = "";
      this.skinCode = 0;
      this._nick = "";
      this.isMine = false;
      this.isFood = false;
      this.isEjected = false;
      this.isVirus = false;
      this.isFriend = false;
      this.account = "";
      // Owner/"parent" player id (real 3rb.io protocol field, bit 0x40 of
      // the per-cell flags byte in worldUpdate). -1 means "no owner" - the
      // original client (3rb.js handleNodes) uses exactly this to decide
      // Player vs Food, not the nickname. See checkIsFood().
      this.ownerId = -1;
      this.cellType = _0x2a2eaf;
      this.animX = 0;
      this.animY = 0;
      this.animRadius = 0;
      this.lastUpdateTime = 0;
      this.fadeStartTime = 0;
    }
    set ["nick"](_0x310872) {
      if (!_0x310872) {
        return;
      }
      this._nick = _0x310872;
      const _0x507157 = _0x310872.indexOf("");
      if (0 <= _0x507157 && _0x310872.length >= _0x507157 + 1) {
        const _0x1d8d8e = _0x310872.charCodeAt(_0x507157 + 1);
        if (12000 < _0x1d8d8e) {
          this.skinCode = _0x1d8d8e;
        }
      }
    }
    get ["nick"]() {
      return this._nick;
    }
    get ["mass"]() {
      return 0 | ((this.animRadius * this.animRadius) / 100);
    }
    get ["staticMass"]() {
      return 0 | ((this.radius * this.radius) / 100);
    }
    ["setColor"](_0x2874b8, _0x53537a, _0x270a0f) {
      this.colorObject.r = _0x2874b8;
      this.colorObject.g = _0x53537a;
      this.colorObject.b = _0x270a0f;
      this.colorHex = "#" + (16777216 + (_0x2874b8 << 16) + (_0x53537a << 8) + _0x270a0f).toString(16).slice(1);
    }
    ["animate"]() {
      let _0x4ea84a = (_0xb45f1b.time - this.lastUpdateTime) / _0x2cc0f3.CellAnimation;
      _0x4ea84a = 0 > _0x4ea84a ? 0 : 1 < _0x4ea84a ? 1 : _0x4ea84a;
      this.animX = _0x4ea84a * (this.x - this.animX) + this.animX;
      this.animY = _0x4ea84a * (this.y - this.animY) + this.animY;
      this.animRadius = _0x4ea84a * (this.radius - this.animRadius) + this.animRadius;
      this.lastUpdateTime = _0xb45f1b.time;
    }
    get ["worldID"]() {
      let _0x33f29e = this._nick.substring(this._nick.indexOf("}") + 1);
      _0x33f29e = _0x33f29e.replace("%*^", "");
      return ":party" === _0x31c9b4.gMode ? _0x33f29e + this.colorHex : _0x33f29e;
    }
    get ["isUnnamed"]() {
      return 1 > this._nick.substring(this._nick.indexOf("}") + 1).length;
    }
  }
  class _0x90a1a7 {
    static ["init"]() {
      const _0x75abdd = {
        r: 0x0,
        g: 0x0,
        b: 0x0,
      };
      const _0x59bb60 = {
        x: 0x64,
        y: 0x64,
      };
      this._nick = _0x14f7b2("#nick").val();
      this._arbSkin = _0x14f7b2("#arbSkin").val();
      this._skin = _0x386cbc.getImgurCode(_0x14f7b2("#skin").val());
      this._tag = _0x14f7b2("#tag").val();
      this._colorObject = _0x75abdd;
      this.colorHex = "#000";
      this.colorHex2 = "#000";
      this._isAlive = false;
      this._isAlive2 = false;
      this._scouting1 = false;
      this._scouting2 = false;
      this.isRGB = false;
      this.x = 0;
      this.y = 0;
      this.speed = 0;
      this.animSpeed = 0;
      this.mass = 0;
      this.biggestPieceMass = 0;
      this.score = 0;
      this.movementPaused = false;
      // Close/far camera mode uses hysteresis so two nearby controlled cells
      // cannot make the camera rapidly flip between framing strategies.
      this._pairCamera = false;
      this.deathLocation = _0x59bb60;
      this.type = 1;
    }
    static ["update"]() {
      if (0 < this.pieceCount1) {
        this.playing();
      } else {
        this.dead();
      }
      if (0 < this.pieceCount2) {
        this.playing2();
      } else {
        this.dead2();
      }
      this.updateData();
      this.updateScouting();
    }
    static get ["scouting"]() {
      return this._scouting1 || this._scouting2;
    }
    static ["updateScouting"]() {
      // A connected-but-idle tab is put into a background spectate so the
      // real server keeps streaming it the current #1 player's position -
      // that position is what feeds the minimap "#1 position" marker (via
      // _0x2d5cce.biggest()). Without this, that feed only ever started on
      // an alive->dead edge (see dead()/dead2() below), so a tab that never
      // spawned at all this session (e.g. only ever playing tab 1) never
      // produced it and the marker just never lit up.
      const _0x1c9a2f = !this._isAlive && this._isAlive2 && _0x302a2c.chekConnection(1);
      const _0x3d7e6b = !this._isAlive2 && this._isAlive && _0x302a2c.chekConnection(2);
      if (_0x1c9a2f && !this._scouting1) {
        _0x302a2c.spectateBackground(1);
      }
      if (_0x3d7e6b && !this._scouting2) {
        _0x302a2c.spectateBackground(2);
      }
      this._scouting1 = _0x1c9a2f;
      this._scouting2 = _0x3d7e6b;
      if (this._isAlive && this._isAlive2) {
        // Both tabs are actively played - neither is idle-scouting, so any
        // #1 marker still showing is leftover/stale data (e.g. from just
        // before the second tab respawned) rather than a live feed.
        _0x12ac51.biggestIsOn = false;
      }
    }
    static ["playing"]() {
      if (!this._isAlive) {
        this._isAlive = true;
        // Tab 1 respawning ends any background scouting it was doing for
        // the #1 position marker - clear it locally instead of leaving the
        // last scouted position stuck on the minimap until a stale relay
        // broadcast happens to overwrite it.
        if (this._scouting1) {
          this._scouting1 = false;
          _0x12ac51.biggestIsOn = false;
        }
        if (!this._isAlive2) {
          _0x2d5cce.aliveStatus(2);
        }
        for (const _0x305bc5 of _0x14d4a3.myCells.values()) {
          this.colorObject = _0x305bc5.colorObject;
          this.colorHex = _0x305bc5.colorHex;
          break;
        }
      }
    }
    static ["playing2"]() {
      if (!this._isAlive2) {
        this._isAlive2 = true;
        // Same as above, for tab 2 respawning.
        if (this._scouting2) {
          this._scouting2 = false;
          _0x12ac51.biggestIsOn = false;
        }
        if (!this._isAlive) {
          _0x2d5cce.aliveStatus(1);
        }
        for (const _0x4e2c94 of _0x14d4a3.myCells2.values()) {
          this.colorHex2 = _0x4e2c94.colorHex;
          break;
        }
      }
    }
    static ["updateData"]() {
      if (this.isAlive) {
        this.mass = 0;
        this.biggestPieceMass = 0;
        const _0x47c3ef = (_0x351775, _0x2db928 = null) => {
          let _0x4d719b = 0;
          let _0x48b181 = 0;
          let _0x3ce899 = 0;
          let _0x31d294 = 0;
          let _0x4fe93b = 0;
          for (const _0x2f5f9b of _0x351775.values()) {
            _0x2f5f9b.animate();
            const _0x28ed4a = Math.max(1, _0x2f5f9b.animRadius * _0x2f5f9b.animRadius);
            _0x4d719b += (_0x2f5f9b.animX - (_0x2db928 ? _0x2db928.x : 0)) * _0x28ed4a;
            _0x48b181 += (_0x2f5f9b.animY - (_0x2db928 ? _0x2db928.y : 0)) * _0x28ed4a;
            _0x3ce899 += _0x28ed4a;
            _0x31d294 += _0x2f5f9b.animRadius;
            _0x4fe93b += _0x2f5f9b.staticMass;
            this.mass += _0x2f5f9b.staticMass;
            this.biggestPieceMass = Math.max(this.biggestPieceMass, _0x2f5f9b.staticMass);
          }
          return _0x3ce899 ? {
            x: _0x4d719b / _0x3ce899,
            y: _0x48b181 / _0x3ce899,
            radii: _0x31d294,
            mass: _0x4fe93b,
          } : null;
        };
        const _0x2753a5 = this._isAlive ? _0x47c3ef(_0x14d4a3.myCells) : null;
        const _0x546fa9 = this._isAlive2 ? _0x47c3ef(_0x14d4a3.myCells2, _0x996564.position) : null;
        if (!_0x2753a5 && !_0x546fa9) {
          this._pairCamera = false;
          return;
        }
        let _0x5ea492 = _0x2753a5 ? _0x2753a5.x : _0x546fa9.x;
        let _0x36957a = _0x2753a5 ? _0x2753a5.y : _0x546fa9.y;
        let _0x228d9b = _0x2753a5 ? _0x2753a5.radii : _0x546fa9.radii;
        if (_0x2753a5 && _0x546fa9) {
          const _0x3fa672 = Math.hypot(_0x2753a5.x - _0x546fa9.x, _0x2753a5.y - _0x546fa9.y);
          this._pairCamera = this._pairCamera ? _0x3fa672 < 4500 : _0x3fa672 < 3000;
          if (this._pairCamera) {
            // The expanded close-cell envelope frames both cells as a stable
            // pair. It deliberately does not weight by mass, which prevents a
            // large cell from yanking the camera during close split-running.
            _0x5ea492 = (_0x2753a5.x + _0x546fa9.x) / 2;
            _0x36957a = (_0x2753a5.y + _0x546fa9.y) / 2;
            _0x228d9b = Math.max((_0x2753a5.radii + _0x546fa9.radii) * 1.15, _0x3fa672 * 0.1);
          } else {
            // When far apart, follow the selected tab instead of averaging
            // empty space between the cells.
            const _0x22a7da = this.typeID === 2 ? _0x546fa9 : _0x2753a5;
            _0x5ea492 = _0x22a7da.x;
            _0x36957a = _0x22a7da.y;
            _0x228d9b = _0x22a7da.radii;
          }
        } else {
          this._pairCamera = false;
        }
        if (!this.movementPaused) {
          const _0x9475df = this.x - _0x5ea492;
          const _0x1b24a7 = this.y - _0x36957a;
          const _0x54e26 = Math.sqrt(_0x9475df * _0x9475df + _0x1b24a7 * _0x1b24a7);
          this.speed += _0x54e26;
          this.x = _0x5ea492;
          this.y = _0x36957a;
        }
        if (this.score < this.mass) {
          this.score = this.mass;
        }
        const _0x346099 = Math.pow(Math.min(64 / _0x228d9b, 1), 0.4);
        const _0x4e3a9e = Math.max(_0x1c478d.innerWidth / 1080, _0x1c478d.innerHeight / 1920);
        _0xddb6d6.autoZoomViewport = _0x346099 * _0x4e3a9e;
      }
    }
    static ["dead"]() {
      if (this._isAlive) {
        this._isAlive = false;
        if (this._isAlive2) {
          this.type = 2;
          _0x302a2c.spectate(1);
        } else {
          // combined isAlive (_isAlive || _isAlive2) just flipped to false -
          // playing()/playing2() tell the relay on the alive->true edge,
          // this is the matching dead->true->false edge that was missing.
          _0x2d5cce.aliveStatus();
          this.setInfo();
        }
      }
    }
    static ["dead2"]() {
      if (this._isAlive2) {
        this._isAlive2 = false;
        if (this._isAlive) {
          this.type = 1;
          _0x302a2c.spectate(2);
        } else {
          _0x2d5cce.aliveStatus();
          this.setInfo();
        }
      }
    }
    static ["setInfo"]() {
      this.score = 0;
      this.mass = 0;
      this.biggestPieceMass = 0;
      this.movementPaused = false;
      this.deathLocation.x = this.x;
      this.deathLocation.y = this.y;
      this.type = 1;
      _0x31c9b4.open();
    }
    static set ["nick"](_0x4397c5) {
      this._nick = _0x4397c5;
      _0x2d5cce.nick();
    }
    static get ["nick"]() {
      return this._nick.substring(0, 15);
    }
    static set ["arbSkin"](_0x591f79) {
      this._arbSkin = _0x591f79;
    }
    static get ["arbSkin"]() {
      return this._arbSkin;
    }
    static set ["skin"](_0x1a9370) {
      const _0x5518a5 = _0x386cbc.getImgurCode(_0x1a9370);
      const _0x356638 = _0x386cbc.getRaindowFlag(_0x1a9370);
      // getImgurCode() always returns a truthy string - either the real
      // code, or the literal "XXXXXXX" sentinel for "couldn't parse this".
      // Checking plain truthiness here meant the invalid-URL branch could
      // never actually run: a bad/unparseable URL silently became a skin
      // whose code was literally "XXXXXXX" (i.e. no skin), with no warning.
      return "XXXXXXX" !== _0x5518a5
        ? (this.isRGB !== _0x356638 && ((this.isRGB = _0x356638), _0x2d5cce.rgbMode()), (this._skin = _0x5518a5), void _0x2d5cce.skin())
        : void _0x40f48a.alert("Endymion", _0x59f59a.current.notif.invalidSkinUrl);
    }
    static get ["skin"]() {
      return this._skin;
    }
    static set ["tag"](_0x3c927d) {
      this._tag = _0x3c927d;
      _0x2d5cce.tag();
      // Tag is meant to work standalone, no party/invite needed - two
      // players who set the same tag should just see each other. Only
      // takes effect when not already in a native party (see
      // _0x1530af.computeRoom()), which stays the higher-priority,
      // explicit grouping while active.
      _0x1530af.updateRoom();
    }
    static get ["tag"]() {
      return this._tag;
    }
    static set ["colorObject"](_0x50d681) {
      this._colorObject.r = _0x50d681.r;
      this._colorObject.g = _0x50d681.g;
      this._colorObject.b = _0x50d681.b;
      _0x2d5cce.color();
    }
    static get ["colorObject"]() {
      return this._colorObject;
    }
    static set ["isAlive"](_0xb726b1) {
      this._isAlive = _0xb726b1;
      _0x2d5cce.aliveStatus(_0xb726b1);
    }
    static get ["isAlive"]() {
      return this._isAlive || this._isAlive2;
    }
    static get ["worldID"]() {
      let _0x28c4c5 = this._nick.substring(this._nick.indexOf("}") + 1);
      _0x28c4c5 = _0x28c4c5.replace("%*^", "");
      return ":party" === _0x31c9b4.gMode ? _0x28c4c5 + this.colorHex : _0x28c4c5;
    }
    static get ["worldID2"]() {
      let _0x5dbd66 = this._nick.substring(this._nick.indexOf("}") + 1);
      _0x5dbd66 = _0x5dbd66.replace("%*^", "");
      return ":party" === _0x31c9b4.gMode ? _0x5dbd66 + this.colorHex2 : _0x5dbd66;
    }
    static get ["location"]() {
      return _0x996564.getLocation(this.x, this.y);
    }
    static get ["pieceCount1"]() {
      return _0x14d4a3.myCells.size;
    }
    static get ["pieceCount2"]() {
      return _0x14d4a3.myCells2.size;
    }
    static get ["pieceCount"]() {
      return this.pieceCount1 + this.pieceCount2;
    }
    static set ["typeID"](_0x131ff6) {
      this.type = _0x131ff6;
    }
    static get ["typeID"]() {
      return this.type;
    }
  }
  class _0xb33099 {
    constructor(_0x2c1c34) {
      this.id = _0x2c1c34;
      this.isNew = 2;
      this.x = 90;
      this.y = 90;
      this.isAlive = 0;
      this.mass = 0;
      this.nick = "";
      this.skin = "";
      this.colorHex = "#000";
      this.isRGB = false;
      this.animX = 90;
      this.animY = 90;
      this.timeStamp = _0xb45f1b.time;
      this.team = 1;
    }
    get ["worldID"]() {
      let _0x469bf7 = this.nick.substring(this.nick.indexOf("}") + 1);
      _0x469bf7 = _0x469bf7.replace("%*^", "");
      return ":party" === _0x31c9b4.gMode ? _0x469bf7 + this.colorHex : _0x469bf7;
    }
    get ["location"]() {
      // `this.x/y` is now a raw world coordinate (see positionMass()) - pass
      // it straight through, same as `_0x90a1a7.location` does for the
      // local player. Adding this client's own offset on top (the old
      // behaviour) double-counted a shift that was never applied to begin
      // with, which is what put teammates in the wrong minimap sector.
      return _0x996564.getLocation(this.x, this.y);
    }
    ["animate"]() {
      let _0x469008 = (_0xb45f1b.time - this.timeStamp) / 1000;
      _0x469008 = 1 < _0x469008 ? 1 : 0 > _0x469008 ? 0 : _0x469008;
      this.animX += (this.x - this.animX) * _0x469008;
      this.animY += (this.y - this.animY) * _0x469008;
      this.timeStamp = _0xb45f1b.time;
    }
    get ["mapX"]() {
      // Matches _0x5cda9b.run()'s own viewport-rect math (size/edge scale,
      // relative to the actual live border) instead of assuming the world
      // is always exactly -8000..8000 - a server/mode with a different
      // border size would otherwise put every dot in the wrong spot.
      return (this.animX - _0x996564.left) * (_0x5cda9b.size / _0x996564.edge);
    }
    get ["mapY"]() {
      return (this.animY - _0x996564.top) * (_0x5cda9b.size / _0x996564.edge);
    }
  }
  class _0x7c92e1 {
    // Native party state - this mirrors 3rb.io's own built-in party system
    // (opcode 0x55/85 create-join-leave + code result, opcode 0x57/87
    // roster snapshot; see _0x302a2c/_0x245b10) rather than routing through
    // the custom multibox relay, since the real game server already tracks
    // party membership and broadcasts member positions on its own.
    static ["init"]() {
      this._inParty = false;
      this.code = "";
      _0x14f7b2("#leave-party").toggle(false);
      // Tracks an outstanding create/join request: awaitingResponse dedupes
      // the toast/clipboard-copy when both tabs' sockets each get their own
      // opcode 85 reply, awaitingCreate distinguishes "created" wording from
      // "joined" and tells the reply handler to auto-join tab 2 once the
      // freshly created code is known.
      this.awaitingCreate = false;
      this.awaitingResponse = false;
      this.members = new Map();
      this.selectedTarget = null;
      this.nickToId = new Map();
      this.lastInviteSentAt = 0;
    }
    static get ["inParty"]() {
      return this._inParty;
    }
    static set ["inParty"](_0x2c3d4e) {
      this._inParty = _0x2c3d4e;
      _0x14f7b2("#leave-party").toggle(_0x2c3d4e);
    }
    static ["getMember"](_0x4e2a7f) {
      let _0x1b9c3d = this.members.get(_0x4e2a7f);
      if (undefined === _0x1b9c3d) {
        _0x1b9c3d = new _0xb33099(_0x4e2a7f);
        this.members.set(_0x4e2a7f, _0x1b9c3d);
      }
      return _0x1b9c3d;
    }
    static ["hasNick"](_0x1a2b3c) {
      // Native party (this.members) and the relay's "tag" roster
      // (_0x12ac51.teamPlayers) are two entirely separate systems with no
      // shared id space - nick is the only thing they have in common, so
      // it's what render call sites use to skip a relay entry that's
      // actually the same person already shown via the party roster.
      for (const _0x4d5e6f of this.members.values()) {
        if (_0x4d5e6f.nick === _0x1a2b3c) {
          return true;
        }
      }
      return false;
    }
    static ["normalizeCode"](_0x7e8f9a) {
      let _0x2b3c4d = String(_0x7e8f9a || "").trim();
      _0x2b3c4d = _0x2b3c4d.replace("https://", "").replace("beta.3rb.io/", "").replace("3rb.io/", "");
      return _0x2b3c4d && "#" === _0x2b3c4d.charAt(0) ? _0x2b3c4d : null;
    }
    static ["create"]() {
      this.awaitingCreate = true;
      this.awaitingResponse = true;
      _0x302a2c.createParty(1);
    }
    static ["join"](_0x1f2a3b) {
      const _0x4c5d6e = this.normalizeCode(_0x1f2a3b);
      if (!_0x4c5d6e) {
        _0x40f48a.warn("Party", "Invalid party code.");
        return;
      }
      this.awaitingCreate = false;
      this.awaitingResponse = true;
      _0x302a2c.joinParty(_0x4c5d6e, 1);
      if (_0x302a2c.chekConnection(2)) {
        _0x302a2c.joinParty(_0x4c5d6e, 2);
      }
    }
    static ["leave"]() {
      if (!this.inParty) {
        return;
      }
      if (_0x302a2c.chekConnection(1)) {
        _0x302a2c.leaveParty(1);
      }
      if (_0x302a2c.chekConnection(2)) {
        _0x302a2c.leaveParty(2);
      }
      this.inParty = false;
      this.code = "";
      this.awaitingCreate = false;
      this.awaitingResponse = false;
      this.members.clear();
      _0x1530af.updateRoom();
      _0x14f7b2("#party-token").val("");
      _0x40f48a.warn("Party", "Left the party.");
    }
    static ["isInviteMessage"](_0x3f4a5b) {
      // Best-effort text match - the invite notification's exact wording is
      // server-generated (it's not a client-side string we could reverse
      // engineer), so this just looks for the obvious "invite ... party"
      // shape rather than an exact phrase.
      return /invit/i.test(_0x3f4a5b) && /part(y|ie)/i.test(_0x3f4a5b);
    }
    static ["rememberNick"](_0x1a2b3c, _0x7a8b9c) {
      if (_0x1a2b3c && 0 < _0x7a8b9c) {
        this.nickToId.set(_0x1a2b3c, _0x7a8b9c);
      }
    }
    static ["stripBidi"](_0x1a2b3c) {
      // Strip RTL/LTR bidi control marks (common around Arabic/Hebrew
      // names mixed with English text) so the extracted name displays
      // cleanly and matches consistently for nick->id lookups.
      return _0x1a2b3c.replace(/[â€Žâ€â€ª-â€®â¦-â©]/g, "").trim();
    }
    static ["resolveIdByNick"](_0x4d5e6f) {
      if (this.nickToId.has(_0x4d5e6f)) {
        return this.nickToId.get(_0x4d5e6f);
      }
      for (const _0x9c1d2e of _0x14d4a3.cells.values()) {
        if (_0x9c1d2e.nick === _0x4d5e6f && 0 < _0x9c1d2e.ownerId) {
          return _0x9c1d2e.ownerId;
        }
      }
      for (const _0x9c1d2e of _0x14d4a3.cells2.values()) {
        if (_0x9c1d2e.nick === _0x4d5e6f && 0 < _0x9c1d2e.ownerId) {
          return _0x9c1d2e.ownerId;
        }
      }
      return -1;
    }
    static ["openMenu"](_0x2c3d4e, _0x5e6f7a, _0x8b9c1d) {
      if (!_0x2c3d4e || 0 >= _0x2c3d4e.ownerId || _0x2c3d4e.ownerId === _0x996564.pID || _0x2c3d4e.ownerId === _0x996564.pID2) {
        this.closeMenu();
        return;
      }
      this.selectedTarget = _0x2c3d4e;
      const _0x4d5e6f = _0x14f7b2("#party-context-menu");
      _0x14f7b2("#party-context-menu-name").text(_0x2c3d4e.nick || "An unnamed cell");
      _0x14f7b2("#party-context-menu-swatch").css("background-color", _0x2c3d4e.colorHex || "#555");
      const _0x1e2f3a = this.members.has(_0x2c3d4e.ownerId);
      _0x14f7b2("#party-context-menu-invite")
        .prop("disabled", _0x1e2f3a)
        .text(_0x1e2f3a ? "Already in party" : "Invite to Party");
      _0x4d5e6f.css({ visibility: "hidden", display: "block" });
      let _0x7a8b9c = _0x5e6f7a;
      let _0x9c1d2e = _0x8b9c1d;
      if (_0x7a8b9c + _0x4d5e6f.outerWidth() > _0x1c478d.innerWidth) {
        _0x7a8b9c -= _0x4d5e6f.outerWidth();
      }
      if (_0x9c1d2e + _0x4d5e6f.outerHeight() > _0x1c478d.innerHeight) {
        _0x9c1d2e -= _0x4d5e6f.outerHeight();
      }
      _0x4d5e6f.css({ top: _0x9c1d2e, left: _0x7a8b9c, visibility: "visible" });
    }
    static ["closeMenu"]() {
      this.selectedTarget = null;
      _0x14f7b2("#party-context-menu").hide();
    }
    static ["sendInvite"](_0x7a8b9c) {
      if (this.inParty) {
        this.lastInviteSentAt = Date.now();
        _0x302a2c.chat("/invite " + _0x7a8b9c, 1);
      } else {
        // Mirrors 3rb.js's own userMenuInvite(): create a party first, then
        // give the create request a moment to round-trip before inviting -
        // sending the invite over a connection that isn't in a party yet
        // would have nothing to invite the target into.
        this.create();
        setTimeout(() => {
          this.lastInviteSentAt = Date.now();
          _0x302a2c.chat("/invite " + _0x7a8b9c, 1);
        }, 1000);
      }
    }
    static ["isOwnInviteEcho"](_0x1a2b3c) {
      // The server appears to also message the SENDER back with something
      // shaped just like the recipient's "invited you" notification
      // (matches the same isInviteMessage() pattern), which would
      // otherwise show a confusing Accept/Reject prompt on your own
      // outgoing invite. Treat anything invite-shaped that arrives shortly
      // after we sent one - or that references a party we already own -
      // as that echo rather than a genuine incoming invite.
      if (this.lastInviteSentAt && 3000 > Date.now() - this.lastInviteSentAt) {
        return true;
      }
      const _0x4d5e6f = this.extractPartyCode(_0x1a2b3c);
      return !!(_0x4d5e6f && this.inParty && _0x4d5e6f === this.code);
    }
    static ["invite"]() {
      const _0x2c3d4e = this.selectedTarget;
      this.closeMenu();
      if (_0x2c3d4e && 0 < _0x2c3d4e.ownerId) {
        this.sendInvite(_0x2c3d4e.ownerId);
      }
    }
    static ["extractPartyCode"](_0x1a2b3c) {
      // 3rb.js renders id1<=0 chat messages via raw .html() injection (not
      // text-escaped), and exposes a global partyCode(code) function
      // (self.partyCode, bound from the join-party UI handler) - the
      // server can embed a real, clickable "<button onclick=partyCode(...)>"
      // directly in the message. Look for that call first; fall back to a
      // bare "#CODE" token anywhere in the text.
      const _0x4d5e6f = _0x1a2b3c.match(/partyCode\(\s*['"]([^'"]+)['"]\s*\)/i);
      if (_0x4d5e6f) {
        return _0x4d5e6f[1];
      }
      const _0x7a8b9c = _0x1a2b3c.match(/#[A-Za-z0-9_-]{3,}/);
      return _0x7a8b9c ? _0x7a8b9c[0] : null;
    }
    static ["acceptInvite"](_0x6d7e8f, _0x7a8b9c) {
      if (this.inParty) {
        // Accepting should move you into the inviter's party, not leave you
        // stuck in whatever party you were already in.
        this.leave();
      }
      if (_0x6d7e8f) {
        this.join(_0x6d7e8f);
        return;
      }
      if (0 < _0x7a8b9c) {
        // No separate accept opcode has turned up in the real protocol -
        // inviting the sender back is what actually groups two players
        // into one party (same mechanism as sending an invite in the
        // first place). This is the fallback when no code could be found
        // in the message itself.
        _0x302a2c.chat("/invite " + _0x7a8b9c, 1);
        return;
      }
      _0x40f48a.warn("Party", "Couldn't figure out who invited you - ask them to invite you again.");
    }
  }
  class _0x996564 {
    static ["init"]() {
      const _0x2ac531 = {
        left: -8000,
        top: -8000,
      };
      const _0x17032a = {
        x: 0x0,
        y: 0x0,
      };
      const _0x2347d8 = {
        x: 0x0,
        y: 0x0,
      };
      const _0x21aea0 = {
        x: 0x0,
        y: 0x0,
      };
      const _0x5854d6 = {
        x: 0x0,
        y: 0x0,
      };
      this.left = -8000;
      this.top = -8000;
      this.right = 8000;
      this.bottom = 8000;
      this.edge = 16000;
      this.botOffset = _0x2ac531;
      this.offset = _0x17032a;
      this.center = _0x2347d8;
      this.offset2 = _0x21aea0;
      this.center2 = _0x5854d6;
      this.focusedAtCenter = false;
      this.pID = -1;
      this.pID2 = -1;
    }
    static ["update"](_0x41556a, _0x52a61a, _0x443c5a, _0x2959a4) {
      this.left = _0x41556a;
      this.top = _0x52a61a;
      this.right = _0x443c5a;
      this.edge = this.right - this.left + _0x480be4.borderWidth;
      this.bottom = _0x2959a4;
      this.offset.x = 8000 + _0x41556a;
      this.offset.y = 8000 + _0x52a61a;
      this.center.x = (_0x443c5a + _0x41556a) >> 1;
      this.center.y = (_0x2959a4 + _0x52a61a) >> 1;
      if (!this.focusedAtCenter) {
        _0xddb6d6.x = this.center.x;
        _0xddb6d6.y = this.center.y;
        this.focusedAtCenter = true;
      }
    }
    static ["update2"](_0x47093f, _0x17ddf7, _0x4bff61, _0x409379) {
      this.offset2.x = 8000 + _0x47093f;
      this.offset2.y = 8000 + _0x17ddf7;
      this.botOffset.left = _0x47093f;
      this.botOffset.top = _0x17ddf7;
    }
    static ["getLocation"](_0x240562, _0x28bd28) {
      let _0x5115b3 = 0 | ((_0x240562 - this.left) / 3199);
      let _0x22399a = 0 | ((_0x28bd28 - this.top) / 3199);
      _0x5115b3 = 0 > _0x5115b3 ? 0 : 4 < _0x5115b3 ? 4 : _0x5115b3;
      _0x22399a = 0 > _0x22399a ? 0 : 4 < _0x22399a ? 4 : _0x22399a;
      return String.fromCharCode(65 + _0x22399a) + (_0x5115b3 + 1);
    }
    static get ["position"]() {
      this.center2.x = this.offset2.x - this.offset.x;
      this.center2.y = this.offset2.y - this.offset.y;
      return this.center2;
    }
  }
  class _0xddb6d6 {
    static ["init"]() {
      const _0x2eb015 = {
        left: -960,
        right: 0x3c0,
        top: -540,
        bottom: 0x21c,
      };
      const _0x49dc4f = {
        x: 0x0,
        y: 0x0,
      };
      this.x = 0;
      this.y = 0;
      this.targetViewport = 1;
      this.autoZoomViewport = 1;
      this.viewport = 1;
      this.viewBounds = _0x2eb015;
      this.spectatePoint = _0x49dc4f;
      this._isSpectating = false;
      this._freeSpectate = false;
      this._lastFrameAt = performance.now();
      this._frameDelta = 1 / 60;
      _0x3a83be.init();
    }
    static get ["isSpectating"]() {
      return this._isSpectating;
    }
    static get ["freeSpectate"]() {
      return this._freeSpectate;
    }
    static set ["isSpectating"](_0x5841d6) {
      this._isSpectating = _0x5841d6;
      if (!_0x90a1a7.isAlive && _0x5841d6) {
        _0x3a43e7.show();
      } else {
        _0x3a43e7.hide();
      }
    }
    static set ["freeSpectate"](_0x353667) {
      this._freeSpectate = _0x353667;
      if (_0x353667) {
        _0x3a43e7.mouseViewport();
      } else {
        _0x3a43e7.topViewport();
      }
    }
    static ["update"]() {
      const _0x4ced70 = performance.now();
      this._frameDelta = Math.min(0.05, Math.max(0.001, (_0x4ced70 - this._lastFrameAt) / 1000));
      this._lastFrameAt = _0x4ced70;
      if (this.isSpectating) {
        _0x3a83be.update();
      }
      this.move();
      this.updateView();
    }
    static ["move"]() {
      if (_0x90a1a7.isAlive) {
        const _0x43f7d7 = 1 - Math.exp((-60 * this._frameDelta) / Math.max(_0x2cc0f3.cameraSpeed, 1));
        this.x += (_0x90a1a7.x - this.x) * _0x43f7d7;
        this.y += (_0x90a1a7.y - this.y) * _0x43f7d7;
      } else if (this.isSpectating) {
        const _0x50660a = 1 - Math.exp(-2 * this._frameDelta);
        this.x += (this.spectatePoint.x - this.x) * _0x50660a;
        this.y += (this.spectatePoint.y - this.y) * _0x50660a;
      }
    }
    static ["updateView"]() {
      let _0x13ea50 = this.targetViewport;
      if ("on" === _0x2cc0f3.autoZoom) {
        _0x13ea50 *= this.autoZoomViewport;
      }
      const _0x53af36 = 1 - Math.exp(-8 * this._frameDelta);
      this.viewport += (_0x13ea50 - this.viewport) * _0x53af36;
      const _0x598bd4 = _0x386cbc.canvas.width / 2 / this.viewport;
      const _0x4e8ec2 = _0x386cbc.canvas.height / 2 / this.viewport;
      this.viewBounds.left = Math.max(-_0x598bd4 + this.x, _0x996564.left);
      this.viewBounds.right = Math.min(_0x598bd4 + this.x, _0x996564.right);
      this.viewBounds.top = Math.max(-_0x4e8ec2 + this.y, _0x996564.top);
      this.viewBounds.bottom = Math.min(_0x4e8ec2 + this.y, _0x996564.bottom);
    }
  }
  const _0x34f3bb = new (class {
    constructor() {
      this.nickCaches = new Map();
      this.massCaches = new Map();
      this.maxCacheLife = 1000;
      this.massUpdateInterval = 500;
      this.nickShadowCtx = this.newShadowContext();
      this.massShadowCtx = this.newShadowContext();
      this.canvasPool = [];
    }
    ["nick"](_0x18cbda) {
      if (_0x18cbda.isUnnamed || this.isSmall(_0x18cbda)) {
        return false;
      }
      let _0x356a8b = _0x18cbda.nick.substring(_0x18cbda.nick.indexOf("}") + 1) || "";
      const _0x490323 = this.nickCaches.get(_0x356a8b) || this.newNickCache(_0x356a8b);
      _0x490323.lastUsedAt = _0xb45f1b.time;
      const _0x202e61 = 50 > this.getScreenRadius(_0x18cbda.animRadius) ? 0 : 1;
      const _0x420665 = _0x490323.level[_0x202e61];
      if (_0x420665) {
        return _0x420665;
      }
      const _0x128fe2 = this.getNewCanvas();
      const _0x492419 = _0x128fe2.getContext("2d");
      const _0x2d7ae1 = (50 * (_0x202e61 + 1) * _0x480be4.cellNickSize) / 100;
      _0x128fe2.height = 0 | (1.2 * _0x2d7ae1);
      _0x128fe2.width = 0 | (1.2 * this.getNickWidth(_0x356a8b, _0x2d7ae1));
      _0x492419.font = "700 " + (0 | _0x2d7ae1) + "px " + _0x480be4.nickFont;
      _0x492419.textBaseline = "middle";
      _0x492419.textAlign = "center";
      if ("normal" === _0x2cc0f3.nickShadow) {
        _0x492419.strokeStyle = _0x480be4.nickStrokeColor;
        _0x492419.lineWidth = 6 * (_0x202e61 + 1);
        _0x492419.strokeText(_0x356a8b, _0x128fe2.width >> 1, _0x128fe2.height >> 1);
      } else {
        if ("performance" === _0x2cc0f3.nickShadow) {
          _0x492419.fillStyle = _0x480be4.nickStrokeColor;
          _0x492419.globalAlpha = 0.75;
          const _0x5cb4c6 = 0 | (_0x128fe2.width / 1.2);
          const _0x49dca4 = 0 | (_0x128fe2.height / 1.2);
          _0x492419.fillRect((_0x128fe2.width - _0x5cb4c6) >> 1, (_0x128fe2.height - _0x49dca4) >> 1, _0x5cb4c6, _0x49dca4);
          _0x492419.globalAlpha = 1;
        }
      }
      _0x492419.fillStyle = _0x480be4.nickColor;
      _0x492419.fillText(_0x356a8b, _0x128fe2.width >> 1, _0x128fe2.height >> 1);
      _0x490323.level[_0x202e61] = _0x128fe2;
      return _0x128fe2;
    }
    ["newNickCache"](_0x564f63) {
      const _0x160ca3 = new _0x58f96a();
      this.nickCaches.set(_0x564f63, _0x160ca3);
      return _0x160ca3;
    }
    ["getNickWidth"](_0x331b74, _0x4c5114) {
      return (this.nickShadowCtx.measureText(_0x331b74).width * _0x4c5114) / 50;
    }
    ["setNickCtxFont"]() {
      this.nickCaches.clear();
      this.nickShadowCtx.font = "700 50px " + _0x480be4.nickFont;
    }
    ["mass"](_0x177638) {
      if (!_0x177638.isVirus && this.isSmall(_0x177638)) {
        return false;
      }
      const _0x5d334c = this.massCaches.get(_0x177638.id) || this.newMassCache(_0x177638.id);
      const _0x223d75 =
        "shortened" === _0x2cc0f3.cellMass && 999 < _0x177638.staticMass ? (0 | (_0x177638.staticMass / 100)) / 10 + "k" : _0x177638.staticMass;
      const _0x3968bd = this.getScreenRadius(_0x177638.radius);
      const _0x211b77 = _0x223d75 !== _0x5d334c.lastMass;
      const _0x2c1101 = _0xb45f1b.time - _0x5d334c.lastRenderTime > this.massUpdateInterval;
      const _0x401a53 = 1.2 < _0x3968bd / _0x5d334c.lastScreenRadius || (_0x211b77 && _0x2c1101);
      _0x5d334c.lastUsedAt = _0xb45f1b.time;
      if (!_0x401a53 && _0x5d334c.canvas) {
        return _0x5d334c.canvas;
      }
      if (!_0x5d334c.canvas) {
        _0x5d334c.canvas = this.getNewCanvas();
      }
      const _0x4cc465 = _0x5d334c.canvas;
      const _0x15cb06 = _0x4cc465.getContext("2d");
      const _0x400599 = 0 | ((_0x3968bd / 2) * (_0x480be4.cellMassSize / 100));
      _0x4cc465.height = 0 | (1.2 * _0x400599);
      _0x4cc465.width = 0 | (1.2 * this.getMassWidth(_0x223d75, _0x400599));
      _0x15cb06.font = "700 " + _0x400599 + "px " + _0x480be4.massFont;
      _0x15cb06.textBaseline = "middle";
      _0x15cb06.textAlign = "center";
      if ("normal" === _0x2cc0f3.massShadow) {
        _0x15cb06.strokeStyle = _0x480be4.massStrokeColor;
        _0x15cb06.lineWidth = (6 * _0x400599) / 50;
        _0x15cb06.strokeText(_0x223d75, _0x4cc465.width >> 1, _0x4cc465.height >> 1);
      } else {
        if ("performance" === _0x2cc0f3.massShadow) {
          _0x15cb06.fillStyle = _0x480be4.massStrokeColor;
          _0x15cb06.globalAlpha = 0.75;
          const _0x2d61b7 = 0 | (_0x4cc465.width / 1.2);
          const _0x33f6c2 = 0 | (_0x4cc465.height / 1.2);
          _0x15cb06.fillRect((_0x4cc465.width - _0x2d61b7) >> 1, (_0x4cc465.height - _0x33f6c2) >> 1, _0x2d61b7, _0x33f6c2);
          _0x15cb06.globalAlpha = 1;
        }
      }
      _0x15cb06.fillStyle = _0x480be4.massColor;
      _0x15cb06.fillText(_0x223d75, _0x4cc465.width >> 1, _0x4cc465.height >> 1);
      _0x5d334c.lastMass = _0x223d75;
      _0x5d334c.lastScreenRadius = _0x3968bd;
      _0x5d334c.lastRenderTime = _0xb45f1b.time + _0x5d334c.timeShift;
      return _0x4cc465;
    }
    ["newMassCache"](_0x1286a5) {
      const _0x16f7e8 = new _0x2e97e4();
      this.massCaches.set(_0x1286a5, _0x16f7e8);
      return _0x16f7e8;
    }
    ["getMassWidth"](_0x1a2018, _0x5486b0) {
      return (this.massShadowCtx.measureText(_0x1a2018).width * _0x5486b0) / 50;
    }
    ["setMassCtxFont"]() {
      this.massCaches.clear();
      this.massShadowCtx.font = "700 50px " + _0x480be4.massFont;
    }
    ["getScreenRadius"](_0x4669c2) {
      return _0x4669c2 * _0xddb6d6.viewport;
    }
    ["isSmall"](_0x3a934b) {
      return "on" === _0x2cc0f3.autoHideText && 20 > this.getScreenRadius(_0x3a934b.animRadius);
    }
    ["getNewCanvas"]() {
      return this.canvasPool.shift() || _0x24f9ab.createElement("canvas");
    }
    ["newShadowContext"]() {
      const _0x474b8e = _0x24f9ab.createElement("canvas").getContext("2d");
      _0x474b8e.font = "700 50px ubuntu";
      return _0x474b8e;
    }
    ["cleaner"]() {
      this.nickCaches.forEach((_0xa3f99f, _0x1f0714) => {
        if (_0xb45f1b.time - _0xa3f99f.lastUsedAt > this.maxCacheLife) {
          this.nickCaches["delete"](_0x1f0714);
          if (50 <= this.canvasPool.length) {
            return;
          }
          const _0x27c2f7 = _0xa3f99f.level[0];
          const _0x169356 = _0xa3f99f.level[1];
          if (_0x27c2f7) {
            this.resetCanvas(_0x27c2f7);
            this.canvasPool.push(_0x27c2f7);
          }
          if (_0x169356) {
            this.resetCanvas(_0x169356);
            this.canvasPool.push(_0x169356);
          }
        }
      });
      this.massCaches.forEach((_0x4158e1, _0xf3efc2) => {
        if (_0xb45f1b.time - _0x4158e1.lastUsedAt > this.maxCacheLife) {
          this.massCaches["delete"](_0xf3efc2);
          if (50 <= this.canvasPool.length) {
            return;
          }
          const _0x8b7645 = _0x4158e1.canvas;
          if (_0x8b7645) {
            this.resetCanvas(_0x8b7645);
            this.canvasPool.push(_0x8b7645);
          }
        }
      });
    }
    ["resetCanvas"](_0x1489c8) {
      _0x1489c8.width = 0;
    }
  })();
  class _0x2e97e4 {
    constructor() {
      this.lastUsedAt = _0xb45f1b.time;
      this.timeShift = 0 | (Math.random() * _0x34f3bb.massUpdateInterval);
      this.lastMass = 0;
      this.lastScreenRadius = 0;
      this.lastRenderTime = _0xb45f1b.time;
      this.canvas = null;
    }
  }
  class _0x58f96a {
    constructor() {
      this.lastUsedAt = _0xb45f1b.time;
      this.level = [null, null];
    }
  }
  class _0x4c0fb5 {
    static ["render"]() {
      if ("off" !== _0x2cc0f3.food) {
        if ("monoColored" === _0x2cc0f3.food) {
          this.monoColored();
        } else if ("rainbow" === _0x2cc0f3.food) {
          this.rainbow();
        }
      }
    }
    static ["monoColored"]() {
      const _0x35608f = _0x386cbc.ctx;
      const _0xb35fb3 = _0x480be4.foodSize;
      let _0x452dec = _0x14d4a3.food.length;
      _0x35608f.fillStyle = _0x480be4.foodColor;
      for (_0x35608f.beginPath(); _0x452dec--; ) {
        const _0x6bc6c7 = {
          x: 0x0,
          y: 0x0,
        };
        const _0x105e9e = _0x14d4a3.food[_0x452dec];
        const _0x12f0da = 2 === _0x105e9e.cellType ? _0x996564.position : _0x6bc6c7;
        const _0x3d8a95 = _0x105e9e.animRadius + _0xb35fb3;
        _0x35608f.moveTo(_0x105e9e.animX - _0x12f0da.x + _0x3d8a95, _0x105e9e.animY - _0x12f0da.y);
        _0x35608f.arc(_0x105e9e.animX - _0x12f0da.x, _0x105e9e.animY - _0x12f0da.y, _0x3d8a95, 0, _0x386cbc.pi2, true);
      }
      _0x35608f.closePath();
      _0x35608f.fill();
    }
    static ["rainbow"]() {
      let _0x31b51a = _0x386cbc.ctx;
      let _0x23c062 = _0x480be4.foodSize;
      for (let _0x198238 = _0x14d4a3.food.length; _0x198238--; ) {
        const _0x5096a7 = {
          x: 0x0,
          y: 0x0,
        };
        const _0x4e1e7f = _0x14d4a3.food[_0x198238];
        const _0x142eae = 2 === _0x4e1e7f.cellType ? _0x996564.position : _0x5096a7;
        const _0x5c6dd3 = _0x4e1e7f.animRadius + _0x23c062;
        _0x31b51a.fillStyle = _0x4e1e7f.colorHex;
        if (2 > _0x5c6dd3 * _0xddb6d6.viewport) {
          _0x31b51a.fillRect(_0x4e1e7f.animX - _0x142eae.x - _0x5c6dd3, _0x4e1e7f.animY - _0x142eae.y - _0x5c6dd3, 2 * _0x5c6dd3, 2 * _0x5c6dd3);
        } else {
          _0x31b51a.beginPath();
          _0x31b51a.arc(_0x4e1e7f.animX - _0x142eae.x, _0x4e1e7f.animY - _0x142eae.y, _0x5c6dd3, 0, _0x386cbc.pi2, true);
          _0x31b51a.closePath();
          _0x31b51a.fill();
        }
      }
    }
  }
  class _0x51fad0 {
    static ["init"]() {
      this.left = 0;
      this.top = 0;
      this.sectorEdge = 0;
      this.edge = 0;
      this.halfSectorEdge = 0;
      this.letters = ["A", "B", "C", "D", "E"];
      this.visible = new Set();
      this.bgImageUrl = null;
      this.bgImageEl = null;
    }
    static ["render"]() {
      const _0x499cfe = _0x2cc0f3.bgSectors;
      if ("image" === _0x499cfe) {
        return this.image();
      }
      if ("off" !== _0x499cfe) {
        const _0x4a2d38 = _0x386cbc.ctx;
        const _0x5ba8ae = _0x480be4.gridWidth >> 1;
        this.edge = _0x996564.edge - _0x480be4.gridWidth;
        this.left = _0x996564.left + _0x5ba8ae;
        this.top = _0x996564.top + _0x5ba8ae;
        this.sectorEdge = 0 | (this.edge / 5);
        this.halfSectorEdge = 0 | (this.edge / 10);
        _0x4a2d38.lineWidth = _0x480be4.gridWidth;
        _0x4a2d38.strokeStyle = _0x480be4.gridColor;
        this.sectors();
        if ("onlyLines" !== _0x499cfe) {
          _0x4a2d38.textAlign = "center";
          _0x4a2d38.textBaseline = "middle";
          _0x4a2d38.fillStyle = _0x480be4.gridTextColor;
          this.updateViewSectors();
          if ("snowflakes" === _0x499cfe) {
            this.snowflakes();
          } else if ("stars" === _0x499cfe) {
            this.stars();
          } else if ("hearts" === _0x499cfe) {
            this.hearts();
          } else if ("diamonds" === _0x499cfe) {
            this.diamonds();
          } else {
            this.normal();
          }
        }
      }
    }
    static ["sectors"]() {
      const _0x387dc2 = _0x386cbc.ctx;
      _0xddb6d6.viewBounds;
      _0x387dc2.beginPath();
      _0x387dc2.rect(this.left + this.sectorEdge, this.top, this.sectorEdge, this.edge);
      _0x387dc2.rect(this.left + 3 * this.sectorEdge, this.top, this.sectorEdge, this.edge);
      _0x387dc2.rect(this.left, this.top + this.sectorEdge, this.edge, this.sectorEdge);
      _0x387dc2.rect(this.left, this.top + 3 * this.sectorEdge, this.edge, this.sectorEdge);
      _0x387dc2.rect(this.left, this.top, this.edge, this.edge);
      _0x387dc2.closePath();
      _0x387dc2.stroke();
    }
    static ["updateViewSectors"]() {
      const _0x11a8bc = this.visible;
      _0x11a8bc.clear();
      const _0x40948e = _0xddb6d6.viewBounds;
      const _0x2124fe = 0 | ((_0x40948e.left - 200 - _0x996564.left) / this.sectorEdge);
      const _0x2220e7 = 0 | ((_0x40948e.top - 200 - _0x996564.top) / this.sectorEdge);
      const _0x179245 = 5 - (0 | ((_0x996564.right - _0x40948e.right - 200) / this.sectorEdge)) - _0x2124fe;
      const _0xfb889b = 5 - (0 | ((_0x996564.bottom - _0x40948e.bottom - 200) / this.sectorEdge)) - _0x2220e7;
      for (let _0x1bea32 = 0; _0x1bea32 < _0x179245; _0x1bea32++) {
        for (let _0x800f28 = 0; _0x800f28 < _0xfb889b; _0x800f28++) {
          _0x11a8bc.add(this.letters[_0x2220e7 + _0x800f28] + (_0x2124fe + _0x1bea32 + 1));
        }
      }
    }
    static ["normal"]() {
      const _0x374eb1 = _0x386cbc.ctx;
      _0x374eb1.font = "400 " + _0x480be4.gridTextSize + "px " + _0x480be4.gridTextFont;
      for (let _0xf67ab4 = 0; 5 > _0xf67ab4; _0xf67ab4++) {
        const _0x934ba5 = this.top + this.halfSectorEdge + _0xf67ab4 * this.sectorEdge;
        for (let _0x2ec138 = 0; 5 > _0x2ec138; _0x2ec138++) {
          const _0x3d569a = this.letters[_0xf67ab4] + (_0x2ec138 + 1);
          if (this.visible.has(_0x3d569a)) {
            const _0x77491c = this.left + this.halfSectorEdge + _0x2ec138 * this.sectorEdge;
            _0x374eb1.fillText(_0x3d569a, _0x77491c, _0x934ba5);
          }
        }
      }
    }
    static ["snowflakes"]() {
      this.symbolGrid("â†");
    }
    static ["stars"]() {
      this.symbolGrid("âœ¦");
    }
    static ["hearts"]() {
      this.symbolGrid("â¤");
    }
    static ["diamonds"]() {
      this.symbolGrid("â–");
    }
    static ["symbolGrid"](_0x1c9a5f) {
      const _0x29baf0 = _0x386cbc.ctx;
      _0x29baf0.font = "400 " + _0x480be4.gridTextSize + "px Ubuntu";
      for (let _0x959833 = 0; 5 > _0x959833; _0x959833++) {
        const _0x594cbf = this.top + this.halfSectorEdge + _0x959833 * this.sectorEdge;
        for (let _0x3951fe = 0; 5 > _0x3951fe; _0x3951fe++) {
          const _0x13073d = this.letters[_0x959833] + (_0x3951fe + 1);
          if (this.visible.has(_0x13073d)) {
            const _0x8a2a31 = this.left + this.halfSectorEdge + _0x3951fe * this.sectorEdge;
            _0x29baf0.fillText(_0x1c9a5f, _0x8a2a31, _0x594cbf);
          }
        }
      }
    }
    static ["image"]() {
      const _0x2f8b31 = _0x480be4.backgroundImage;
      if (!_0x2f8b31) {
        return;
      }
      const _0x4a1e6d = this.getBackgroundImage(_0x2f8b31);
      if (_0x4a1e6d) {
        _0x386cbc.ctx.drawImage(_0x4a1e6d, _0x996564.left, _0x996564.top, _0x996564.edge, _0x996564.edge);
      }
    }
    static ["getBackgroundImage"](_0x2f8b31) {
      if (this.bgImageUrl !== _0x2f8b31) {
        this.bgImageUrl = _0x2f8b31;
        this.bgImageEl = null;
        // No crossOrigin here on purpose: this image is only ever drawn to
        // the main canvas, and nothing anywhere reads pixel data back off
        // that canvas (toDataURL/getImageData), so there's no tainting risk
        // to guard against - and skipping it means image hosts that don't
        // send Access-Control-Allow-Origin (e.g. i.pinimg.com) still work,
        // instead of being blocked outright.
        const _0x4a1e6d = new Image();
        _0x4a1e6d.onload = () => {
          if (this.bgImageUrl === _0x2f8b31) {
            this.bgImageEl = _0x4a1e6d;
          }
        };
        _0x4a1e6d.onerror = () => {};
        _0x4a1e6d.src = _0x2f8b31;
      }
      return this.bgImageEl;
    }
  }
  class _0x3a83be {
    static ["init"]() {
      const _0x5dffce = {
        x: 0x0,
        y: 0x0,
      };
      const _0x5d903a = {
        turnedOn: false,
        nick: "",
        worldID: "",
        mass: 0x0,
        cellCount: 0x0,
        position: _0x5dffce,
        outOfView: false,
      };
      const _0x464ccd = {
        x: 0x0,
        y: 0x0,
      };
      const _0x2a5e15 = {
        turnedOn: false,
        nick: "",
        worldID: "",
        mass: 0x0,
        cellCount: 0x0,
        position: _0x464ccd,
        outOfView: false,
      };
      const _0x210563 = {
        x: 0x0,
        y: 0x0,
      };
      this.target1 = _0x5d903a;
      this.target2 = _0x2a5e15;
      this.center = _0x210563;
    }
    static ["update"]() {
      if (this.target1.turnedOn || this.target2.turnedOn) {
        const _0x12bae4 = this.target1;
        const _0x5298ff = this.target2;
        _0x12bae4.mass = 0;
        _0x12bae4.position.x = 0;
        _0x12bae4.position.y = 0;
        _0x12bae4.cellCount = 0;
        _0x5298ff.mass = 0;
        _0x5298ff.position.x = 0;
        _0x5298ff.position.y = 0;
        _0x5298ff.cellCount = 0;
        _0x14d4a3.cells.forEach((_0x558cf4) => {
          if (_0x12bae4.turnedOn && _0x12bae4.worldID === _0x558cf4.worldID) {
            _0x12bae4.position.x += _0x558cf4.animX;
            _0x12bae4.position.y += _0x558cf4.animY;
            _0x12bae4.mass += _0x558cf4.mass;
            _0x12bae4.cellCount++;
          } else if (_0x5298ff.turnedOn && _0x5298ff.worldID === _0x558cf4.worldID) {
            _0x5298ff.position.x += _0x558cf4.animX;
            _0x5298ff.position.y += _0x558cf4.animY;
            _0x5298ff.mass += _0x558cf4.mass;
            _0x5298ff.cellCount++;
          }
        });
        _0x12bae4.mass |= 0;
        _0x5298ff.mass |= 0;
        let _0x3bee00 = 0;
        let _0x3edaaa = 0;
        let _0x35be38 = 0;
        if (_0x12bae4.turnedOn) {
          if (0 < _0x12bae4.cellCount) {
            _0x12bae4.position.x /= _0x12bae4.cellCount;
            _0x12bae4.position.y /= _0x12bae4.cellCount;
            _0x12bae4.outOfView = false;
            _0x3edaaa += _0x12bae4.position.x;
            _0x35be38 += _0x12bae4.position.y;
            _0x3bee00++;
          } else {
            _0x12bae4.outOfView = true;
          }
        }
        if (_0x5298ff.turnedOn) {
          if (0 < _0x5298ff.cellCount) {
            _0x5298ff.position.x /= _0x5298ff.cellCount;
            _0x5298ff.position.y /= _0x5298ff.cellCount;
            _0x5298ff.outOfView = false;
            _0x3edaaa += _0x5298ff.position.x;
            _0x35be38 += _0x5298ff.position.y;
            _0x3bee00++;
          } else {
            _0x5298ff.outOfView = true;
          }
        }
        if (0 < _0x3bee00) {
          this.center.x = 0 | (_0x3edaaa / _0x3bee00);
          this.center.y = 0 | (_0x35be38 / _0x3bee00);
        }
      }
    }
    static ["lockTarget"](_0x2af725, _0x5e43e5, _0x42a1a4) {
      if (!_0xddb6d6.freeSpectate) {
        _0x22a8df.toggleSpectate();
      }
      let _0x24c35b = 199996164;
      let _0x53b303 = false;
      _0x14d4a3.cells.forEach((_0x5e2d7a) => {
        if (!(_0x5e2d7a.isFood || _0x5e2d7a.isVirus || _0x5e2d7a.isEjected)) {
          const _0x3c43d4 = this.getDistanceSquare(_0x2af725, _0x5e43e5, _0x5e2d7a.animX, _0x5e2d7a.animY);
          if (_0x3c43d4 < _0x24c35b) {
            _0x24c35b = _0x3c43d4;
            _0x53b303 = _0x5e2d7a;
          }
        }
      });
      if (_0x53b303) {
        if (_0x53b303.isUnnamed) {
          _0x40f48a.alert("Endymion", _0x59f59a.current.notif.target_unnamed);
        } else {
          const _0x345b88 = this[1 === _0x42a1a4 ? "target1" : "target2"];
          _0x345b88.turnedOn = true;
          _0x345b88.nick = _0x53b303.nick;
          _0x345b88.worldID = _0x53b303.worldID;
          _0x345b88.outOfView = false;
          _0x3a43e7.targetMode();
        }
      }
    }
    static ["getDistanceSquare"](_0x557cf5, _0x15a59d, _0x22c733, _0x4a9e22) {
      const _0x124a57 = _0x22c733 - _0x557cf5;
      const _0x3fa5ae = _0x4a9e22 - _0x15a59d;
      return _0x124a57 * _0x124a57 + _0x3fa5ae * _0x3fa5ae;
    }
    static ["reset"]() {
      if (!this.isTurnedOn) {
        _0x22a8df.toggleSpectate();
      }
      if (_0xddb6d6.freeSpectate) {
        _0x3a43e7.mouseViewport();
      } else {
        _0x3a43e7.topViewport();
      }
      this.target1.turnedOn = false;
      this.target2.turnedOn = false;
    }
    static ["getMass"](_0x52f2f0) {
      return (_0x52f2f0 * _0x52f2f0) / 100;
    }
    static get ["isTurnedOn"]() {
      return this.target1.turnedOn || this.target2.turnedOn;
    }
  }
  class _0x2ab3a8 {
    static ["init"]() {
      this.r = 0;
      this.g = 0;
      this.b = 0;
      this.targetR = 0;
      this.targetG = 0;
      this.targetB = 0;
      this.color = "#000000";
      this.lastTime = 0;
    }
    static ["update"]() {
      this.r += (this.targetR - this.r) / 80;
      this.g += (this.targetG - this.g) / 80;
      this.b += (this.targetB - this.b) / 80;
      this.color = "#" + (16777216 + (this.r << 16) + (this.g << 8) + (0 | this.b)).toString(16).slice(1);
      const _0x327775 = Math.min(_0xb45f1b.time - this.lastTime - 2000, 33);
      if (!(0 > _0x327775)) {
        this.lastTime = _0xb45f1b.time + _0x327775;
        this.newTargetRGB();
      }
    }
    static ["newTargetRGB"]() {
      let _0x218a7e = [255, 7, 0 | (255 * Math.random())];
      _0x218a7e.sort(() => 0.5 - Math.random());
      this.targetR = _0x218a7e[0];
      this.targetG = _0x218a7e[1];
      this.targetB = _0x218a7e[2];
    }
    static ["getColor"](_0x16d8f4, _0x5f426b) {
      return "rgb(" + (0 | (_0x16d8f4.r * _0x5f426b)) + "," + (0 | (_0x16d8f4.g * _0x5f426b)) + "," + (0 | (_0x16d8f4.b * _0x5f426b)) + ")";
    }
  }
  class _0x4c265b {
    constructor(_0x491bf5) {
      this.dataView = _0x491bf5;
      this.index = 0;
      this.maxIndex = _0x491bf5.byteLength;
    }
    ["readUInt8"]() {
      const _0x1fb3a0 = this.dataView.getUint8(this.index, true);
      this.index++;
      return _0x1fb3a0;
    }
    ["readInt8"]() {
      const _0x1cb8c7 = this.dataView.getInt8(this.index, true);
      this.index++;
      return _0x1cb8c7;
    }
    ["readUInt16"]() {
      const _0x6361ee = this.dataView.getUint16(this.index, true);
      this.index += 2;
      return _0x6361ee;
    }
    ["readInt16"]() {
      const _0x55eda1 = this.dataView.getInt16(this.index, true);
      this.index += 2;
      return _0x55eda1;
    }
    ["readUInt32"]() {
      const _0x84424c = this.dataView.getUint32(this.index, true);
      this.index += 4;
      return _0x84424c;
    }
    ["readInt32"]() {
      const _0x304660 = this.dataView.getInt32(this.index, true);
      this.index += 4;
      return _0x304660;
    }
    ["readFloat32"]() {
      const _0x518805 = this.dataView.getFloat32(this.index, true);
      this.index += 4;
      return _0x518805;
    }
    ["readFloat64"]() {
      const _0x21cd32 = this.dataView.getFloat64(this.index, true);
      this.index += 8;
      return _0x21cd32;
    }
    ["readUTF8string"]() {
      let _0x22cf08;
      let _0x43f4c4 = "";
      for (; 0 !== (_0x22cf08 = this.readUInt8()) && !this.endOfBuffer(); ) {
        _0x43f4c4 += String.fromCharCode(_0x22cf08);
      }
      return _0x43f4c4;
    }
    ["readStringZeroUtf8"]() {
      let _0x4aa4c3 = "";
      let _0x4ce2d6 = 0;
      for (var _0x516684 = this.index; _0x516684 < this.dataView.byteLength; _0x516684++) {
        if (this.dataView.getUint8(_0x516684, true)) {
          _0x4ce2d6++;
        } else {
          break;
        }
      }
      _0x4aa4c3 += new TextDecoder().decode(new Uint8Array(this.dataView.buffer, this.index, _0x4ce2d6));
      this.index += _0x4ce2d6 + 1;
      return _0x4aa4c3;
    }
    ["readEscapedUTF8string"]() {
      const _0x3b8095 = this.readUTF8string();
      return decodeURIComponent(escape(_0x3b8095));
    }
    ["decompress"]() {
      const _0x3dfaeb = new Uint8Array(this.dataView.buffer);
      const _0x2af2bb = this.readUInt32();
      const _0x2ef075 = new Uint8Array(_0x2af2bb);
      LZ4.decodeBlock(_0x3dfaeb.slice(5), _0x2ef075);
      this.dataView = new DataView(_0x2ef075.buffer);
      this.index = 0;
      this.maxIndex = this.dataView.byteLength;
    }
    ["endOfBuffer"]() {
      return this.index >= this.maxIndex;
    }
  }
  class _0x18a8d1 {
    static ["init"]() {
      const _0x4c69f9 = {
        in: 0x0,
        out: 0x0,
      };
      this.ip = null;
      this.ws = null;
      this.connected = false;
      this.ws2 = null;
      this.connected2 = false;
      this.ws3 = null;
      this.connected3 = false;
      this.backupReady = false;
      this.backupConnecting = false;
      this.backupRetryTimer = null;
      this.intentionalDisconnect = false;
      this.captchaQueue = Promise.resolve();
      this.packetCount = _0x4c69f9;
      this.widgetIds = {};
      this.pendingResolvers = {};
      this.restartAt = null;
      _0x996564.init();
    }
    // Each tab needs its OWN Turnstile widget/container. Rendering ".cf-turnstile"
    // twice targets the same single element, so the 2nd render() silently fails
    // to bind and tab 2's promise never resolves -> handshake2 never completes
    // -> ws2 never sends its auth packet -> server drops it as idle.
    static async ["getToken"](_0xe90589) {
      const _0x4b01b7 = this.captchaQueue.then(() => this._getToken(_0xe90589));
      this.captchaQueue = _0x4b01b7.catch(() => {});
      return _0x4b01b7;
    }
    static async ["_getToken"](_0xe90589) {
      return new Promise((_0x2d5600, _0x1ab686) => {
        if (_0xe90589 <= 1) {
          _0x40f48a.warn("Endymion", "Solving captcha, please wait..");
        }
        if (!window.turnstile) {
          return _0x1ab686(new Error("Turnstile SDK not loaded"));
        }
        // remember whoever is currently waiting for THIS tab's token
        this.pendingResolvers[_0xe90589] = { resolve: _0x2d5600, reject: _0x1ab686 };

        const _0x2f4bd1 = "#cf-turnstile-" + _0xe90589;
        if (!document.querySelector(_0x2f4bd1)) {
          const _0x3179fb = document.createElement("div");
          _0x3179fb.id = "cf-turnstile-" + _0xe90589;
          _0x3179fb.style.cssText = "position:fixed;left:-10000px;top:-10000px;width:1px;height:1px;overflow:hidden;pointer-events:none";
          document.body.appendChild(_0x3179fb);
        }

        if (undefined !== this.widgetIds[_0xe90589]) {
          // A widget from a PREVIOUS connect already lives in this
          // container. reset() alone doesn't reliably re-trigger the
          // callback for a managed/invisible challenge - on reconnect this
          // left the promise hanging forever. remove() fully tears the old
          // widget down so the container is empty again and render() below
          // can cleanly create a fresh one - the same path that already
          // works for the very first connect. Wrapped in try/catch since a
          // widget Cloudflare already auto-expired/GC'd internally could
          // make remove() itself throw, which would otherwise silently
          // reject this whole getToken() call before render() ever runs.
          try {
            window.turnstile.remove(this.widgetIds[_0xe90589]);
          } catch (_0x1a2b3c) {}
          delete this.widgetIds[_0xe90589];
        }

        const _0x4f2a11 = window.turnstile.render(_0x2f4bd1, {
          sitekey: "0x4AAAAAADre-KxtZJu7P6nr",
          callback: (_0x4a58da, _0x51a9e5) => {
            const _0x3c9d02 = this.pendingResolvers[_0xe90589];
            if (!_0x51a9e5 && !_0x4a58da) {
              return _0x40f48a.warn("Endymion", "Unexpected response from turnstile API.");
            }
            if (_0x14f7b2("#loading-screen") && _0x14f7b2("#loading-screen").fadeOut(500)) {
              _0x14f7b2("#loading-screen").remove();
            }
            _0x40f48a.warn("Endymion", "Captcha has been solved successfully for Tab " + _0xe90589);
            if (_0x3c9d02) {
              delete this.pendingResolvers[_0xe90589];
              return _0x3c9d02.resolve(_0x4a58da);
            }
          },
          "expired-callback": () => {
            const _0x3c9d02 = this.pendingResolvers[_0xe90589];
            if (_0x3c9d02) {
              delete this.pendingResolvers[_0xe90589];
              _0x3c9d02.reject(new Error("Turnstile token expired for tab " + _0xe90589));
            }
          },
          "error-callback": () => {
            const _0x3c9d02 = this.pendingResolvers[_0xe90589];
            if (_0x3c9d02) {
              delete this.pendingResolvers[_0xe90589];
              _0x3c9d02.reject(new Error("Turnstile error for tab " + _0xe90589));
            }
          },
        });
        this.widgetIds[_0xe90589] = _0x4f2a11;
      });
    }
    static ["connect"](_0x23e168, _0x5ad969) {
      if ("string" != typeof _0x23e168) {
        return _0x40f48a.warn("Endymion", "Server IP is invalid");
      }
      if (_0x23e168) {
        this.disconnect();
        this.resetData();
        this.ip = _0x23e168;
        this.intentionalDisconnect = false;
        this.createSocket(1);
        this.createSocket(2);
        console.log("Connecting to: " + _0x23e168);
      }
    }
    static ["createSocket"](_0x4d5c2e) {
      if (!this.ip) return null;
      const _0x210b36 = new WebSocket(this.ip, "algamees");
      if (1 === _0x4d5c2e) this.ws = _0x210b36;
      else if (2 === _0x4d5c2e) this.ws2 = _0x210b36;
      else this.ws3 = _0x210b36;
      this.bindSocket(_0x210b36, _0x4d5c2e);
      return _0x210b36;
    }
    static ["bindSocket"](_0x210b36, _0x4d5c2e) {
      _0x210b36.binaryType = "arraybuffer";
      _0x210b36.onopen = () => this.onOpen(_0x4d5c2e);
      _0x210b36.onmessage = (_0x36ede8) => this.onMessage(_0x36ede8, _0x4d5c2e);
      _0x210b36.onclose = () => this.onClose(_0x4d5c2e, _0x210b36);
      _0x210b36.onerror = () => this.onError(_0x4d5c2e);
    }
    static ["scheduleBackup"](_0x31bf32 = 1500) {
      clearTimeout(this.backupRetryTimer);
      if (this.intentionalDisconnect || !this.ip || !this.connected || !this.connected2 || this.ws3Open || this.backupConnecting) return;
      this.backupRetryTimer = setTimeout(() => this.connectBackup(), _0x31bf32);
    }
    static ["connectBackup"]() {
      if (this.intentionalDisconnect || !this.ip || !this.connected || !this.connected2 || this.ws3Open || this.backupConnecting) return;
      this.backupConnecting = true;
      this.backupReady = false;
      this.createSocket(3);
    }
    static ["promoteBackup"](_0x1903d8) {
      if (!this.backupReady || !this.ws3Open) return false;
      const _0x210b36 = this.ws3;
      _0x302a2c.stopPingLoop(_0x1903d8);
      _0x302a2c.stopPingLoop(3);
      _0x210b36.onopen = _0x210b36.onmessage = _0x210b36.onclose = _0x210b36.onerror = null;
      if (1 === _0x1903d8) {
        this.ws = _0x210b36;
        this.connected = true;
        _0x14d4a3.myCellsIDs.clear();
        _0x14d4a3.myCells.clear();
        _0x90a1a7._isAlive = false;
      } else {
        this.ws2 = _0x210b36;
        this.connected2 = true;
        _0x14d4a3.myCellsIDs2.clear();
        _0x14d4a3.myCells2.clear();
        _0x90a1a7._isAlive2 = false;
      }
      this.ws3 = null;
      this.connected3 = false;
      this.backupReady = false;
      this.backupConnecting = false;
      this.bindSocket(_0x210b36, _0x1903d8);
      _0x302a2c.initPingLoop(_0x1903d8);
      _0x90a1a7.type = _0x1903d8;
      _0x40f48a.alert("Endymion", "Standby Tab 3 promoted into Tab " + _0x1903d8);
      setTimeout(() => _0x302a2c.spawnTab(_0x1903d8), 150);
      this.scheduleBackup(1200);
      return true;
    }
    static ["disconnect"]() {
      this.intentionalDisconnect = true;
      clearTimeout(this.backupRetryTimer);
      [this.ws, this.ws2, this.ws3].forEach((_0x210b36) => {
        if (!_0x210b36) return;
        _0x210b36.onopen = _0x210b36.onmessage = _0x210b36.onclose = _0x210b36.onerror = null;
        try { _0x210b36.close(); } catch (_0x4a94c8) {}
      });
      _0x302a2c.stopAllPingLoops();
      this.ws = null;
      this.connected = false;
      this.ws2 = null;
      this.connected2 = false;
      this.ws3 = null;
      this.connected3 = false;
      this.backupReady = false;
      this.backupConnecting = false;
      this.ip = null;
    }
    static ["resetData"]() {
      _0x14d4a3.cells.clear();
      _0x14d4a3.myCellsIDs.clear();
      _0x14d4a3.myCells.clear();
      _0x14d4a3.cells2.clear();
      _0x14d4a3.myCellsIDs2.clear();
      _0x14d4a3.myCells2.clear();
      _0x90a1a7._isAlive = false;
      _0x90a1a7._isAlive2 = false;
      // dead()/dead2() leave `type` pointed at whichever tab was still
      // alive when the OTHER one died, so it can be stuck on 2 from the
      // previous session. spawn() spawns whichever tab `typeID` currently
      // points at, so without this a reconnect (auto or manual server
      // switch) would silently route every "Play" click to tab 2 only,
      // making tab 1 look completely unplayable.
      _0x90a1a7.type = 1;
    }
    static ["send"](_0x545759, _0x4b600f) {
      this.packetCount.out++;
      if (1 === _0x4b600f && this.wsOpen) {
        this.ws.send(_0x545759);
      } else if (2 === _0x4b600f && this.ws2Open) {
        this.ws2.send(_0x545759);
      } else if (3 === _0x4b600f && this.ws3Open) {
        this.ws3.send(_0x545759);
      }
    }
    static ["onOpen"](_0x310b30) {
      _0x2d5cce.ip();
      if (1 === _0x310b30) _0x1d0165.init();
      _0x302a2c.init(_0x310b30);
      if (3 !== _0x310b30) _0x40f48a.alert("Endymion", "Tab " + _0x310b30 + " connected");
    }
    static ["onMessage"](_0xdbc368, _0x57208b) {
      this.packetCount["in"]++;
      // Tab 3 is a transport-only hot standby. Its handshake is completed in
      // onOpen(), but it must not feed world packets into the two-tab parser:
      // that parser intentionally treats every non-Tab-1 packet as Tab 2.
      // Letting standby traffic through would overwrite Tab 2's rendered state.
      if (3 === _0x57208b) return;
      _0x245b10.getBuffer(_0xdbc368, _0x57208b);
    }
    static ["onClose"](_0x1903d8, _0x210b36) {
      const _0x2b070e = 1 === _0x1903d8 ? this.ws : 2 === _0x1903d8 ? this.ws2 : this.ws3;
      if (_0x2b070e !== _0x210b36) return;
      _0x302a2c.stopPingLoop(_0x1903d8);
      if (this.intentionalDisconnect) return;
      if (3 === _0x1903d8) {
        this.ws3 = null;
        this.connected3 = false;
        this.backupReady = false;
        this.backupConnecting = false;
        this.scheduleBackup(1800);
        return;
      }
      if (1 === _0x1903d8) {
        this.ws = null;
        this.connected = false;
      } else {
        this.ws2 = null;
        this.connected2 = false;
      }
      _0x245b10.clearCells(_0x1903d8);
      _0x40f48a.alert("Endymion", "Tab " + _0x1903d8 + " disconnected");
      console.log("Websocket " + _0x1903d8 + " closed");
      if (this.promoteBackup(_0x1903d8)) return;
      setTimeout(() => {
        if (!this.intentionalDisconnect && this.ip && (1 === _0x1903d8 ? !this.ws : !this.ws2)) this.createSocket(_0x1903d8);
      }, 1000);
      if (!(this.wsOpen || this.ws2Open)) {
        _0x31c9b4.open();
      }
    }
    static ["onError"](_0xe834f) {
      if (!(this.wsOpen || this.ws2Open)) {
        _0x31c9b4.open();
      }
      if (3 === _0xe834f) {
        this.connected3 = false;
        this.backupReady = false;
      } else if (1 === _0xe834f) {
        this.connected = false;
      } else {
        this.connected2 = false;
      }
      console.log("Websocket " + _0xe834f + " errored out!");
    }
    static get ["wsOpen"]() {
      return this.ws && this.ws.readyState === this.ws.OPEN;
    }
    static get ["ws2Open"]() {
      return this.ws2 && this.ws2.readyState === this.ws2.OPEN;
    }
    static get ["ws3Open"]() {
      return this.ws3 && this.ws3.readyState === this.ws3.OPEN;
    }
  }
  class _0x1d0165 {
    static ["init"]() {
      this.messages = new Map();
      this.spammers = [];
    }
    static ["checkSpam"](_0x2071d8, _0x1a8ffb) {
      if (-1 !== this.spammers.indexOf(_0x2071d8)) {
        return true;
      }
      if (this.messages.has(_0x2071d8)) {
        const _0x80533c = this.messages.get(_0x2071d8);
        if ((_0x80533c == _0x1a8ffb && _0x1a8ffb.length >= 30) || (_0x80533c.length >= 30 && _0x1a8ffb.length >= 30)) {
          this.spammers.push(_0x2071d8);
          _0x40f48a.alert("Endymion", "Spammer Catched -> " + _0x2071d8);
          return true;
        }
      } else if (_0x1a8ffb.length >= 30) {
        this.messages.set(_0x2071d8, _0x1a8ffb);
      }
      if (this.messages.size >= 10) {
        this.messages.clear();
      }
      return false;
    }
  }
  class _0x245b10 {
    static ["getBuffer"](_0x332dc4, _0x4e19d2) {
      const _0x56cf06 = new DataView(_0x332dc4.data);
      this.parse(_0x56cf06, _0x4e19d2);
    }
    static ["parse"](_0xf8bab6, _0x24de2f) {
      const _0x4f5972 = new _0x4c265b(_0xf8bab6);
      const _0x6ab5d9 = _0x4f5972.readUInt8();
      if (16 === _0x6ab5d9) {
        this.worldUpdate(_0x4f5972, _0x24de2f);
      } else if (17 === _0x6ab5d9) {
        this.getSpectateData(_0x4f5972);
      } else if (18 === _0x6ab5d9) {
        this.clearCells(_0x24de2f);
      } else if (20 === _0x6ab5d9) {
        this.clearMyCells(_0x24de2f);
      } else if (32 === _0x6ab5d9) {
        this.getMyCellId(_0x4f5972, _0x24de2f);
      } else if (50 === _0x6ab5d9 && 1 === _0x24de2f) {
        this.getLeaderboard(_0x4f5972);
      } else if (49 === _0x6ab5d9 && 1 === _0x24de2f) {
        this.getLeaderboardFFA(_0x4f5972);
      } else if (65 === _0x6ab5d9) {
        this.borderUpdate(_0x4f5972, _0x24de2f);
      } else if (85 === _0x6ab5d9) {
        this.handlePartyCode(_0x4f5972);
      } else if (87 === _0x6ab5d9) {
        this.handleParty(_0x4f5972);
      }
      if (86 === _0x6ab5d9 && 1 === _0x24de2f) {
        this.handleChat(_0x4f5972);
      }
    }
    static ["handlePartyCode"](_0x8a3f2c) {
      const _0x1d9e5f = _0x8a3f2c.readStringZeroUtf8();
      if ("invalid" === _0x1d9e5f) {
        if (_0x7c92e1.awaitingResponse) {
          _0x7c92e1.awaitingResponse = false;
          _0x7c92e1.awaitingCreate = false;
          _0x40f48a.warn("Party", "Invalid party code.");
        }
        return;
      }
      const _0x6b7c8d = _0x7c92e1.awaitingCreate;
      if (_0x7c92e1.awaitingResponse) {
        _0x7c92e1.awaitingResponse = false;
        _0x7c92e1.awaitingCreate = false;
        _0x14f7b2("#party-token").val(_0x1d9e5f);
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(_0x1d9e5f).catch(() => {});
        }
        _0x40f48a.warn("Party", _0x6b7c8d ? "Party created - code " + _0x1d9e5f + " copied to clipboard." : "Joined party " + _0x1d9e5f + ".");
      }
      _0x7c92e1.code = _0x1d9e5f;
      _0x7c92e1.inParty = true;
      _0x1530af.updateRoom();
      if (_0x6b7c8d && _0x302a2c.chekConnection(2)) {
        _0x302a2c.joinParty(_0x1d9e5f, 2);
      }
    }
    static ["handleParty"](_0x9c2d4e) {
      const _0x3f5a6b = _0x9c2d4e.readUInt16();
      const _0x7d8e9f = new Set();
      const _0x6f2e1a = [];
      for (let _0x1c2d3e = 0; _0x1c2d3e < _0x3f5a6b; _0x1c2d3e++) {
        const _0x4e5f6a = _0x9c2d4e.readUInt32();
        const _0x8b9c1d = _0x9c2d4e.readStringZeroUtf8();
        const _0x2e3f4a = _0x9c2d4e.readUInt8();
        const _0x5b6c7d = _0x9c2d4e.readUInt8();
        const _0x9d1e2f = _0x9c2d4e.readUInt8();
        const _0x3a4b5c = _0x9c2d4e.readInt32();
        const _0x6d7e8f = _0x9c2d4e.readInt32();
        const _0x1f2a3b = _0x9c2d4e.readInt32();
        _0x6f2e1a.push({ id: _0x4e5f6a, nick: _0x8b9c1d, mass: _0x3a4b5c, x: _0x6d7e8f, y: _0x1f2a3b });
        if (_0x8b9c1d === _0x90a1a7.nick || _0x8b9c1d === _0x90a1a7.nick2) {
          // Both tabs spawn under the same nick, and tab1/tab2 already see
          // each other via the multibox relay (_0x12ac51.teamPlayers) - if
          // the server includes your own connection(s) in this roster too,
          // rendering them again here would just be a redundant/confusing
          // second dot for your own other tab. Still counts as "seen" so a
          // stale entry (from before this filter existed) gets pruned below.
          _0x7d8e9f.add(_0x4e5f6a);
          continue;
        }
        const _0x4c5d6e = _0x7c92e1.getMember(_0x4e5f6a);
        _0x4c5d6e.nick = _0x8b9c1d;
        _0x4c5d6e.colorHex = "#" + (0x1000000 + (_0x2e3f4a << 16) + (_0x5b6c7d << 8) + _0x9d1e2f).toString(16).slice(1);
        _0x4c5d6e.mass = _0x3a4b5c;
        _0x4c5d6e.x = _0x6d7e8f;
        _0x4c5d6e.y = _0x1f2a3b;
        _0x4c5d6e.isAlive = 1;
        _0x4c5d6e.timeStamp = _0xb45f1b.time;
        _0x7d8e9f.add(_0x4e5f6a);
      }
      for (const _0x2b3c4d of _0x7c92e1.members.keys()) {
        if (!_0x7d8e9f.has(_0x2b3c4d)) {
          _0x7c92e1.members.delete(_0x2b3c4d);
        }
      }
    }
    static ["handleChat"](_0x4be406) {
      // id1 is the sender's real player id (matches cell.ownerId/_0x996564.pID
      // namespace) - needed so a chat message's nick can be right-clicked
      // into the same party-invite menu as a map cell.
      const _0x2f8a1c = _0x4be406.readInt32();
      _0x4be406.readInt32();
      _0x4be406.readUInt8();
      _0x4be406.readUInt8();
      _0x4be406.readUInt8();
      var _0x16ef7c = _0x4be406.readStringZeroUtf8().replace("[]", "");
      var _0x365e8b = _0x4be406.readStringZeroUtf8();
      _0x4be406.readStringZeroUtf8();
      _0x40f48a.gameChat(_0x16ef7c, _0x365e8b, _0x2f8a1c);
    }
    static ["worldUpdate"](_0x449cb9, _0x43ee07 = 1) {
      _0xb45f1b.refreshTime();
      var _0x49c709;
      var _0x55e445;
      var _0x2283b5;
      var _0x26f542 = false;
      var _0xabb49d = null;
      var _0x8aab7f = null;
      var _0x348ca4 = undefined;
      var _0x468d84 = undefined;
      var _0x178a5a = undefined;
      var _0x1b8419 = undefined;
      var _0x415005 = undefined;
      var _0x472603 = undefined;
      var _0xf3f2e0 = undefined;
      var _0xe4d42a = undefined;
      var _0x3d627b = undefined;
      var _0xd54ce1 = undefined;
      var _0x466514 = "on" === _0x2cc0f3.eatAnimation;
      var _0x9e119e = _0x449cb9.readUInt16();
      for (var _0xbdb90c = 0; _0xbdb90c < _0x9e119e; _0xbdb90c++) {
        var _0x49c709;
        var _0x55e445;
        var _0x2283b5;
        var _0x26f542;
        var _0xabb49d;
        var _0x8aab7f;
        var _0x348ca4;
        var _0x468d84;
        var _0x178a5a;
        var _0x1b8419;
        var _0x415005;
        var _0x472603;
        var _0xf3f2e0;
        var _0xe4d42a;
        var _0x3d627b;
        var _0xd54ce1;
        var _0x466514;
        var _0x9e119e;
        var _0xbdb90c;
        _0x348ca4 = _0x449cb9.readUInt32();
        _0x468d84 = _0x449cb9.readUInt32();
        if (_0x466514) {
          _0x14d4a3.eatCell(_0x348ca4, _0x468d84, _0x43ee07);
        }
      }
      for (; 0 !== (_0x178a5a = _0x449cb9.readUInt32()); ) {
        _0xabb49d = _0x14d4a3.getCell(_0x178a5a, _0x43ee07);
        _0x1b8419 = _0x449cb9.readInt32();
        _0x415005 = _0x449cb9.readInt32();
        _0x472603 = _0x449cb9.readUInt16();
        if (_0xabb49d.init) {
          _0xabb49d.animate();
          _0xabb49d.x = _0xabb49d.animX;
          _0xabb49d.y = _0xabb49d.animY;
          _0xabb49d.radius = _0xabb49d.animRadius;
        } else {
          _0xabb49d.animX = _0xabb49d.x = _0x1b8419;
          _0xabb49d.animY = _0xabb49d.y = _0x415005;
          _0xabb49d.radius = _0xabb49d.animRadius = _0x472603;
          _0xabb49d.lastUpdateTime = _0xb45f1b.time;
          _0xabb49d.init = true;
        }
        _0xabb49d.x = _0x1b8419;
        _0xabb49d.y = _0x415005;
        _0xabb49d.radius = _0x472603;
        _0xabb49d.lastUpdateTime = _0xb45f1b.time;
        _0x8aab7f = _0x449cb9.readUInt8();
        _0x3d627b = !!(1 & _0x8aab7f);
        _0xe4d42a = !!(4 & _0x8aab7f);
        _0xf3f2e0 = !!(8 & _0x8aab7f);
        _0x49c709 = !!(16 & _0x8aab7f);
        _0x55e445 = !!(32 & _0x8aab7f);
        _0x2283b5 = !!(64 & _0x8aab7f);
        _0xd54ce1 = !!(128 & _0x8aab7f);
        if (_0x49c709) {
          _0x449cb9.readUInt32();
          _0x449cb9.readUInt8();
        }
        if (_0x2283b5) {
          // owner/"parent" player id - see the ownerId comment in _0x3b109c's
          // constructor. Only resent when it changes, so only overwrite when
          // this delta actually carries it (matches nick/skin below).
          _0xabb49d.ownerId = _0x449cb9.readInt32();
        }
        if (2 & _0x8aab7f) {
          _0xabb49d.setColor(_0x449cb9.readUInt8(), _0x449cb9.readUInt8(), _0x449cb9.readUInt8());
        } else {
          null;
        }
        _0x26f542 = !!(32 & _0x8aab7f);
        if (_0xe4d42a) {
          // readStringZeroUtf8 (TextDecoder), NOT readEscapedUTF8string - the
          // original client (3rb.js handleNodes) reads skin/nick this way for
          // exactly this packet. readEscapedUTF8string's escape()/
          // decodeURIComponent() trick throws URIError on any byte sequence
          // that isn't strictly valid UTF-8, and that throw is uncaught here,
          // silently aborting the rest of this packet's cell loop - leaving
          // whichever cell was mid-parse (and everyone after it) stuck with
          // stale nick/skin/isFood forever, even though its x/y/radius (read
          // earlier above) keep updating fine. That's the "white, no name,
          // still moving" cell bug.
          _0xabb49d.skin = _0x449cb9.readStringZeroUtf8();
          if (_0xabb49d.skin.split("/")[1] !== "undefined") {
            _0x386cbc.get3rbSkin(_0xabb49d.skin);
          }
        }
        _0xabb49d.nick = _0xf3f2e0 ? _0x449cb9.readStringZeroUtf8() : null;
        _0xabb49d.bNick = _0xd54ce1 ? _0x449cb9.readStringZeroUtf8() : null;
        _0xabb49d.isVirus = _0x3d627b;
        _0xabb49d.isEjected = _0x26f542;
        // classify AFTER isVirus/isEjected/ownerId are up to date for this
        // packet - doing this earlier misclassified brand-new cells (e.g.
        // fresh split pieces) as food for one tick, since they still had
        // stale defaults at that point.
        _0xabb49d.isFood = this.checkIsFood(_0xabb49d);
      }
      _0x9e119e = _0x449cb9.readUInt16();
      for (_0xbdb90c = 0; _0xbdb90c < _0x9e119e; _0xbdb90c++) {
        _0x468d84 = _0x449cb9.readUInt32();
        _0x14d4a3.removeCell(_0x468d84, _0x43ee07);
      }
    }
    static ["checkIsFood"](_0x451fee) {
      // Matches 3rb.js's handleNodes exactly: a cell is Food unless the
      // server attached an owner/parent player id to it (and it's not a
      // virus/ejected mass). NOT based on whether it currently has a
      // nickname - real players can be legitimately unnamed, and a cell's
      // nick can lag its ownerId by a packet or two, both of which used to
      // get misclassified as food (flat single-color render, no name/skin/
      // mass) until the next full resync, e.g. on split.
      return !_0x451fee.isMine && !_0x451fee.isVirus && !_0x451fee.isEjected && -1 === _0x451fee.ownerId;
    }
    static ["getSpectateData"](_0x111b6e) {
      _0xddb6d6.spectatePoint.x = _0x111b6e.readFloat32();
      _0xddb6d6.spectatePoint.y = _0x111b6e.readFloat32();
      _0xddb6d6.autoZoomViewport = _0x111b6e.readFloat32();
    }
    static ["clearCells"](_0x402088) {
      if (1 === _0x402088) {
        _0x14d4a3.cells.clear();
        _0x14d4a3.myCellsIDs.clear();
        _0x14d4a3.myCells.clear();
      } else {
        _0x14d4a3.cells2.clear();
        _0x14d4a3.myCellsIDs2.clear();
        _0x14d4a3.myCells2.clear();
      }
    }
    static ["clearMyCells"](_0x2ebd53) {
      if (1 === _0x2ebd53) {
        _0x14d4a3.myCellsIDs.clear();
        _0x14d4a3.myCells.clear();
      } else {
        _0x14d4a3.myCellsIDs2.clear();
        _0x14d4a3.myCells2.clear();
      }
    }
    static ["getMyCellId"](_0x5d6513, _0x5c4a06) {
      const _0x5d61ff = 1 === _0x5c4a06 ? _0x14d4a3.myCellsIDs : _0x14d4a3.myCellsIDs2;
      const _0x22f304 = _0x5d6513.readUInt32();
      _0x5d61ff.add(_0x22f304);
    }
    static ["getLeaderboard"](_0x51f993) {
      _0xa916b.clear();
      let _0x1f42cb;
      let _0x2539a8;
      let _0x58f5fe = _0x51f993.readUInt16();
      for (_0x1f42cb = 0; _0x1f42cb < _0x58f5fe; _0x1f42cb++) {
        _0x2539a8 = (_0x2539a8 = _0x51f993.readStringZeroUtf8()) || "unnamed cell";
        _0xa916b.add(_0x2539a8, _0x1f42cb + 1, false, false, false);
      }
      _0xa916b.update();
    }
    static ["getLeaderboardFFA"](_0x1d0b9f) {
      _0xa916b.clear();
      let _0x41a400;
      let _0x35833d;
      let _0x54147a;
      let _0x19bafb;
      let _0x4599fc = _0x1d0b9f.readUInt16();
      for (_0x41a400 = 0; _0x41a400 < _0x4599fc; _0x41a400++) {
        _0x35833d = _0x1d0b9f.readUInt16();
        _0x54147a = _0x1d0b9f.readUInt32();
        _0x19bafb = _0x1d0b9f.readStringZeroUtf8() || "unnamed cell";
        _0xa916b.add(_0x19bafb, _0x35833d || 1, false, false, false, _0x54147a);
      }
      _0xa916b.update();
    }
    static ["getLeaderboardTeam"](_0x96914f) {
      _0xa916b.clear();
      let _0x59ed1e;
      let _0x1272e4 = _0x96914f.readUInt32();
      let _0x225f6e = [];
      for (_0x59ed1e = 0; _0x59ed1e <= _0x1272e4 && !_0x96914f.endOfBuffer(); _0x59ed1e++) {
        _0x225f6e.push(_0x96914f.readFloat32());
      }
      _0xa916b.team(_0x225f6e[0], _0x225f6e[1], _0x225f6e[2]);
    }
    static ["borderUpdate"](_0x222f96, _0x1b97a8) {
      const _0x4d3085 = 0 | _0x222f96.readFloat64();
      const _0x4fc544 = 0 | _0x222f96.readFloat64();
      const _0x5c57dc = 0 | _0x222f96.readFloat64();
      const _0x3fb1e9 = 0 | _0x222f96.readFloat64();
      // Trailing field 3rb.js's own handleBorder also reads (this.game.pID)
      // - this connection's own real player id, used to tell "my own cell"
      // apart from everyone else's for the right-click party-invite menu.
      const _0x8d2c4a = _0x222f96.readUInt32();
      if (1 === _0x1b97a8) {
        _0x996564.update(_0x4d3085, _0x4fc544, _0x5c57dc, _0x3fb1e9);
        _0x996564.pID = _0x8d2c4a;
      } else {
        _0x996564.update2(_0x4d3085, _0x4fc544, _0x5c57dc, _0x3fb1e9);
        _0x996564.pID2 = _0x8d2c4a;
      }
    }
    static ["bytesToColor"](_0x191b5f, _0x422824, _0x26702a) {
      return (
        "#" +
        ("00" + (~~_0x191b5f).toString(16)).slice(-2) +
        ("00" + (~~_0x422824).toString(16)).slice(-2) +
        ("00" + (~~_0x26702a).toString(16)).slice(-2)
      );
    }
  }
  class _0x302a2c {
    static async ["init"](_0x578a51) {
      if (3 !== _0x578a51) {
        this.handleDisabledProperty(true);
      }
      this.handshake1(_0x578a51);
      const _0x1c80ec = await this.handshake2(_0x578a51);
      if (!_0x1c80ec) {
        const _0x4280a7 = 1 === _0x578a51 ? _0x18a8d1.ws : 2 === _0x578a51 ? _0x18a8d1.ws2 : _0x18a8d1.ws3;
        try {
          _0x4280a7 && _0x4280a7.close();
        } catch (_0x13de36) {}
        return;
      }
      this.initPingLoop(_0x578a51);
      if (3 === _0x578a51) {
        _0x18a8d1.connected3 = true;
        _0x18a8d1.backupReady = true;
        _0x18a8d1.backupConnecting = false;
        console.log("[DarkEndymion] Standby Tab 3 ready");
        return;
      }
      this.accountPacketSent = false;
      _0xddb6d6.isSpectating = false;
      _0xddb6d6.freeSpectate = false;
      console.log("Connected to: " + _0x18a8d1.ip);
      if (1 === _0x578a51) {
        _0x18a8d1.connected = true;
      } else {
        _0x18a8d1.connected2 = true;
      }
      if (_0x18a8d1.connected && _0x18a8d1.connected2) {
        this.handleDisabledProperty(false);
        _0x18a8d1.scheduleBackup();
      }
    }
    static ["handleDisabledProperty"](_0x1b3281) {
      const _0x48816c = document.querySelector("#button-play");
      const _0x3f42f4 = document.querySelector("#button-spectate");
      if (_0x48816c) _0x48816c.disabled = _0x1b3281;
      if (_0x3f42f4) _0x3f42f4.disabled = _0x1b3281;
    }
    static ["createView"](_0x19fbe3) {
      return new DataView(new ArrayBuffer(_0x19fbe3));
    }
    static ["chekConnection"](_0x26b575) {
      return (
        (1 === _0x26b575 && _0x18a8d1.connected) ||
        (2 === _0x26b575 && _0x18a8d1.connected2) ||
        (3 === _0x26b575 && _0x18a8d1.connected3)
      );
    }
    static ["sendPacket"](_0x4bcbe9, _0x51333e) {
      _0x18a8d1.send(_0x4bcbe9.buffer, _0x51333e);
    }
    static ["initPingLoop"](_0x185c33) {
      if (!this.pingIntervals) this.pingIntervals = new Map();
      this.stopPingLoop(_0x185c33);
      const _0x20e5dd = setInterval(() => {
        _0x18a8d1.send(new Uint8Array([100]).buffer, _0x185c33);
      }, 1000);
      this.pingIntervals.set(_0x185c33, _0x20e5dd);
    }
    static ["stopPingLoop"](_0x185c33) {
      if (!this.pingIntervals) return;
      const _0x20e5dd = this.pingIntervals.get(_0x185c33);
      if (_0x20e5dd) clearInterval(_0x20e5dd);
      this.pingIntervals.delete(_0x185c33);
    }
    static ["stopAllPingLoops"]() {
      if (!this.pingIntervals) return;
      this.pingIntervals.forEach((_0x20e5dd) => clearInterval(_0x20e5dd));
      this.pingIntervals.clear();
    }
    static ["handshake1"](_0x5f0055) {
      const _0x36884a = new Uint8Array([255, 0, 0]);
      _0x18a8d1.send(_0x36884a, _0x5f0055);
    }
    static async ["handshake2"](_0x340056) {
      var _0x556654;
      try {
        _0x556654 = await _0x18a8d1.getToken(_0x340056);
      } catch (_0x2f8e1c) {
        console.log("Multibox: failed to get captcha token for tab " + _0x340056 + ":", _0x2f8e1c);
        return false;
      }
      var _0x1e3fda = new DataView(new ArrayBuffer(_0x556654.length + 3));
      var _0x256006 = 0;
      _0x1e3fda.setUint8(_0x256006++, 123);
      _0x1e3fda.setUint8(_0x256006++, 6);
      _0x556654.split("").forEach((_0x19bda2) => _0x1e3fda.setUint8(_0x256006++, _0x19bda2.charCodeAt(0)));
      _0x1e3fda.setUint8(_0x256006++, 0);
      _0x18a8d1.send(_0x1e3fda.buffer, _0x340056);
      return true;
    }
    static ["mouse"](_0x5b3cbc, _0x1226e6) {
      const _0x5b1e06 = _0x90a1a7.typeID;
      if (this.chekConnection(_0x5b1e06)) {
        const _0x1d42bf = this.createView(17);
        _0x1d42bf.setUint8(0, 16, true);
        _0x1d42bf.setFloat64(1, Math.fround(~~_0x5b3cbc), true);
        _0x1d42bf.setFloat64(9, Math.fround(~~_0x1226e6), true);
        this.sendPacket(_0x1d42bf, _0x5b1e06);
      }
    }
    static ["chat"](_0x135efd, _0x27786b = _0x90a1a7.typeID) {
      if (this.chekConnection(_0x27786b)) {
        const _0x207ee8 = unescape(encodeURIComponent(_0x135efd));
        const _0x1d139a = this.createView(6 + _0x207ee8.length);
        _0x1d139a.setUint8(0, 86);
        _0x1d139a.setUint8(1, 255);
        _0x1d139a.setUint8(2, 255);
        _0x1d139a.setUint8(3, 255);
        _0x1d139a.setUint8(4, 255);
        for (let _0xd39348 = _0x207ee8.length; _0xd39348--; ) {
          _0x1d139a.setUint8(_0xd39348 + 5, _0x207ee8.charCodeAt(_0xd39348), true);
        }
        _0x1d139a.setUint8(5 + _0x207ee8.length, 0, true);
        this.sendPacket(_0x1d139a, _0x27786b);
      }
    }
    static ["spectate"](_0x73a4f5) {
      const _0x300d14 = _0x73a4f5 || 1;
      if (this.chekConnection(_0x300d14) || (!_0x90a1a7.isAlive && !_0xddb6d6.isSpectating) || _0x73a4f5) {
        const _0x3640ce = this.createView(1);
        _0x3640ce.setUint8(0, 1, true);
        this.sendPacket(_0x3640ce, _0x300d14);
        _0xddb6d6.isSpectating = true;
        if (!_0x90a1a7.isAlive) {
          _0xddb6d6.targetViewport = 0.1;
        }
      }
    }
    static ["spectateBackground"](_0x4a2f7c) {
      // Same request packet as spectate(), but deliberately skips touching
      // _0xddb6d6.isSpectating/targetViewport - those drive the visible
      // camera and spectate UI, and this is only meant to make an idle tab
      // feed spectatePoint in the background while the other tab is being
      // actively played.
      if (this.chekConnection(_0x4a2f7c)) {
        const _0x1f9c3e = this.createView(1);
        _0x1f9c3e.setUint8(0, 1, true);
        this.sendPacket(_0x1f9c3e, _0x4a2f7c);
      }
    }
    static ["spawn"]() {
      return this.spawnTab(_0x90a1a7.typeID);
    }
    static ["spawnTab"](_0x115240) {
      if (3 === _0x115240) return;
      if (this.chekConnection(_0x115240) && ((!_0x90a1a7._isAlive && 1 === _0x115240) || (!_0x90a1a7._isAlive2 && 2 === _0x115240))) {
        _0xddb6d6.isSpectating = false;
        if ("" === _0x90a1a7.nick) {
          _0x90a1a7.nick = "Unnamed cell";
        }
        let _0x4a58df = unescape(encodeURIComponent(_0x90a1a7.nick));
        let _0x1084d5 = unescape(encodeURIComponent("free/" + _0x2a0c5c.arbSkin));
        const _0x4208f8 = {
          n: _0x4a58df,
        };
        if (_0x90a1a7.arbSkin) {
          _0x4208f8.s = _0x1084d5;
          _0x4208f8.w = "";
        }
        const _0x428efe = JSON.stringify(_0x4208f8);
        const _0x301649 = _0x428efe.length;
        const _0x314127 = this.createView(2 + _0x301649);
        _0x314127.setUint8(0, 0, true);
        for (let _0x2e9472 = 0; _0x2e9472 < _0x301649; _0x2e9472++) {
          _0x314127.setUint8(_0x2e9472 + 1, _0x428efe.charCodeAt(_0x2e9472), true);
        }
        _0x314127.setUint8(_0x301649 + 1, 0, true);
        this.sendPacket(_0x314127, _0x115240);
      }
    }
    static ["split"]() {
      const _0x1fd00d = _0x90a1a7.typeID;
      if (this.chekConnection(_0x1fd00d)) {
        const _0x2a8e00 = this.createView(1);
        _0x2a8e00.setUint8(0, 17, true);
        this.sendPacket(_0x2a8e00, _0x1fd00d);
      }
    }
    static ["eject"]() {
      const _0x25abd0 = _0x90a1a7.typeID;
      if (this.chekConnection(_0x25abd0)) {
        const _0x1b92ea = this.createView(1);
        _0x1b92ea.setUint8(0, 21, true);
        this.sendPacket(_0x1b92ea, _0x25abd0);
      }
    }
    static ["freeSpectate"]() {
      if (this.chekConnection(1)) {
        _0xddb6d6.freeSpectate = !_0xddb6d6.freeSpectate;
        const _0x2272b3 = this.createView(1);
        _0x2272b3.setUint8(0, 18, true);
        this.sendPacket(_0x2272b3, 1);
      }
    }
    // Native party protocol (opcode 85/0x55, matches 3rb.js's own
    // `sendParty`): byte 1 is the sub-type - 0 = create, 1 = join (followed
    // by the zero-terminated party code, "#" included).
    static ["createParty"](_0x8f3a1c) {
      if (this.chekConnection(_0x8f3a1c)) {
        const _0x2c9d5e = this.createView(2);
        _0x2c9d5e.setUint8(0, 85, true);
        _0x2c9d5e.setUint8(1, 0, true);
        this.sendPacket(_0x2c9d5e, _0x8f3a1c);
      }
    }
    static ["joinParty"](_0x6b1e4a, _0x8f3a1c) {
      if (this.chekConnection(_0x8f3a1c)) {
        const _0x4d7f2b = unescape(encodeURIComponent(_0x6b1e4a));
        const _0x9e3c8d = this.createView(2 + _0x4d7f2b.length + 1);
        _0x9e3c8d.setUint8(0, 85, true);
        _0x9e3c8d.setUint8(1, 1, true);
        for (let _0x1a5f9e = 0; _0x1a5f9e < _0x4d7f2b.length; _0x1a5f9e++) {
          _0x9e3c8d.setUint8(2 + _0x1a5f9e, _0x4d7f2b.charCodeAt(_0x1a5f9e), true);
        }
        _0x9e3c8d.setUint8(2 + _0x4d7f2b.length, 0, true);
        this.sendPacket(_0x9e3c8d, _0x8f3a1c);
      }
    }
    static ["leaveParty"](_0x7d2e9f) {
      if (this.chekConnection(_0x7d2e9f)) {
        const _0x3b8c1a = this.createView(2);
        _0x3b8c1a.setUint8(0, 85, true);
        _0x3b8c1a.setUint8(1, 2, true);
        this.sendPacket(_0x3b8c1a, _0x7d2e9f);
      }
    }
  }
  class _0x1530af {
    static ["init"]() {
      this.ip = "";
      this.ws = null;
      this.connected = false;
      // Plain browser WebSocket now (was socket.io-client) - every
      // Socket.IO-specific bug hunted down this session (version/EIO
      // handshake mismatches, ping/pong tuning, the Manager's own opaque
      // reconnect state machine dropping in-flight sends) was a symptom of
      // that abstraction layer, not the actual network. A raw WebSocket
      // has none of that hidden machinery - what you see here IS the
      // connection logic. MUST be wss:// (not https://): beta.3rb.io is
      // loaded over HTTPS, and browsers silently drop any plain ws://
      // connection an HTTPS page tries to open (mixed content) - the
      // socket just never opens, no error is ever thrown. If this is
      // pointed at a self-signed cert, open that URL once directly in this
      // browser first and click through the "not secure" warning,
      // otherwise this will never connect.
      this.url = "wss://157.180.84.143:8443";
      // The relay is a single shared deployment - everyone who connects
      // without a room ends up seeing everyone else. Tab 1 + tab 2 share
      // one relay connection (see _0x2d5cce), so a private per-browser room
      // is the default (only your own two tabs see each other). Two other,
      // independent things can override that default room selection - see
      // updateRoom(): a shared "tag" (ambient, persists across sessions,
      // set once and just works with anyone else using the same tag) and a
      // native party (explicit invite/accept, takes priority over tag
      // while active - see _0x7c92e1).
      this.privateRoom = _0x19d5af.get("multibox", "privateRoom") || this.generateCode(16);
      _0x19d5af.set("multibox", "privateRoom", this.privateRoom);
      this.room = this.computeRoom();
      // reqId -> retry timer, for sendReliable()'s ack tracking (opcode 65
      // out / 6 in - see relay-server.js). A plain incrementing counter is
      // fine: it only needs to be unique among *currently in-flight*
      // reliable sends, not globally.
      this.pendingAcks = new Map();
      this._nextReqId = 1;
      this.reconnectAttempt = 0;
      this.reconnectTimer = null;
      this.connect();
    }
    static ["generateCode"](_0x2f6a4d) {
      const _0x8c1e5b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let _0x4d9a2f = "";
      for (let _0x3b7c1a = 0; _0x3b7c1a < _0x2f6a4d; _0x3b7c1a++) {
        _0x4d9a2f += _0x8c1e5b[0 | (Math.random() * _0x8c1e5b.length)];
      }
      return _0x4d9a2f;
    }
    static ["nextReqId"]() {
      this._nextReqId = (this._nextReqId + 1) & 0xffffffff;
      return this._nextReqId;
    }
    static ["connect"]() {
      if ("undefined" === typeof WebSocket) {
        return console.log("Multibox sync: WebSocket is not available in this page, cannot connect to " + this.url);
      }
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
      const _0x2c3d4e = this.url + "?room=" + encodeURIComponent(this.room);
      this.ws = new WebSocket(_0x2c3d4e);
      this.ws.binaryType = "arraybuffer";
      this.ws.onopen = () => {
        console.log("Endymion tag sync: connected to " + this.url);
        this.reconnectAttempt = 0;
        this.onOpen();
      };
      this.ws.onmessage = (_0x4a1f0e) => {
        this.onMessage(_0x4a1f0e);
      };
      this.ws.onclose = (_0x2b6e4f) => {
        console.log("Endymion tag sync: disconnected (code " + _0x2b6e4f.code + ")");
        this.onClose();
        this.scheduleReconnect();
      };
      this.ws.onerror = (_0x1a9c7d) => {
        console.log("Endymion tag sync: socket error", _0x1a9c7d);
        this.onError();
      };
    }
    static ["scheduleReconnect"]() {
      if (this.reconnectTimer) {
        return;
      }
      // Simple capped exponential backoff, entirely our own and visible -
      // no library-internal heuristics deciding when/whether to retry.
      const _0x3d4e5f = Math.min(1000 * Math.pow(2, this.reconnectAttempt), 15000);
      this.reconnectAttempt++;
      this.reconnectTimer = setTimeout(() => {
        this.reconnectTimer = null;
        this.connect();
      }, _0x3d4e5f);
    }
    static ["switchRoom"](_0x1d8e4a) {
      if (this.room === _0x1d8e4a) {
        return;
      }
      this.room = _0x1d8e4a;
      this.reconnectAttempt = 0;
      this.disconnect();
      this.connect();
    }
    static ["sanitize"](_0x2b3c4d, _0x5e6f7a) {
      // The relay's own room sanitizer only accepts [A-Z0-9_-], so strip
      // anything else first (native party codes look like "#NAKO6UI") -
      // otherwise it'd reject the room id and silently fall back to one
      // shared default for everyone, defeating isolation. Prefixed per
      // source so a tag can never collide with an unrelated party code (or
      // vice versa) that happens to sanitize to the same string.
      const _0x8a1b2c = String(_0x5e6f7a || "")
        .replace(/[^A-Za-z0-9_-]/g, "")
        .toUpperCase();
      return _0x8a1b2c ? _0x2b3c4d + _0x8a1b2c : null;
    }
    static ["computeRoom"]() {
      // Native party (explicit invite/accept) takes priority over tag - a
      // party is a deliberate, one-off grouping; tag is the ambient,
      // persistent one that just works with anyone else using the same
      // value, no invite step needed. Falls back to the private room when
      // neither applies.
      if (_0x7c92e1.inParty && _0x7c92e1.code) {
        const _0x9c1d2e = this.sanitize("P_", _0x7c92e1.code);
        if (_0x9c1d2e) {
          return _0x9c1d2e;
        }
      }
      const _0x4d5e6f = this.sanitize("T_", _0x90a1a7.tag);
      return _0x4d5e6f || this.privateRoom;
    }
    static ["updateRoom"]() {
      this.switchRoom(this.computeRoom());
    }
    static ["disconnect"]() {
      // Strip handlers before closing so a late event from the old socket
      // (e.g. its "close" firing after switchRoom() has already opened a
      // new one) can't stomp on the new connection's state through onOpen/
      // onClose, which both write to this same static class either way.
      if (this.ws) {
        this.ws.onopen = this.ws.onmessage = this.ws.onclose = this.ws.onerror = null;
        this.ws.close();
      }
      this.ws = null;
      this.connected = false;
    }
    static ["isOpen"]() {
      return !!(this.ws && this.connected && this.ws.readyState === WebSocket.OPEN);
    }
    static ["send"](_0x13f21e) {
      if (this.isOpen()) {
        this.ws.send(_0x13f21e);
      }
    }
    static ["sendVolatile"](_0x13f21e) {
      // A raw WebSocket has no "volatile" concept to delegate to (that was
      // Socket.IO-specific) - readyState===OPEN is the only "is this safe
      // to write right now" signal actually available, which is exactly
      // what send() already checks, so this is just an alias. Kept as its
      // own method so call sites (commander) still read as "this one is
      // fine to drop, no retry needed" rather than implying reliability.
      this.send(_0x13f21e);
    }
    static ["sendReliable"](_0x13f21e, _0x2c3d4e, _0x3e4f5a = 3) {
      // Delivery isn't guaranteed just because readyState says OPEN right
      // now: a packet handed to a socket whose transport dies moments
      // later (mid-reconnect) is simply gone, no error, no retry. This
      // pairs with the relay server acking opcode 65 with an opcode 6
      // reply carrying the same reqId (_0x2c3d4e) - see relay-server.js -
      // and resends up to a couple more times on silence, stopping early
      // once ackReceived() fires or if this exact socket instance gets
      // replaced by a reconnect in the meantime (a fresh connection
      // resyncs its own state; resending a stale packet on it is pointless).
      if (!this.isOpen()) {
        return;
      }
      const _0x1a2b3c = this.ws;
      this.ws.send(_0x13f21e);
      if (_0x3e4f5a > 1) {
        const _0x4b5c6d = setTimeout(() => {
          this.pendingAcks.delete(_0x2c3d4e);
          if (this.ws === _0x1a2b3c && this.isOpen()) {
            this.sendReliable(_0x13f21e, _0x2c3d4e, _0x3e4f5a - 1);
          }
        }, 3000);
        this.pendingAcks.set(_0x2c3d4e, _0x4b5c6d);
      } else {
        this.pendingAcks.delete(_0x2c3d4e);
      }
    }
    static ["ackReceived"](_0x2c3d4e) {
      const _0x4b5c6d = this.pendingAcks.get(_0x2c3d4e);
      if (_0x4b5c6d) {
        clearTimeout(_0x4b5c6d);
        this.pendingAcks.delete(_0x2c3d4e);
      }
    }
    static ["onOpen"]() {
      this.connected = true;
      _0x2d5cce.init();
    }
    static ["onMessage"](_0x1ffd4c) {
      _0x7a58b0.parse(_0x1ffd4c);
    }
    static ["onClose"]() {
      this.connected = false;
      console.log("Disconnected from networks.");
    }
    static ["onError"]() {
      this.connected = false;
      console.log("Connection to networks errored out!");
    }
  }
  class _0x12ac51 {
    static ["init"]() {
      const _0x399fc8 = {
        totalMass: 0x0,
        alive: 0x0,
        spectate: 0x0,
      };
      const _0x4fbb9e = {
        totalMass: 0x0,
        alive: 0x0,
        spectate: 0x0,
      };
      const _0x5e31b7 = {
        1: _0x399fc8,
        2: _0x4fbb9e,
      };
      _0x1530af.init();
      this.teamPlayers = new Map();
      this.selfID = -1;
      this.isSpectator = false;
      this.teamAlternator = true;
      this.teamData = _0x5e31b7;
      this.biggestIsOn = false;
      this.biggest = new _0xb33099(0);
    }
    static ["clear"]() {
      this.teamPlayers.clear();
      console.log("cleared");
    }
    static ["remove"](_0x3660b6) {
      this.teamPlayers["delete"](_0x3660b6);
    }
    static ["getPlayer"](_0x47e4e6) {
      if (_0x47e4e6 === this.selfID) {
        return {};
      }
      let _0x1666d0 = this.teamPlayers.get(_0x47e4e6);
      if (undefined === _0x1666d0) {
        _0x1666d0 = this.newPlayer(_0x47e4e6);
      }
      return _0x1666d0;
    }
    static ["newPlayer"](_0x142a67) {
      const _0x1486ac = new _0xb33099(_0x142a67);
      this.teamPlayers.set(_0x142a67, _0x1486ac);
      return _0x1486ac;
    }
    static ["chat"](_0x34245f, _0x164dbf, _0x3a86a2, _0x3d910f) {
      let _0x3f5768 = _0x3d910f || "Anonymous";
      if (_0x3d910f || _0x34245f !== this.selfID) {
        const _0x2e574e = this.teamPlayers.get(_0x34245f);
        if (undefined !== _0x2e574e) {
          _0x3f5768 = _0x2e574e.nick;
        }
      } else {
        _0x3f5768 = _0x90a1a7.nick;
      }
      if (1 === _0x164dbf || 3 === _0x164dbf) {
        _0x40f48a.normal(_0x3f5768, _0x3a86a2, "private");
      } else if (2 == _0x164dbf) {
        _0x40f48a.command(_0x3f5768, _0x3a86a2, "private");
      }
    }
  }
  class _0x7a58b0 {
    static ["parse"](_0x53d82a) {
      const _0x34aecd = new DataView(_0x53d82a.data);
      const _0x345da0 = new _0x4c265b(_0x34aecd);
      const _0x4399b2 = _0x345da0.readUInt8();
      if (1 === _0x4399b2) {
        this.update(_0x345da0);
      } else if (2 === _0x4399b2) {
        this.chat(_0x345da0);
      } else if (3 === _0x4399b2) {
        this.commander(_0x345da0);
      } else if (4 === _0x4399b2) {
        this.selfID(_0x345da0);
      } else if (5 === _0x4399b2) {
        this.prePlayers(_0x345da0);
      } else if (6 === _0x4399b2) {
        this.ack(_0x345da0);
      }
    }
    static ["update"](_0x3adb12) {
      // Do NOT re-send positionMass()/biggest() here in response to an
      // incoming update: the relay broadcasts to everyone in the room
      // *except* the sender, so a reactive resend here creates a
      // self-sustaining feedback loop the instant a second real client is
      // in the room (their update triggers your resend, which triggers
      // the relay to broadcast to them, which triggers their resend,
      // forever, bounded only by round-trip latency) - this was the cause
      // of the CPU/traffic spike that only appeared once a teammate
      // joined. The 250ms heartbeat (see _0x386cbc's interval setup)
      // already keeps both fresh on a fixed, bounded schedule without
      // depending on teammate traffic to trigger it, so this reactive
      // path is redundant on top of being a footgun.
      const _0x125d15 = _0x12ac51.teamAlternator ? 1 : 2;
      const _0x10fd99 = _0x12ac51.teamData[_0x125d15];
      _0x10fd99.totalMass = 0;
      _0x10fd99.alive = 0;
      _0x10fd99.spectate = 0;
      let _0x5902ec = _0x3adb12.readUInt8();
      for (; _0x5902ec--; ) {
        const _0x29beeb = _0x3adb12.readUInt32();
        _0x12ac51.remove(_0x29beeb);
      }
      for (_0x5902ec = _0x3adb12.readUInt8(); _0x5902ec--; ) {
        const _0x4f2cf7 = _0x3adb12.readUInt32();
        const _0x5aa296 = _0x12ac51.getPlayer(_0x4f2cf7);
        const _0x51b623 = _0x3adb12.readUInt8();
        if (1 & _0x51b623) {
          const _0x442708 = _0x3adb12.readStringZeroUtf8();
          if (2 === _0x5aa296.isNew) {
            _0x40f48a.alert(_0x442708, "joined the chatroom.", "private");
            _0x5aa296.isNew = 1;
          } else if (1 === _0x5aa296.isNew) {
            _0x40f48a.alert(_0x5aa296.nick, "changed name to " + _0x442708, "private");
          }
          _0x5aa296.nick = _0x442708;
        }
        if (2 & _0x51b623) {
          const _0x5a641d = _0x3adb12.readUInt8();
          const _0x510beb = _0x3adb12.readUInt8();
          const _0x32ba28 = _0x3adb12.readUInt8();
          _0x5aa296.colorHex = "#" + (16777216 + (_0x5a641d << 16) + (_0x510beb << 8) + _0x32ba28).toString(16).slice(1);
        }
        if (4 & _0x51b623) {
          _0x5aa296.skin = _0x3adb12.readUTF8string();
        }
        if (16 & _0x51b623) {
          _0x5aa296.x = _0x3adb12.readInt16();
          _0x5aa296.y = _0x3adb12.readInt16();
          _0x5aa296.mass = _0x3adb12.readUInt32();
        }
        if (32 & _0x51b623) {
          _0x5aa296.isAlive = _0x3adb12.readUInt8();
        }
        if (64 & _0x51b623) {
          _0x5aa296.isRGB = _0x3adb12.readUInt8();
        }
        _0x5aa296.team = _0x125d15;
        if (_0x5aa296.isAlive) {
          _0x10fd99.totalMass += _0x5aa296.mass;
          _0x10fd99.alive++;
        } else {
          _0x10fd99.spectate++;
        }
      }
      const _0x2a227e = _0x3adb12.readUInt8();
      _0x12ac51.biggestIsOn = _0x2a227e;
      if (_0x2a227e) {
        _0x12ac51.biggest.x = _0x3adb12.readInt16();
        _0x12ac51.biggest.y = _0x3adb12.readInt16();
      }
    }
    static ["prePlayers"](_0x4641e7) {
      _0x12ac51.clear();
      for (let _0x49a4c3 = _0x4641e7.readUInt8(); _0x49a4c3--; ) {
        const _0x552c8d = _0x4641e7.readUInt32();
        const _0xfe2e6f = _0x12ac51.newPlayer(_0x552c8d);
        _0xfe2e6f.nick = _0x4641e7.readStringZeroUtf8();
        const _0x3b4ef2 = _0x4641e7.readUInt8();
        const _0x2b4c89 = _0x4641e7.readUInt8();
        const _0x272dc2 = _0x4641e7.readUInt8();
        _0xfe2e6f.colorHex = "#" + (16777216 + (_0x3b4ef2 << 16) + (_0x2b4c89 << 8) + _0x272dc2).toString(16).slice(1);
        _0xfe2e6f.skin = _0x4641e7.readUTF8string();
        _0xfe2e6f.x = _0x4641e7.readInt16();
        _0xfe2e6f.y = _0x4641e7.readInt16();
        _0xfe2e6f.mass = _0x4641e7.readUInt32();
        _0xfe2e6f.isAlive = _0x4641e7.readUInt8();
        _0xfe2e6f.isRGB = _0x4641e7.readUInt8();
      }
    }
    static ["chat"](_0x4740d4) {
      const _0x312577 = _0x4740d4.readUInt32();
      const _0x28e339 = _0x4740d4.readUInt8();
      const _0x1b29af = _0x4740d4.readStringZeroUtf8();
      if (3 === _0x28e339) {
        const _0x59cd24 = _0x1b29af.split("");
        _0x12ac51.chat(_0x312577, _0x28e339, _0x59cd24[1], _0x59cd24[0]);
      } else {
        _0x12ac51.chat(_0x312577, _0x28e339, _0x1b29af);
      }
    }
    static ["commander"](_0x545a15) {
      // Raw world coordinates, no offset - same fix as positionMass()/
      // biggest(): _0x996564.offset assumes the border is always -8000,
      // which isn't guaranteed for every server. Adding it back here (when
      // the sender no longer subtracts anything but a tab2 visual-shift,
      // if any) was producing wildly out-of-bounds points, e.g. y=-11279.
      const _0x442e7f = _0x545a15.readInt16();
      const _0x3a9146 = _0x545a15.readInt16();
      const _0x5d143c = _0xb45f1b.time;
      const _0x14eb93 = {
        x: _0x442e7f,
        y: _0x3a9146,
        time: _0x5d143c,
      };
      _0x386cbc.commanderPoints.add(_0x14eb93);
    }
    static ["selfID"](_0x2c6ab1) {
      const _0x4e5b0c = _0x2c6ab1.readUInt32();
      _0x12ac51.selfID = _0x4e5b0c;
    }
    static ["ack"](_0x2c6ab1) {
      const _0x3d7e8f = _0x2c6ab1.readUInt32();
      _0x1530af.ackReceived(_0x3d7e8f);
    }
  }
  class _0x2d5cce {
    static ["init"]() {
      console.log("Connected to Networks.");
      // connected is already set true by _0x1530af.onOpen() before this runs.
      this.nick();
      this.skin();
      this.tag();
      this.color();
      this.ip();
      this.aliveStatus();
      this.rgbMode();
      if (_0x12ac51.isSpectator) {
        this.spectator(true);
      }
    }
    static ["createView"](_0x3d6054) {
      return new DataView(new ArrayBuffer(_0x3d6054));
    }
    static ["nick"]() {
      if (_0x1530af.connected) {
        const _0x24245f = unescape(encodeURIComponent(_0x90a1a7.nick));
        let _0x599045 = _0x24245f.length;
        const _0x4523c2 = this.createView(2 + _0x24245f.length);
        for (_0x4523c2.setUint8(0, 1, true); _0x599045--; ) {
          _0x4523c2.setUint8(_0x599045 + 1, _0x24245f.charCodeAt(_0x599045), true);
        }
        _0x4523c2.setUint8(1 + _0x24245f.length, 0, true);
        _0x1530af.send(_0x4523c2.buffer);
      }
    }
    static ["color"]() {
      if (_0x1530af.connected) {
        const _0xcfacbc = this.createView(4);
        _0xcfacbc.setUint8(0, 2, true);
        _0xcfacbc.setUint8(1, _0x90a1a7.colorObject.r, true);
        _0xcfacbc.setUint8(2, _0x90a1a7.colorObject.g, true);
        _0xcfacbc.setUint8(3, _0x90a1a7.colorObject.b, true);
        _0x1530af.send(_0xcfacbc.buffer);
      }
    }
    static ["skin"]() {
      if (_0x1530af.connected) {
        const _0x5e1baa = _0x90a1a7.skin;
        let _0x582581 = _0x5e1baa.length;
        const _0x15de34 = this.createView(2 + _0x5e1baa.length);
        for (_0x15de34.setUint8(0, 4, true); _0x582581--; ) {
          _0x15de34.setUint8(_0x582581 + 1, _0x5e1baa.charCodeAt(_0x582581), true);
        }
        _0x15de34.setUint8(1 + _0x5e1baa.length, 0, true);
        _0x1530af.send(_0x15de34.buffer);
      }
    }
    static ["ip"]() {
      if (_0x1530af.connected && _0x18a8d1.ip) {
        // _0x18a8d1.ip is a "wss://host:port/path" URL (this game's servers
        // are hostnames like alpha2.3rb.io, never a raw dotted-quad IPv4
        // address) - splitting that on "." never yields 4 octets, so
        // _0x5cf655[3] was always undefined and ".split(':')" on it threw.
        // That exception fired inside onOpen(), BEFORE it ever reached
        // _0x302a2c.init(tabNum) (which sends the actual handshake and
        // marks the tab connected) - so as soon as the relay socket was up,
        // every real-game connection silently stopped authenticating.
        // There's also nothing downstream that reads this once sent (the
        // relay's inbound update() decoder has no field bit for it), so if
        // the address isn't a real IPv4 host there's nothing useful to send
        // at all - just skip it instead of guessing.
        const _0x51a2c9 = _0x18a8d1.ip.match(/^wss?:\/\/([^:/]+)(?::(\d+))?/i);
        if (!_0x51a2c9) {
          return;
        }
        const _0x5cf655 = _0x51a2c9[1].split(".");
        if (4 !== _0x5cf655.length) {
          return;
        }
        const _0x2c8eb4 = this.createView(8);
        _0x2c8eb4.setUint8(0, 8, true);
        _0x2c8eb4.setUint8(1, 1, true);
        _0x2c8eb4.setUint8(2, 0 | _0x5cf655[0], true);
        _0x2c8eb4.setUint8(3, 0 | _0x5cf655[1], true);
        _0x2c8eb4.setUint8(4, 0 | _0x5cf655[2], true);
        _0x2c8eb4.setUint8(5, 0 | _0x5cf655[3], true);
        _0x2c8eb4.setUint16(6, 0 | _0x51a2c9[2], true);
        _0x1530af.send(_0x2c8eb4.buffer);
      }
    }
    static ["tag"]() {
      if (_0x1530af.connected) {
        const _0x35e0be = _0x90a1a7.tag;
        let _0x21b532 = _0x35e0be.length;
        const _0x427eb0 = this.createView(3 + _0x35e0be.length);
        _0x427eb0.setUint8(0, 8, true);
        for (_0x427eb0.setUint8(1, 2, true); _0x21b532--; ) {
          _0x427eb0.setUint8(_0x21b532 + 2, _0x35e0be.charCodeAt(_0x21b532), true);
        }
        _0x427eb0.setUint8(2 + _0x35e0be.length, 0, true);
        _0x1530af.send(_0x427eb0.buffer);
      }
    }
    static ["positionMass"]() {
      if (_0x1530af.connected) {
        const _0x56c21f = this.createView(9);
        _0x56c21f.setUint8(0, 16, true);
        // Send the raw world position, NOT offset-adjusted: `_0x996564.offset`
        // reflects *this* player's own border rect, which the receiving
        // client has no way to reverse (it never adds any offset back before
        // handing the value to mapX/mapY). Sending it pre-shifted by a
        // sender-only value that never gets undone is exactly what caused
        // teammates to show up in the wrong minimap sector.
        _0x56c21f.setInt16(1, 0 | _0x90a1a7.x, true);
        _0x56c21f.setInt16(3, 0 | _0x90a1a7.y, true);
        _0x56c21f.setUint32(5, _0x90a1a7.mass, true);
        _0x1530af.send(_0x56c21f.buffer);
      }
    }
    static ["aliveStatus"]() {
      if (_0x1530af.connected) {
        const _0x42182d = this.createView(2);
        const _0x4a1c40 = _0x90a1a7.isAlive ? 1 : 0;
        _0x42182d.setUint8(0, 32, true);
        _0x42182d.setUint8(1, _0x4a1c40, true);
        _0x1530af.send(_0x42182d.buffer);
      }
    }
    static ["chat"](_0x3b9cd8, _0x39cf3c) {
      if (_0x1530af.connected) {
        const _0x13b87d = unescape(encodeURIComponent(_0x39cf3c));
        // Opcode 65 (not 64): "chat, please ack" - reqId right after the
        // opcode lets the relay server echo it back (opcode 6) so
        // sendReliable() knows this exact send landed, distinct from the
        // plain fire-and-forget opcode 64 the server also still accepts.
        const _0x9c8d7e = _0x1530af.nextReqId();
        const _0x215c48 = this.createView(7 + _0x13b87d.length);
        _0x215c48.setUint8(0, 65, true);
        _0x215c48.setUint32(1, _0x9c8d7e, true);
        _0x215c48.setUint8(5, _0x3b9cd8, true);
        for (let _0x4d2d0f = _0x13b87d.length; _0x4d2d0f--; ) {
          _0x215c48.setUint8(_0x4d2d0f + 6, _0x13b87d.charCodeAt(_0x4d2d0f), true);
        }
        _0x215c48.setUint8(6 + _0x13b87d.length, 0, true);
        _0x40f48a.warn("RelayDebug", "chat SEND t=" + Date.now() + " room=" + _0x1530af.room + " reqId=" + _0x9c8d7e, "system");
        _0x1530af.sendReliable(_0x215c48.buffer, _0x9c8d7e);
      }
    }
    static ["commander"]() {
      if (_0x1530af.connected) {
        // Only remove tab2's visual-separation shift (_0x996564.position -
        // the delta used to draw tab2's cells apart from tab1's on the
        // shared canvas), not the border-derived offset/offset2 - same
        // fix as positionMass()'s own _0x90a1a7.x/y, which already only
        // subtracts this same shift. canvasX/Y is otherwise already a raw
        // world coordinate.
        const _0x37635b = { x: 0, y: 0 };
        const _0x5bcfa5 = 2 === _0x90a1a7.typeID ? _0x996564.position : _0x37635b;
        const _0xdd3cb5 = _0x128142.canvasX - _0x5bcfa5.x;
        const _0x33bfdb = _0x128142.canvasY - _0x5bcfa5.y;
        const _0x354f1b = this.createView(5);
        _0x354f1b.setUint8(0, 128, true);
        _0x354f1b.setInt16(1, 0 | _0xdd3cb5, true);
        _0x354f1b.setInt16(3, 0 | _0x33bfdb, true);
        _0x1530af.sendVolatile(_0x354f1b.buffer);
      }
    }
    static ["spectator"]() {}
    static ["rgbMode"]() {
      if (_0x1530af.connected) {
        const _0x2e4a9b = _0x90a1a7.isRGB ? 1 : 0;
        const _0x4a3312 = this.createView(3);
        _0x4a3312.setUint8(0, 0, true);
        _0x4a3312.setUint8(1, 8, true);
        _0x4a3312.setUint8(2, _0x2e4a9b, true);
        _0x1530af.send(_0x4a3312.buffer);
      }
    }
    static ["biggest"]() {
      if (_0x1530af.connected) {
        // Send the raw world position, same fix as positionMass() above -
        // spectatePoint.x/y comes straight from the real server's opcode 17
        // (getSpectateData), already a raw world coordinate. Subtracting
        // _0x996564.offset here pre-shifted it by a sender-only value that
        // the receiving side (_0x7a58b0.update -> _0x12ac51.biggest.x/y)
        // never adds back, which is what put the #1 marker in the wrong
        // minimap spot.
        const _0x4fac57 = this.createView(6);
        _0x4fac57.setUint8(0, 0, true);
        _0x4fac57.setUint8(1, 16, true);
        _0x4fac57.setInt16(2, 0 | _0xddb6d6.spectatePoint.x, true);
        _0x4fac57.setInt16(4, 0 | _0xddb6d6.spectatePoint.y, true);
        _0x1530af.send(_0x4fac57.buffer);
      }
    }
  }
  const _0x5b1e2f = {
    gold: "https://i.imgur.com/UaUVo47.png",
    blue: "https://i.imgur.com/hfYVnJ1.png",
    red: "https://i.imgur.com/WLOBWEh.png",
    purple: "https://i.imgur.com/sQTniJp.png",
    green: "https://i.imgur.com/MGZW8Qv.png",
    yellow: "https://i.imgur.com/Z84sBmj.png",
    orange: "https://i.imgur.com/tTDI9L8.png",
    turquoise: "https://i.imgur.com/bpT4ELJ.png",
    pink: "https://i.imgur.com/19Yl3H3.png",
    rainbow: "https://i.imgur.com/e8OLq9q.png",
  };
  class _0x386cbc {
    static ["init"]() {
      this.canvas = _0x24f9ab.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.pi2 = 2 * Math.PI;
      this.skinMap = new Map();
      this.downloadedSkins = new Map();
      this.knownSkins = {};
      this.commanderPoints = new Set();
      this.rgbTeammates = new Set();
      this.borderImages = new Map();
      this.indicator = this.cacheIndicator();
      this.getKnownSkins();
      _0x51fad0.init();
      _0x2ab3a8.init();
      this.resizeCanvas();
      _0x1c478d.onresize = () => {
        this.resizeCanvas();
      };
    }
    static ["resizeCanvas"]() {
      this.canvas.width = 0 | _0x1c478d.innerWidth;
      this.canvas.height = 0 | _0x1c478d.innerHeight;
    }
    static ["run"]() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.save();
      try {
        this.vanillaGrid();
        const _0x810445 = (this.canvas.width >> 1) / _0xddb6d6.viewport - _0xddb6d6.x;
        const _0x2de058 = (this.canvas.height >> 1) / _0xddb6d6.viewport - _0xddb6d6.y;
        this.ctx.scale(_0xddb6d6.viewport, _0xddb6d6.viewport);
        this.ctx.translate(_0x810445, _0x2de058);
        _0x2ab3a8.update();
        _0x51fad0.render();
        this.border();
        _0x4c0fb5.render();
        this.createSkinMap();
        this.createRGBset();
        this.mouseTracker();
        this.cells();
        this.commands();
        _0x34f3bb.cleaner();
      } finally {
        this.ctx.restore();
      }
    }
    static ["vanillaGrid"]() {
      if ("off" !== _0x2cc0f3.vanillaGrid) {
        const _0x68655c = this.ctx;
        const _0x2a7ec2 = _0xddb6d6.viewport;
        const _0x390693 = this.canvas.width / _0x2a7ec2;
        const _0x4ab074 = this.canvas.height / _0x2a7ec2;
        let _0x4d6612 = (-_0xddb6d6.x + _0x390693 / 2) % 50;
        let _0x173c0d = (-_0xddb6d6.y + _0x4ab074 / 2) % 50;
        _0x68655c.strokeStyle = _0x480be4.gridColor;
        _0x68655c.lineWidth = 0 | (Math.min(_0x480be4.gridWidth, 20) * _0xddb6d6.viewport);
        _0x68655c.globalAlpha = 0.2 * _0x2a7ec2;
        for (_0x68655c.beginPath(); _0x4d6612 < _0x390693; ) {
          _0x68655c.moveTo(_0x4d6612 * _0x2a7ec2, 0);
          _0x68655c.lineTo(_0x4d6612 * _0x2a7ec2, _0x4ab074 * _0x2a7ec2);
          _0x4d6612 += 50;
        }
        for (; _0x173c0d < _0x4ab074; ) {
          _0x68655c.moveTo(0, _0x173c0d * _0x2a7ec2);
          _0x68655c.lineTo(_0x390693 * _0x2a7ec2, _0x173c0d * _0x2a7ec2);
          _0x173c0d += 50;
        }
        _0x68655c.closePath();
        _0x68655c.stroke();
        _0x68655c.globalAlpha = 1;
      }
    }
    static ["border"]() {
      if ("default" === _0x480be4.borderStyle) {
        const _0x3f1e55 = this.ctx;
        const _0x1b4ff4 = _0x480be4.borderWidth >> 1;
        _0x3f1e55.strokeStyle = _0x480be4.borderColor;
        _0x3f1e55.lineWidth = _0x480be4.borderWidth;
        _0x3f1e55.strokeRect(
          _0x996564.left - _0x1b4ff4,
          _0x996564.top - _0x1b4ff4,
          _0x996564.edge + _0x480be4.borderWidth,
          _0x996564.edge + _0x480be4.borderWidth,
        );
      } else {
        this.animatedBorder(_0x480be4.borderStyle);
      }
    }
    static ["animatedBorder"](_0x2a9c74) {
      const _0x1a7f6e = _0x5b1e2f[_0x2a9c74];
      if (!_0x1a7f6e) {
        return;
      }
      const _0x4e8d2c = this.getBorderImage(_0x2a9c74, _0x1a7f6e);
      if (!_0x4e8d2c) {
        return;
      }
      const _0x3f1e55 = this.ctx;
      const _0x1b4ff4 = _0x480be4.borderWidth >> 1;
      const _0x9c3e1a = _0x996564.left - _0x1b4ff4;
      const _0x2f7b8d = _0x996564.top - _0x1b4ff4;
      const _0x6d4a2e = _0x996564.edge + _0x480be4.borderWidth;
      // Clip to a rectangular ring (outer border box minus the inner map
      // area) so the texture only ever paints the border band - regardless
      // of the source image's actual transparency, the play area itself
      // can never get covered.
      _0x3f1e55.save();
      _0x3f1e55.beginPath();
      _0x3f1e55.rect(_0x9c3e1a, _0x2f7b8d, _0x6d4a2e, _0x6d4a2e);
      _0x3f1e55.rect(
        _0x996564.left + _0x1b4ff4,
        _0x996564.top + _0x1b4ff4,
        _0x996564.edge - _0x480be4.borderWidth,
        _0x996564.edge - _0x480be4.borderWidth,
      );
      _0x3f1e55.clip("evenodd");
      // NOTE: this used to rotate an oversized (~1.45x) copy of the image
      // through the clip to guarantee corner coverage at every angle.
      // Chromium silently draws nothing when drawImage's destination rect
      // extends past the clip's own outer edge (confirmed: fillRect with
      // the exact same oversized rect + clip renders fine, drawImage does
      // not - a real rendering quirk, not a logic bug). Animating via a
      // hue-rotate filter instead sidesteps it entirely: no oversizing, no
      // rotation, the image is drawn once at its exact bounding box (the
      // same draw that already works), and the color itself cycles - which
      // reads as "shimmering" at least as well as a spinning frame would.
      // Only "rainbow" gets the full 0-360 sweep - a full hue cycle on any
      // OTHER color eventually passes through every other color too, so
      // picking e.g. "Pink" would drift through gold/green/blue over time
      // and look indistinguishable from every other style. Named colors
      // instead get a small back-and-forth wobble around their own hue.
      const _0x4c5e7b = "rainbow" === _0x2a9c74 ? ((_0xb45f1b.time / 6000) % 1) * 360 : Math.sin(_0xb45f1b.time / 1500) * 15;
      _0x3f1e55.filter = "hue-rotate(" + _0x4c5e7b + "deg)";
      _0x3f1e55.drawImage(_0x4e8d2c, _0x9c3e1a, _0x2f7b8d, _0x6d4a2e, _0x6d4a2e);
      _0x3f1e55.filter = "none";
      _0x3f1e55.restore();
    }
    static ["getBorderImage"](_0x2a9c74, _0x1a7f6e) {
      const _0x3d9f5c = this.borderImages.get(_0x2a9c74);
      if (_0x3d9f5c) {
        return _0x3d9f5c.ready ? _0x3d9f5c.img : null;
      }
      const _0x4e8d2c = new Image();
      const _0x5f7e2b = { img: _0x4e8d2c, ready: false };
      this.borderImages.set(_0x2a9c74, _0x5f7e2b);
      _0x4e8d2c.onload = () => {
        _0x5f7e2b.ready = true;
      };
      _0x4e8d2c.onerror = () => {};
      _0x4e8d2c.src = _0x1a7f6e;
      return null;
    }
    static ["cells"]() {
      const _0xfdf4f4 = this.ctx;
      const _0x7ae23d = _0x2cc0f3.cellMass !== "off";
      const _0x54c029 = _0x2cc0f3.cellNick !== "off";
      const _0x8efbd4 = _0x2cc0f3.hideOwnNick === "on";
      const _0x5c97e3 = _0x2cc0f3.hideOwnMass === "on";
      const _0x290b1c = _0x2cc0f3.urlSkins === "on";
      const _0x24bf81 = _0x2cc0f3.arbSkins === "on";
      const _0x4f4928 = _0x2cc0f3.teamIndicator === "on";
      const _0x3060bb = _0x2cc0f3.multiboxRing === "on";
      const _0x1c7e25 = _0x480be4.indicatorSize;
      const _0x5ab10a = _0x480be4.cellTransparency / 100;
      const _0x1005b0 = _0x480be4.cellNickSize / 100;
      const _0x2549e3 = _0x480be4.cellMassSize / 100;
      const _0x494dac = _0x2cc0f3.cellTextAnimation;
      const _0x355e3d = _0x480be4.multiboxActive;
      const _0x15f66b = _0x480be4.multiboxInactive;
      const _0x26462b = _0x480be4.multiboxRingWidth;
      const _0x30af86 = _0x480be4.lightenCellColor / 100;
      _0xfdf4f4.strokeStyle = _0x480be4.virusBorderColor;
      _0xfdf4f4.lineWidth = _0x480be4.virusBorderWidth;
      for (const _0x5987fa of _0x14d4a3.sortedCells) {
        const _0x48567b = !_0x5987fa.isVirus && !_0x5987fa.isEjected && this.skinMap.has(_0x5987fa.worldID);
        _0x5987fa.animate();
        let _0x21653d = 1;
        const _0xe84373 = {
          x: 0x0,
          y: 0x0,
        };
        const _0x1241cd = _0x5987fa.cellType === 2 ? _0x996564.position : _0xe84373;
        if (_0x5987fa.fadeStartTime) {
          _0x21653d = 1 - (_0xb45f1b.time - _0x5987fa.fadeStartTime) / _0x2cc0f3.CellAnimation;
          _0x21653d = Math.max(0, Math.min(1, _0x21653d));
        }
        _0xfdf4f4.beginPath();
        _0xfdf4f4.arc(_0x5987fa.animX - _0x1241cd.x, _0x5987fa.animY - _0x1241cd.y, _0x5987fa.animRadius + 5, 0, this.pi2, true);
        _0xfdf4f4.closePath();
        if (_0x5987fa.isVirus) {
          _0xfdf4f4.fillStyle = _0x480be4.virusColor;
          _0xfdf4f4.globalAlpha = 0.7;
          _0xfdf4f4.fill();
          _0xfdf4f4.globalAlpha = 1;
          _0xfdf4f4.stroke();
        } else if ("radiant" === _0x480be4.cellTransparencyStyle) {
          const _0x2e9f7a = 0 | (_0x5987fa.colorObject.r * _0x30af86);
          const _0x8b4c1d = 0 | (_0x5987fa.colorObject.g * _0x30af86);
          const _0x6f3a2e = 0 | (_0x5987fa.colorObject.b * _0x30af86);
          const _0x9d1e4c = _0x5ab10a * _0x21653d;
          const _0x1c7f9a = _0x5987fa.animRadius + 5;
          const _0x4a8e2b = _0x5987fa.animX - _0x1241cd.x;
          const _0x7b2d5f = _0x5987fa.animY - _0x1241cd.y;
          const _0x3f9c6a = _0xfdf4f4.createRadialGradient(_0x4a8e2b, _0x7b2d5f, 0, _0x4a8e2b, _0x7b2d5f, _0x1c7f9a);
          _0x3f9c6a.addColorStop(0, "rgba(" + _0x2e9f7a + "," + _0x8b4c1d + "," + _0x6f3a2e + "," + _0x9d1e4c * 0.6 + ")");
          _0x3f9c6a.addColorStop(1, "rgba(" + _0x2e9f7a + "," + _0x8b4c1d + "," + _0x6f3a2e + "," + _0x9d1e4c + ")");
          _0xfdf4f4.fillStyle = _0x3f9c6a;
          _0xfdf4f4.fill();
        } else {
          _0xfdf4f4.fillStyle = _0x2ab3a8.getColor(_0x5987fa.colorObject, _0x30af86);
          if (_0x5ab10a * _0x21653d < 1) {
            _0xfdf4f4.globalAlpha = _0x5ab10a * _0x21653d;
            _0xfdf4f4.fill();
            _0xfdf4f4.globalAlpha = 1;
          } else {
            _0xfdf4f4.fill();
          }
        }
        if (_0x5987fa.isEjected) {
          continue;
        }
        if (!_0x5987fa.isVirus && _0x21653d === 1 && _0x4f4928 && !_0x5987fa.isMine && _0x48567b && _0x5987fa.animRadius * _0xddb6d6.viewport < 50) {
          _0xfdf4f4.drawImage(
            this.indicator,
            _0x5987fa.animX - _0x1241cd.x - _0x1c7e25 / 2,
            _0x5987fa.animY - _0x1241cd.y - _0x5987fa.animRadius - 10 - _0x1c7e25,
            _0x1c7e25,
            _0x1c7e25,
          );
        }
        let _0x20f1ed = _0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x5987fa.skin || "")).includes("XXXXXXX") ? _0x5987fa.skin : _0x5987fa.arbSkin;
        const _0x1a6b68 = _0x48567b && _0x290b1c && this.getCustomSkin(_0x5987fa.worldID);
        const _0xb89262 =
          _0x24bf81 && !_0x1a6b68 && _0x20f1ed && this.knownSkins.hasOwnProperty(_0x20f1ed.replace(/free\/|.png/, "")) && this.get3rbSkin(_0x20f1ed);
        if (_0x1a6b68) {
          _0xfdf4f4.drawImage(
            _0x1a6b68,
            _0x5987fa.animX - _0x1241cd.x - (_0x5987fa.animRadius + 5),
            _0x5987fa.animY - _0x1241cd.y - (_0x5987fa.animRadius + 5),
            2 * (_0x5987fa.animRadius + 5),
            2 * (_0x5987fa.animRadius + 5),
          );
        } else if (_0xb89262) {
          _0xfdf4f4.drawImage(
            _0xb89262,
            _0x5987fa.animX - _0x1241cd.x - (_0x5987fa.animRadius + 5),
            _0x5987fa.animY - _0x1241cd.y - (_0x5987fa.animRadius + 5),
            2 * (_0x5987fa.animRadius + 5),
            2 * (_0x5987fa.animRadius + 5),
          );
        }
        if (_0x5987fa.isMine && _0x3060bb) {
          const _0x27d8ff = (_0x5987fa.animRadius * _0x26462b) / 100;
          _0xfdf4f4.beginPath();
          _0xfdf4f4.arc(_0x5987fa.animX - _0x1241cd.x, _0x5987fa.animY - _0x1241cd.y, _0x5987fa.animRadius + 5 - (_0x27d8ff >> 1), 0, this.pi2, true);
          _0xfdf4f4.closePath();
          _0xfdf4f4.lineWidth = _0x27d8ff | 0;
          _0xfdf4f4.strokeStyle = _0x5987fa.cellType === _0x90a1a7.typeID ? _0x355e3d : _0x15f66b;
          _0xfdf4f4.stroke();
          _0xfdf4f4.strokeStyle = _0x480be4.virusBorderColor;
          _0xfdf4f4.lineWidth = _0x480be4.virusBorderWidth;
        }
        if (_0x21653d === 1 && ((_0x5987fa.isMine && !_0x8efbd4) || (!_0x5987fa.isMine && _0x54c029))) {
          const _0x14859d = _0x34f3bb.nick(_0x5987fa);
          if (_0x14859d) {
            const _0x251937 =
              _0x494dac === "on" ? _0x5987fa.animRadius : _0x494dac === "stepped" ? 50 + 75 * ((_0x5987fa.animRadius / 75) | 0) : _0x5987fa.radius;
            const _0x3798c7 = (_0x251937 * _0x1005b0 * 0.3 + 6 / _0xddb6d6.viewport) / _0x14859d.height;
            const _0x30a436 = _0x14859d.width * _0x3798c7;
            const _0x592c7c = _0x14859d.height * _0x3798c7;
            if (_0x30a436 > 0 && _0x592c7c > 0) {
              _0xfdf4f4.drawImage(
                _0x14859d,
                _0x5987fa.animX - _0x1241cd.x - (_0x30a436 >> 1),
                _0x5987fa.animY - _0x1241cd.y - (_0x592c7c >> 1),
                _0x30a436,
                _0x592c7c,
              );
            }
          }
        }
        if (_0x21653d === 1 && ((_0x5987fa.isMine && !_0x5c97e3) || (!_0x5987fa.isMine && _0x7ae23d))) {
          const _0x2e6835 = _0x34f3bb.mass(_0x5987fa);
          if (_0x2e6835) {
            const _0x1c92d8 =
              _0x494dac === "on" ? _0x5987fa.animRadius : _0x494dac === "stepped" ? 50 + 75 * ((_0x5987fa.animRadius / 75) | 0) : _0x5987fa.radius;
            const _0x2be8dc = (_0x1c92d8 * _0x2549e3 * 0.3 + 6 / _0xddb6d6.viewport) / _0x2e6835.height;
            const _0x348dc3 = _0x2e6835.width * _0x2be8dc;
            const _0x418aca = _0x2e6835.height * _0x2be8dc;
            const _0x20bbfa =
              _0x5987fa.isUnnamed || (_0x5987fa.isMine && _0x8efbd4) || (!_0x5987fa.isMine && !_0x54c029) ? -(_0x418aca >> 1) : _0x418aca >> 2;
            if (_0x348dc3 > 0 && _0x418aca > 0) {
              _0xfdf4f4.drawImage(
                _0x2e6835,
                _0x5987fa.animX - _0x1241cd.x - (_0x348dc3 >> 1),
                _0x5987fa.animY - _0x1241cd.y + _0x20bbfa,
                _0x348dc3,
                _0x418aca,
              );
            }
          }
        }
      }
    }
    static ["createSkinMap"]() {
      this.arbSkin = _0x14f7b2("#arbSkin").val();
      this.skinMap.clear();
      if (!_0x90a1a7.skin.includes("XXXXXXX")) {
        this.skinMap.set(_0x90a1a7.worldID, this.code2Url(_0x90a1a7.skin));
        this.skinMap.set(_0x90a1a7.worldID2, this.code2Url(_0x90a1a7.skin));
      } else if (this.arbSkin) {
        this.skinMap.set(_0x90a1a7.worldID, "./res/skins/free/" + this.arbSkin.replace(/free\/|.png/g, "") + ".png");
        this.skinMap.set(_0x90a1a7.worldID2, "./res/skins/free/" + this.arbSkin.replace(/free\/|.png/g, "") + ".png");
      }
      for (const _0x5d3988 of _0x12ac51.teamPlayers.values())
        if (_0x5d3988.isAlive && !_0x5d3988.skin.includes("XXXXXXX")) {
          this.skinMap.set(_0x5d3988.worldID, this.code2Url(_0x5d3988.skin));
        }
    }
    static ["createRGBset"]() {
      this.rgbTeammates.clear();
      if (_0x90a1a7.isRGB) {
        this.rgbTeammates.add(_0x90a1a7.worldID);
      }
      for (const _0x33940b of _0x12ac51.teamPlayers.values())
        if (_0x33940b.isAlive && _0x33940b.isRGB) {
          this.rgbTeammates.add(_0x33940b.worldID);
        }
    }
    static ["getCustomSkin"](_0xb1bf13) {
      const _0x35f9db = this.skinMap.get(_0xb1bf13);
      if (!_0x35f9db) {
        return false;
      }
      const _0x4bd4ce = this.downloadedSkins.get(_0x35f9db);
      return undefined === _0x4bd4ce ? (this.downloadSkin(_0x35f9db), false) : _0x4bd4ce;
    }
    static ["get3rbSkin"](_0x1d8246) {
      const _0x3bf8cf = this.downloadedSkins.get(_0x1d8246);
      return undefined === _0x3bf8cf ? (this.download3rbSkin(_0x1d8246), false) : _0x3bf8cf;
    }
    static ["download3rbSkin"](_0x26f184) {
      this.downloadedSkins.set(_0x26f184, false);
      const _0x323825 = new Image();
      _0x323825.crossOrigin = "anonymous";
      _0x323825.onload = () => {
        const _0x5753ba = _0x24f9ab.createElement("canvas");
        const _0x552ac8 = _0x5753ba.getContext("2d");
        _0x5753ba.width = 512;
        _0x5753ba.height = 512;
        _0x552ac8.beginPath();
        _0x552ac8.arc(256, 256, 256, 0, this.pi2, true);
        _0x552ac8.closePath();
        _0x552ac8.clip();
        _0x552ac8.drawImage(_0x323825, 0, 0, 512, 512);
        _0x323825.onload = () => {
          this.downloadedSkins.set(_0x26f184, _0x323825);
        };
        _0x323825.src = _0x5753ba.toDataURL();
      };
      _0x323825.src = "./res/skins/free/" + _0x26f184.replace(/free\/|.png/g, "") + ".png";
    }
    static ["downloadSkin"](_0x31eb71) {
      this.downloadedSkins.set(_0x31eb71, false);
      const _0x252d42 = new Image();
      _0x252d42.crossOrigin = "anonymous";
      _0x252d42.onload = () => {
        const _0x4282fb = _0x24f9ab.createElement("canvas");
        const _0x56a6bc = _0x4282fb.getContext("2d");
        _0x4282fb.width = 512;
        _0x4282fb.height = 512;
        _0x56a6bc.beginPath();
        _0x56a6bc.arc(256, 256, 256, 0, this.pi2, true);
        _0x56a6bc.closePath();
        _0x56a6bc.clip();
        _0x56a6bc.drawImage(_0x252d42, 0, 0, 512, 512);
        _0x252d42.onload = () => {
          this.downloadedSkins.set(_0x31eb71, _0x252d42);
        };
        _0x252d42.src = _0x4282fb.toDataURL();
      };
      _0x252d42.src = _0x31eb71;
    }
    static ["getImgurCode"](_0x96fe5e) {
      if (!_0x96fe5e) {
        return "XXXXXXX";
      }
      // Accepts the direct-image link (i.imgur.com/CODE.png), the plain
      // webpage link people actually copy by default (imgur.com/CODE, no
      // "i." subdomain, no extension), and album/gallery links - the old
      // regex only matched the first form, so pasting the normal share
      // link silently fell through to "invalid" every time.
      const _0x5e0df5 = _0x96fe5e.match(/(?:https?:\/\/)?(?:i\.)?imgur\.com\/(?:a\/|gallery\/)?([a-zA-Z0-9]{5,8})(?:\.(?:png|jpe?g|gifv?|webp))?/i);
      return null === _0x5e0df5 ? "XXXXXXX" : _0x5e0df5[1];
    }
    static ["getRaindowFlag"](_0x4a64ed) {
      return null !== _0x4a64ed.match(/#hue\s??=\s??auto\s??,\s??blend\s??=\s??auto/i);
    }
    static ["code2Url"](_0x4e8aaa) {
      return "https://i.imgur.com/" + _0x4e8aaa + ".png";
    }
    static ["commands"]() {
      const _0x5b9c43 = this.ctx;
      const _0x41c288 = "off" === _0x2cc0f3.commander;
      _0x5b9c43.strokeStyle = "#ffffff";
      _0x5b9c43.lineWidth = 5;
      for (const _0x52ff22 of this.commanderPoints.values()) {
        const _0x537d77 = _0x52ff22.x;
        const _0x130956 = _0x52ff22.y;
        const _0x266134 = _0xb45f1b.time - _0x52ff22.time;
        if (_0x266134 > 1250) {
          this.commanderPoints["delete"](_0x52ff22);
        } else {
          if (!(_0x41c288 || 1 > _0x266134)) {
            const _0xa9830a = (1000 * _0x266134) / 1250;
            _0x5b9c43.globalAlpha = _0xa9830a > 333 ? (1000 - _0xa9830a) / 667 : 1;
            const _0x42effd = _0x5b9c43.createRadialGradient(_0x537d77, _0x130956, 0.7 * _0xa9830a, _0x537d77, _0x130956, _0xa9830a);
            _0x42effd.addColorStop(0, "rgba(0,0,0,0)");
            _0x42effd.addColorStop(1, _0x480be4.commanderColor);
            _0x5b9c43.fillStyle = _0x42effd;
            _0x5b9c43.beginPath();
            _0x5b9c43.arc(_0x537d77, _0x130956, _0xa9830a, 0, this.pi2, true);
            _0x5b9c43.closePath();
            _0x5b9c43.fill();
            _0x5b9c43.stroke();
          }
        }
      }
    }
    static ["mouseTracker"]() {
      if ("off" !== _0x2cc0f3.cursorLine) {
        const _0x33c20a = this.ctx;
        _0x33c20a.strokeStyle = "#fff";
        _0x33c20a.lineWidth = 4;
        _0x33c20a.lineCap = "round";
        _0x33c20a.lineJoin = "round";
        const _0xe7932f = (_0x128142.x - this.canvas.width / 2) / _0xddb6d6.viewport + _0xddb6d6.x;
        const _0x162ae5 = (_0x128142.y - this.canvas.height / 2) / _0xddb6d6.viewport + _0xddb6d6.y;
        _0x33c20a.beginPath();
        const _0x480493 = {
          x: 0x0,
          y: 0x0,
        };
        const _0x50f43c = 1 === _0x90a1a7.typeID ? _0x14d4a3.myCells : _0x14d4a3.myCells2;
        const _0x522f5e = 1 === _0x90a1a7.typeID ? _0x480493 : _0x996564.position;
        for (const _0x545b71 of _0x50f43c.values()) {
          _0x33c20a.moveTo(_0x545b71.animX - _0x522f5e.x, _0x545b71.animY - _0x522f5e.y);
          _0x33c20a.lineTo(_0xe7932f, _0x162ae5);
        }
        _0x33c20a.closePath();
        _0x33c20a.stroke();
      }
    }
    static async ["getKnownSkins"]() {
      var _0x2fed90 = await fetch("https://beta.3rb.io/php/Skins.php?type=free");
      var _0x525e1b = await _0x2fed90.json();
      var _0x406cf8 = Date.now();
      for (let _0x303c1f = 0; _0x303c1f < _0x525e1b.length; _0x303c1f++) {
        _0x386cbc.knownSkins[_0x525e1b[_0x303c1f]] = _0x406cf8;
      }
      for (let _0x4f2d13 in _0x386cbc.knownSkins)
        if (_0x386cbc.knownSkins[_0x4f2d13] != _0x406cf8) {
          delete _0x386cbc.knownSkins[_0x4f2d13];
        }
    }
    static ["cacheIndicator"]() {
      const _0x1339ea = _0x24f9ab.createElement("canvas");
      _0x1339ea.width = 150;
      _0x1339ea.height = 150;
      const _0x435b08 = _0x1339ea.getContext("2d");
      _0x435b08.textAlign = "center";
      _0x435b08.textBaseline = "middle";
      _0x435b08.font = "600 150px FontAwesome";
      _0x435b08.fillStyle = "rgba(255,255,255,1)";
      _0x435b08.fillText("â·Â¸", 75, 75);
      return _0x1339ea;
    }
  }
  class _0xb45f1b {
    static ["init"]() {
      this.time = Date.now();
      _0x18a8d1.init();
      _0x19d5af.init();
      _0x31c9b4.init();
      _0x14d4a3.init();
      _0x90a1a7.init();
      _0xddb6d6.init();
      _0x12ac51.init();
      _0x7c92e1.init();
      _0x386cbc.init();
      this.loop = new _0x4660a8(() => {
        this.run();
      });
      setInterval(() => {
        _0x128142.send();
      }, 40);
      // `_0x2d5cce.positionMass()`/`aliveStatus()`/`biggest()` are otherwise
      // only sent reactively, all from inside `_0x7a58b0.update()` - which
      // only runs when a relay "update" broadcast actually arrives. The
      // relay only echoes position/alive/nick/color/skin to OTHER clients
      // (sendToAllExcept, so you don't see a duplicate of yourself in your
      // own roster), so with no other real teammate connected that handler
      // never fires at all, and biggest() never gets a chance to run - the
      // #1 position marker would then never light up, solo or not. A
      // periodic heartbeat keeps all three fresh on the relay instead of
      // depending on teammate traffic to trigger them.
      setInterval(() => {
        _0x2d5cce.aliveStatus();
        _0x2d5cce.positionMass();
        if (_0x90a1a7.scouting || (!_0x90a1a7.isAlive && _0xddb6d6.isSpectating && !_0xddb6d6.freeSpectate)) {
          _0x2d5cce.biggest();
        }
      }, 250);
      setInterval(() => {
        this.updateRestartCountdown();
      }, 1000);
    }
    static ["updateRestartCountdown"]() {
      const _0x1c3e9a = _0x14f7b2("#server-restart-countdown");
      if (!_0x18a8d1.restartAt) {
        _0x1c3e9a.text("").removeClass("warning");
        return;
      }
      const _0x4e2b7f = _0x18a8d1.restartAt - Date.now();
      if (0 >= _0x4e2b7f) {
        _0x1c3e9a.text("Server restarting...").addClass("warning");
        return;
      }
      const _0x3a8d5c = Math.floor(_0x4e2b7f / 1000);
      const _0x2f9e1b = Math.floor(_0x3a8d5c / 60);
      const _0x5d7c3a = _0x3a8d5c % 60;
      _0x1c3e9a.text("Server restart in " + _0x2f9e1b + ":" + (10 > _0x5d7c3a ? "0" : "") + _0x5d7c3a);
      _0x1c3e9a.toggleClass("warning", 60000 > _0x4e2b7f);
    }
    static ["run"]() {
      _0xb45f1b.refreshTime();
      _0x14d4a3.update();
      _0x90a1a7.update();
      _0xddb6d6.update();
      _0x386cbc.run();
      _0x5cda9b.run();
      _0x2a0c5c.update();
      _0x9547b4.update();
      _0x3a43e7.update();
    }
    static ["browserVersion"]() {
      const _0x79e4dd = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
      return !!_0x79e4dd && parseInt(_0x79e4dd[2], 10);
    }
    static ["refreshTime"]() {
      this.time = Date.now();
    }
  }


  // ========================================================================
  // Endymion V3 self-hosted full feature pack (3.0.1)
  //   ws1: playable Tab 1
  //   ws2: playable Tab 2
  //   ws3: authenticated hot standby, promoted on death/disconnect/K kill
  // ========================================================================
  (() => {
    "use strict";

    const ENDYMION_VERSION = "3.0.1";
    const ENDYMION_BUILD = "ENDYMION-V3.0.1-TAG-UNION-GHOST-GUARD-WS3-STANDBY";
    const now = () => Date.now();
    const AUTO_RESPAWN_KEY = "endymion-auto-promote-dead";
    const CONTINUE_MOVEMENT_KEY = "endymion-continue-movement";
    const isAutoRespawnEnabled = () => localStorage.getItem(AUTO_RESPAWN_KEY) !== "off";
    const isContinueMovementEnabled = () => localStorage.getItem(CONTINUE_MOVEMENT_KEY) !== "off";

    const cleanOfficialSkin = value => String(value || "")
      .trim()
      .replace(/^free\//i, "")
      .replace(/\.png$/i, "");

    const skinCode = value => {
      const raw = String(value || "").trim();
      if (!raw) return "XXXXXXX";
      if (/^[a-zA-Z0-9]{5,8}$/.test(raw)) return raw;
      const code = _0x386cbc.getImgurCode(raw);
      return code && code !== "XXXXXXX" ? code : "XXXXXXX";
    };

    const skinUrl = value => {
      const code = skinCode(value);
      return code === "XXXXXXX" ? "" : _0x386cbc.code2Url(code);
    };

    const defaultProfile = selected => ({
      nick: "profile " + selected,
      nick2: "profile " + selected + " 2",
      skin: "https://i.imgur.com/nRqSis7.png",
      skin2: "",
      arbSkin: "",
      arbSkin2: ""
    });

    const profileKey = selected => "profile" + selected;
    const normalizeProfile = (profile, selected) => Object.assign(defaultProfile(selected), profile || {});
    const getProfile = selected => normalizeProfile(_0x19d5af.get("profiles", profileKey(selected)), selected);
    const saveProfile = (selected, profile) => {
      const normalized = normalizeProfile(profile, selected);
      _0x19d5af.set("profiles", profileKey(selected), normalized);
      return normalized;
    };

    const syncInternalIdentity = profile => {
      _0x90a1a7._nick = String(profile.nick || "Unnamed Cell");
      _0x90a1a7._nick2 = String(profile.nick2 || profile.nick || "Unnamed Cell 2");
      _0x90a1a7._arbSkin = cleanOfficialSkin(profile.arbSkin);
      _0x90a1a7._arbSkin2 = cleanOfficialSkin(profile.arbSkin2);
      _0x90a1a7._skin = skinCode(profile.skin);
      _0x90a1a7._skin2 = skinCode(profile.skin2);
    };

    const readProfileFromDom = () => {
      const selected = Number(_0x50f0c6.selected || 1);
      const profile = getProfile(selected);
      profile.nick = String(_0x14f7b2("#nick").val() || "").trim() || "Unnamed Cell";
      profile.nick2 = String(_0x14f7b2("#nick2").val() || "").trim() || (profile.nick + " 2");
      profile.arbSkin = cleanOfficialSkin(_0x14f7b2("#arbSkin").val());
      profile.arbSkin2 = cleanOfficialSkin(_0x14f7b2("#arbSkin2").val());
      const rawSkin1 = String(_0x14f7b2("#skin").val() || "").trim();
      const rawSkin2 = String(_0x14f7b2("#skin2").val() || "").trim();
      profile.skin = rawSkin1 ? (skinUrl(rawSkin1) || profile.skin || "") : "";
      profile.skin2 = rawSkin2 ? (skinUrl(rawSkin2) || profile.skin2 || "") : "";
      if (profile.skin) profile.arbSkin = "";
      if (profile.skin2) profile.arbSkin2 = "";
      saveProfile(selected, profile);
      syncInternalIdentity(profile);
      return profile;
    };

    // --------------------------------------------------------------------
    // Independent profile fields for ws1 and ws2.
    // --------------------------------------------------------------------
    _0x50f0c6.setDomValues = function endymionSetDomValues() {
      const profile = saveProfile(this.selected, getProfile(this.selected));
      _0x14f7b2("#tag").val(this.tag);
      _0x14f7b2("#nick").val(profile.nick);
      _0x14f7b2("#nick2").val(profile.nick2);
      _0x14f7b2("#arbSkin").val(profile.arbSkin);
      _0x14f7b2("#arbSkin2").val(profile.arbSkin2);
      _0x14f7b2("#skin").val(profile.skin);
      _0x14f7b2("#skin2").val(profile.skin2);
      this.updateMainSkin();
      for (let index = 8; index > 0; index -= 1) this.updatePreviewSkin(index);
    };

    const originalProfileEvents = _0x50f0c6.addEvents;
    _0x50f0c6.addEvents = function endymionProfileEvents() {
      originalProfileEvents.call(this);
      const bind = (selector, fn) => _0x14f7b2(selector)
        .off("blur change")
        .on("blur.endymion change.endymion", fn);
      bind("#nick", () => this.setNick(_0x14f7b2("#nick").val()));
      bind("#nick2", () => this.setNick2(_0x14f7b2("#nick2").val()));
      bind("#arbSkin", () => this.setarbSkin());
      bind("#arbSkin2", () => this.setarbSkin2());
      bind("#skin", () => this.setSkin(_0x14f7b2("#skin").val()));
      bind("#skin2", () => this.setSkin2(_0x14f7b2("#skin2").val()));
    };

    _0x50f0c6.switch = function endymionSwitchProfile(selected) {
      this.selected = Number(selected) || 1;
      _0x19d5af.set("profiles", "selected", this.selected);
      const profile = saveProfile(this.selected, getProfile(this.selected));
      _0x14f7b2("#nick").val(profile.nick);
      _0x14f7b2("#nick2").val(profile.nick2);
      _0x14f7b2("#arbSkin").val(profile.arbSkin);
      _0x14f7b2("#arbSkin2").val(profile.arbSkin2);
      _0x14f7b2("#skin").val(profile.skin);
      _0x14f7b2("#skin2").val(profile.skin2);
      syncInternalIdentity(profile);
      this.updateMainSkin();
    };

    _0x50f0c6.setNick = function endymionSetNick(value) {
      if (_0x90a1a7._isAlive) {
        _0x14f7b2("#nick").val(_0x90a1a7.nick);
        return _0x40f48a.alert("Endymion", "Nick 1 cannot change while Tab 1 is alive.");
      }
      const profile = getProfile(this.selected);
      profile.nick = String(value || "").trim() || "Unnamed Cell";
      saveProfile(this.selected, profile);
      _0x90a1a7._nick = profile.nick;
      try { _0x2d5cce.nick(); } catch (error) {}
    };

    _0x50f0c6.setNick2 = function endymionSetNick2(value) {
      if (_0x90a1a7._isAlive2) {
        _0x14f7b2("#nick2").val(_0x90a1a7.nick2);
        return _0x40f48a.alert("Endymion", "Nick 2 cannot change while Tab 2 is alive.");
      }
      const profile = getProfile(this.selected);
      profile.nick2 = String(value || "").trim() || ((profile.nick || "Unnamed Cell") + " 2");
      saveProfile(this.selected, profile);
      _0x90a1a7._nick2 = profile.nick2;
    };

    _0x50f0c6.setarbSkin = function endymionOfficialSkin1() {
      const profile = getProfile(this.selected);
      profile.arbSkin = cleanOfficialSkin(_0x14f7b2("#arbSkin").val());
      if (profile.arbSkin) {
        profile.skin = "";
        _0x14f7b2("#skin").val("");
      }
      saveProfile(this.selected, profile);
      _0x90a1a7._arbSkin = profile.arbSkin;
      _0x90a1a7._skin = profile.skin ? skinCode(profile.skin) : "XXXXXXX";
      this.updateMainSkin();
      this.updatePreviewSkin(this.selected);
    };

    _0x50f0c6.setarbSkin2 = function endymionOfficialSkin2() {
      const profile = getProfile(this.selected);
      profile.arbSkin2 = cleanOfficialSkin(_0x14f7b2("#arbSkin2").val());
      if (profile.arbSkin2) {
        profile.skin2 = "";
        _0x14f7b2("#skin2").val("");
      }
      saveProfile(this.selected, profile);
      _0x90a1a7._arbSkin2 = profile.arbSkin2;
      _0x90a1a7._skin2 = profile.skin2 ? skinCode(profile.skin2) : "XXXXXXX";
    };

    _0x50f0c6.setSkin = function endymionUrlSkin1(value) {
      const raw = String(value || "").trim();
      const profile = getProfile(this.selected);
      if (!raw) {
        profile.skin = "";
        saveProfile(this.selected, profile);
        _0x90a1a7._skin = "XXXXXXX";
        this.updateMainSkin();
        return;
      }
      const canonical = skinUrl(raw);
      if (!canonical) return _0x40f48a.alert("Endymion", _0x59f59a.current.notif.invalidSkinUrl);
      profile.skin = canonical;
      profile.arbSkin = "";
      saveProfile(this.selected, profile);
      _0x14f7b2("#skin").val(canonical);
      _0x14f7b2("#arbSkin").val("");
      _0x90a1a7._skin = skinCode(canonical);
      _0x90a1a7._arbSkin = "";
      this.updateMainSkin();
      this.updatePreviewSkin(this.selected);
      try { _0x2d5cce.skin(); } catch (error) {}
    };

    _0x50f0c6.setSkin2 = function endymionUrlSkin2(value) {
      const raw = String(value || "").trim();
      const profile = getProfile(this.selected);
      if (!raw) {
        profile.skin2 = "";
        saveProfile(this.selected, profile);
        _0x90a1a7._skin2 = "XXXXXXX";
        return;
      }
      const canonical = skinUrl(raw);
      if (!canonical) return _0x40f48a.alert("Endymion", _0x59f59a.current.notif.invalidSkinUrl);
      profile.skin2 = canonical;
      profile.arbSkin2 = "";
      saveProfile(this.selected, profile);
      _0x14f7b2("#skin2").val(canonical);
      _0x14f7b2("#arbSkin2").val("");
      _0x90a1a7._skin2 = skinCode(canonical);
      _0x90a1a7._arbSkin2 = "";
    };

    _0x50f0c6.updateMainSkin = function endymionUpdateMainSkin() {
      const profile = getProfile(this.selected);
      const url = skinUrl(profile.skin) || (profile.arbSkin ? "./res/skins/free/" + cleanOfficialSkin(profile.arbSkin) + ".png" : "");
      _0x14f7b2(".skin-preview").css("background", url ? "url(" + url + ") center/cover" : "#222");
    };

    _0x50f0c6.updatePreviewSkin = function endymionUpdatePreviewSkin(selected) {
      const profile = getProfile(selected);
      const url = skinUrl(profile.skin) || (profile.arbSkin ? "./res/skins/free/" + cleanOfficialSkin(profile.arbSkin) + ".png" : "");
      if (url) _0x14f7b2(".skin-selector[value=" + selected + "]").css("background", "url(" + url + ") center/cover");
    };

    const originalPlayerInit = _0x90a1a7.init;
    _0x90a1a7.init = function endymionPlayerInit() {
      const result = originalPlayerInit.apply(this, arguments);
      const profile = getProfile(Number(_0x50f0c6.selected || 1));
      syncInternalIdentity(profile);
      return result;
    };

    Object.defineProperty(_0x90a1a7, "nick2", {
      configurable: true,
      get() { return String(this._nick2 || this._nick || "").substring(0, 15); },
      set(value) { this._nick2 = String(value || ""); }
    });
    Object.defineProperty(_0x90a1a7, "arbSkin2", {
      configurable: true,
      get() { return this._arbSkin2 || ""; },
      set(value) { this._arbSkin2 = cleanOfficialSkin(value); }
    });
    Object.defineProperty(_0x90a1a7, "skin2", {
      configurable: true,
      get() { return this._skin2 || "XXXXXXX"; },
      set(value) { this._skin2 = skinCode(value); }
    });
    Object.defineProperty(_0x90a1a7, "worldID2", {
      configurable: true,
      get() {
        const source = String(this._nick2 || this._nick || "");
        let id = source.substring(source.indexOf("}") + 1).replace("%*^", "");
        return ":party" === _0x31c9b4.gMode ? id + this.colorHex2 : id;
      }
    });

    _0x14d4a3.myCellCheck = function endymionMyCellCheck(id, cell, tab) {
      const ids = Number(tab) === 2 ? this.myCellsIDs2 : this.myCellsIDs;
      const owned = Number(tab) === 2 ? this.myCells2 : this.myCells;
      if (!ids.has(id)) return;
      owned.set(id, cell);
      ids.delete(id);
      cell.isMine = true;
      cell.nick = Number(tab) === 2 ? _0x90a1a7.nick2 : _0x90a1a7.nick;
    };

    // Read fields at spawn time as well, so clicking Play immediately after
    // typing does not depend on a blur event arriving first.
    _0x302a2c.spawnTab = function endymionSpawnTab(tab) {
      tab = Number(tab);
      if (tab !== 1 && tab !== 2) return false;
      const dead = tab === 1 ? !_0x90a1a7._isAlive : !_0x90a1a7._isAlive2;
      if (!this.chekConnection(tab) || !dead) return false;

      const profile = readProfileFromDom();
      _0xddb6d6.isSpectating = false;
      const second = tab === 2;
      const nick = String(second ? profile.nick2 : profile.nick).trim() || "Unnamed cell";
      const custom = skinCode(second ? profile.skin2 : profile.skin);
      const official = cleanOfficialSkin(second ? profile.arbSkin2 : profile.arbSkin);
      const packet = { n: unescape(encodeURIComponent(nick)) };
      if (custom !== "XXXXXXX") {
        packet.s = unescape(encodeURIComponent(custom));
        packet.w = "";
      } else if (official) {
        packet.s = unescape(encodeURIComponent("free/" + official));
        packet.w = "";
      }
      const json = JSON.stringify(packet);
      const view = this.createView(json.length + 2);
      view.setUint8(0, 0, true);
      for (let index = 0; index < json.length; index += 1) view.setUint8(index + 1, json.charCodeAt(index), true);
      view.setUint8(json.length + 1, 0, true);
      this.sendPacket(view, tab);
      return true;
    };

    const originalCreateSkinMap = _0x386cbc.createSkinMap;
    _0x386cbc.createSkinMap = function endymionCreateSkinMap() {
      originalCreateSkinMap.call(this);
      const add = (id, custom, official) => {
        if (!id) return;
        const code = skinCode(custom);
        if (code !== "XXXXXXX") this.skinMap.set(id, this.code2Url(code));
        else if (official) this.skinMap.set(id, "./res/skins/free/" + cleanOfficialSkin(official) + ".png");
      };
      add(_0x90a1a7.worldID, _0x90a1a7._skin, _0x90a1a7._arbSkin);
      add(_0x90a1a7.worldID2, _0x90a1a7._skin2, _0x90a1a7._arbSkin2);
    };

    // --------------------------------------------------------------------
    // Persistent movement: each playable slot remembers its own last heading.
    // The inactive slot receives a far-away target every 40 ms, so it keeps
    // travelling to the arena edge rather than reaching a stale target and
    // stopping after you switch tabs.
    // --------------------------------------------------------------------
    const originalMouseInit = _0x128142.init;
    _0x128142.init = function endymionMouseInit() {
      const result = originalMouseInit.apply(this, arguments);
      this.tabDirections = new Map();
      this.lastTargets = new Map();
      return result;
    };

    _0x128142.getTabCenter = function endymionGetTabCenter(tab) {
      const cells = tab === 2 ? _0x14d4a3.myCells2 : _0x14d4a3.myCells;
      let weight = 0, x = 0, y = 0;
      for (const cell of cells.values()) {
        const radius = Math.max(1, Number(cell.animRadius || cell.radius || 1));
        const w = radius * radius;
        const cx = Number.isFinite(Number(cell.animX)) ? Number(cell.animX) : Number(cell.x);
        const cy = Number.isFinite(Number(cell.animY)) ? Number(cell.animY) : Number(cell.y);
        if (!Number.isFinite(cx) || !Number.isFinite(cy)) continue;
        x += cx * w;
        y += cy * w;
        weight += w;
      }
      return weight > 0 ? { x: x / weight, y: y / weight } : null;
    };

    _0x128142.rememberDirection = function endymionRememberDirection(tab, targetX, targetY) {
      if (!this.tabDirections) this.tabDirections = new Map();
      if (!this.lastTargets) this.lastTargets = new Map();
      const center = this.getTabCenter(tab);
      if (!center) return;
      const dx = Number(targetX) - center.x;
      const dy = Number(targetY) - center.y;
      const length = Math.hypot(dx, dy);
      if (length > 8) {
        this.tabDirections.set(tab, { x: dx / length, y: dy / length });
        this.lastTargets.set(tab, { x: Number(targetX), y: Number(targetY) });
      }
    };

    _0x302a2c.mouseForTab = function endymionMouseForTab(tab, x, y) {
      tab = Number(tab);
      if ((tab !== 1 && tab !== 2) || !this.chekConnection(tab)) return false;
      const view = this.createView(17);
      view.setUint8(0, 16, true);
      view.setFloat64(1, Math.fround(Math.trunc(x)), true);
      view.setFloat64(9, Math.fround(Math.trunc(y)), true);
      this.sendPacket(view, tab);
      return true;
    };

    _0x302a2c.mouse = function endymionMouse(x, y) {
      return this.mouseForTab(_0x90a1a7.typeID, x, y);
    };

    _0x128142.keepMoving = function endymionKeepMoving(tab) {
      if (!isContinueMovementEnabled()) return false;
      if (!this.tabDirections) this.tabDirections = new Map();
      const alive = tab === 2 ? _0x90a1a7._isAlive2 : _0x90a1a7._isAlive;
      const center = this.getTabCenter(tab);
      const direction = this.tabDirections.get(tab);
      if (!alive || !center || !direction) return false;
      const mapEdge = Number(_0x996564.edge || 16000);
      const distance = Math.max(64000, mapEdge * 4);
      return _0x302a2c.mouseForTab(tab, center.x + direction.x * distance, center.y + direction.y * distance);
    };

    _0x128142.stopInactivePersistentMovement = function endymionStopInactivePersistentMovement() {
      const active = Number(_0x90a1a7.typeID || 1);
      const inactive = active === 1 ? 2 : 1;
      const alive = inactive === 2 ? _0x90a1a7._isAlive2 : _0x90a1a7._isAlive;
      const center = this.getTabCenter(inactive);
      if (alive && center) _0x302a2c.mouseForTab(inactive, center.x, center.y);
      this.tabDirections?.delete(inactive);
      this.lastTargets?.delete(inactive);
      return true;
    };

    _0x128142.setContinueMovement = function endymionSetContinueMovement(enabled) {
      const value = enabled !== false;
      localStorage.setItem(CONTINUE_MOVEMENT_KEY, value ? "on" : "off");
      if (!value) this.stopInactivePersistentMovement();
      _0x18a8d1.connectionStatus?.();
      return value;
    };

    _0x128142.send = function endymionSendMovement() {
      if (!this.tabDirections) this.tabDirections = new Map();
      if (!this.lastTargets) this.lastTargets = new Map();
      const zero = { x: 0, y: 0 };
      const active = Number(_0x90a1a7.typeID || 1);
      const shift = active === 2 ? _0x996564.position : zero;
      this.canvasX = (this.x - this.canvas.width / 2) / _0xddb6d6.viewport + _0xddb6d6.x + shift.x;
      this.canvasY = (this.y - this.canvas.height / 2) / _0xddb6d6.viewport + _0xddb6d6.y + shift.y;

      if (_0xddb6d6.isSpectating && _0x3a83be.isTurnedOn) {
        _0x302a2c.mouseForTab(active, _0x3a83be.center.x, _0x3a83be.center.y);
        return;
      }
      if (_0x90a1a7.movementPaused) {
        _0x302a2c.mouseForTab(active, _0x90a1a7.x, _0x90a1a7.y);
        return;
      }

      this.rememberDirection(active, this.canvasX, this.canvasY);
      _0x302a2c.mouseForTab(active, this.canvasX, this.canvasY);
      this.keepMoving(active === 1 ? 2 : 1);
    };

    // --------------------------------------------------------------------
    // ws3 standby lifecycle, promotion, kill/recycle, auto-death recovery.
    // --------------------------------------------------------------------
    _0x18a8d1.setBackupPhase = function endymionSetBackupPhase(phase) {
      this.backupPhase = String(phase || "Waiting");
      this.backupPhaseSince = now();
      this.connectionStatus?.();
    };

    _0x18a8d1.statusSnapshot = function endymionStatusSnapshot() {
      const tabStatus = (socket, connected, alive, pending) => {
        if (alive) return "Alive";
        if (!socket) return this.ip ? "Reconnecting" : "Offline";
        if (socket.readyState === WebSocket.CONNECTING) return "Connecting";
        if (socket.readyState === WebSocket.OPEN) return connected ? (pending ? "Spawning" : "Ready") : "Verifying";
        return "Reconnecting";
      };
      let tab3 = "Waiting";
      if (this.backupReady && this.ws3Open) tab3 = "Ready";
      else if (this.ws3 && this.ws3.readyState === WebSocket.CONNECTING) tab3 = "Connecting";
      else if (this.ws3Open) tab3 = "Verifying";
      else if (this.backupConnecting) tab3 = "Connecting";
      else if (this.connected && this.connected2) tab3 = this.backupPhase || "Replacing";
      return {
        version: ENDYMION_VERSION,
        build: ENDYMION_BUILD,
        activeTab: _0x90a1a7.typeID,
        tab1: tabStatus(this.ws, this.connected, _0x90a1a7._isAlive, this.pendingRespawns?.has(1)),
        tab2: tabStatus(this.ws2, this.connected2, _0x90a1a7._isAlive2, this.pendingRespawns?.has(2)),
        tab3,
        standbyReady: Boolean(this.backupReady && this.ws3Open),
        autoRespawn: isAutoRespawnEnabled(),
        continueMovement: isContinueMovementEnabled(),
        pendingPromotions: [...(this.pendingPromotions || [])],
        ws3: this.ws3 ? { readyState: this.ws3.readyState, open: this.ws3Open } : null
      };
    };

    _0x18a8d1.connectionStatus = function endymionConnectionStatus() {
      const status = this.statusSnapshot();
      let hud = document.getElementById("endymion-connection-status");
      if (!hud && document.body) {
        hud = document.createElement("div");
        hud.id = "endymion-connection-status";
        hud.style.cssText = "position:fixed;right:10px;top:205px;z-index:2147483000;min-width:310px;max-width:calc(100vw - 20px);box-sizing:border-box;color:#f1f1f1;background:rgba(5,5,9,.9);border:1px solid rgba(255,255,255,.22);border-radius:6px;padding:6px 8px;font:11px/1.3 Arial,sans-serif;pointer-events:auto;white-space:normal;text-align:right;text-shadow:0 1px 2px #000;box-shadow:0 4px 16px rgba(0,0,0,.28)";
        hud.title = "K or /kill manually promotes Standby 3. Automatic respawn and inactive-tab movement can be disabled below.";
        hud.innerHTML = '<div data-endymion-role="status" style="white-space:nowrap"></div><div data-endymion-role="controls" style="display:flex;justify-content:flex-end;gap:5px;margin-top:5px;flex-wrap:wrap"><button type="button" data-endymion-action="auto-respawn"></button><button type="button" data-endymion-action="continue-movement"></button></div>';
        const stopHudEvent = event => event.stopPropagation();
        for (const eventName of ["pointerdown", "mousedown", "mouseup", "touchstart", "touchend", "keydown", "keyup"]) {
          hud.addEventListener(eventName, stopHudEvent);
        }
        hud.addEventListener("click", event => {
          const button = event.target?.closest?.("button[data-endymion-action]");
          if (!button) return;
          event.preventDefault();
          event.stopPropagation();
          const action = button.dataset.endymionAction;
          if (action === "auto-respawn") this.setAutoRespawn(!isAutoRespawnEnabled());
          if (action === "continue-movement") _0x128142.setContinueMovement(!isContinueMovementEnabled());
          button.blur();
          this.connectionStatus();
        });
        document.body.appendChild(hud);
      }

      if (hud) {
        const leaderboard = document.getElementById("leaderboard-hud");
        const head = document.getElementById("leaderboard-head");
        const positions = document.getElementById("leaderboard-positions");
        const chart = document.getElementById("leaderboard-chart");
        let top = 205;
        if (leaderboard) {
          const leaderboardRect = leaderboard.getBoundingClientRect();
          const headRect = head?.getBoundingClientRect();
          const positionsRect = positions?.getBoundingClientRect();
          const style = positions ? getComputedStyle(positions) : null;
          const fontSize = Number.parseFloat(style?.fontSize) || 13;
          const parsedLineHeight = Number.parseFloat(style?.lineHeight);
          const rowHeight = Number.isFinite(parsedLineHeight) ? parsedLineHeight : fontSize * 1.25;
          const paddingTop = Number.parseFloat(getComputedStyle(leaderboard).paddingTop) || 0;
          const reservedTenRowsBottom = leaderboardRect.top + paddingTop + (headRect?.height || 29) + rowHeight * 10 + 10;
          const chartRect = chart && getComputedStyle(chart).display !== "none" ? chart.getBoundingClientRect() : null;
          const actualBottom = Math.max(
            headRect?.bottom || 0,
            positionsRect?.bottom || 0,
            chartRect?.bottom || 0
          ) + 8;
          top = Math.max(reservedTenRowsBottom, actualBottom);
          hud.style.right = Math.max(5, Math.round(innerWidth - leaderboardRect.right + 10)) + "px";
        }
        hud.style.top = Math.max(8, Math.round(top)) + "px";

        const line = hud.querySelector('[data-endymion-role="status"]');
        if (line) line.textContent = `Endymion ${ENDYMION_VERSION} | Tab 1: ${status.tab1} | Tab 2: ${status.tab2} | Standby 3: ${status.tab3}`;

        const styleButton = (action, label, enabled) => {
          const button = hud.querySelector(`button[data-endymion-action="${action}"]`);
          if (!button) return;
          button.textContent = `${label}: ${enabled ? "ON" : "OFF"}`;
          button.setAttribute("aria-pressed", enabled ? "true" : "false");
          button.style.cssText = `appearance:none;border:1px solid ${enabled ? "rgba(96,220,150,.75)" : "rgba(255,255,255,.25)"};border-radius:4px;padding:3px 7px;background:${enabled ? "rgba(38,130,78,.58)" : "rgba(70,70,76,.72)"};color:#fff;font:600 10px/1.2 Arial,sans-serif;cursor:pointer;text-shadow:0 1px 2px #000`;
        };
        styleButton("auto-respawn", "Auto respawn", status.autoRespawn);
        styleButton("continue-movement", "Continue movement", status.continueMovement);
      }
      return status;
    };

    _0x18a8d1.startConnectionStatus = function endymionStartStatus() {
      if (this.connectionStatusTimer) clearInterval(this.connectionStatusTimer);
      this.connectionStatusTimer = setInterval(() => this.connectionStatus(), 250);
      setTimeout(() => this.connectionStatus(), 0);
    };

    const originalManagerInit = _0x18a8d1.init;
    _0x18a8d1.init = function endymionManagerInit() {
      const result = originalManagerInit.apply(this, arguments);
      this.pendingRespawns = new Set();
      this.pendingPromotions = new Set();
      this.promotionInFlight = 0;
      this.autoRespawnGeneration = 0;
      this.recycleLocks = new Set();
      this.backupPhase = "Waiting";
      this.backupPhaseSince = now();
      this.startConnectionStatus();
      return result;
    };

    const originalCreateSocket = _0x18a8d1.createSocket;
    _0x18a8d1.createSocket = function endymionCreateSocket(slot) {
      if (Number(slot) === 3) this.setBackupPhase("Connecting");
      const socket = originalCreateSocket.call(this, slot);
      this.connectionStatus();
      return socket;
    };

    const originalConnectBackup = _0x18a8d1.connectBackup;
    _0x18a8d1.connectBackup = function endymionConnectBackup() {
      if (!this.ws3Open) this.setBackupPhase("Connecting");
      return originalConnectBackup.apply(this, arguments);
    };

    const originalProtocolInit = _0x302a2c.init;
    _0x302a2c.init = async function endymionProtocolInit(slot) {
      const numericSlot = Number(slot);
      const result = await originalProtocolInit.call(this, slot);

      if (numericSlot === 3 && _0x18a8d1.backupReady && _0x18a8d1.ws3Open) {
        _0x18a8d1.setBackupPhase("Ready");
        _0x18a8d1.pumpPromotionQueue();
      }

      // When an active WebSocket reconnects and automatic respawn is enabled,
      // spawn it only after the normal verification path has completed. Turning
      // Auto respawn OFF clears this pending marker, so reconnecting a socket
      // never silently spawns a cell.
      if ((numericSlot === 1 || numericSlot === 2) && _0x18a8d1.pendingRespawns?.has(numericSlot)) {
        if (!isAutoRespawnEnabled()) {
          _0x18a8d1.pendingRespawns.delete(numericSlot);
        } else {
          const generation = Number(_0x18a8d1.autoRespawnGeneration || 0);
          setTimeout(() => {
            if (generation !== Number(_0x18a8d1.autoRespawnGeneration || 0) || !isAutoRespawnEnabled()) {
              _0x18a8d1.pendingRespawns?.delete(numericSlot);
              _0x18a8d1.connectionStatus?.();
              return;
            }
            const alive = numericSlot === 2 ? _0x90a1a7._isAlive2 : _0x90a1a7._isAlive;
            if (!alive && _0x302a2c.chekConnection(numericSlot)) {
              _0x302a2c.spawnTab(numericSlot);
            }
            _0x18a8d1.pendingRespawns?.delete(numericSlot);
            _0x18a8d1.connectionStatus?.();
          }, 180);
        }
      }

      _0x18a8d1.connectionStatus();
      return result;
    };

    _0x18a8d1.promoteBackup = function endymionPromoteBackup(tab, reason = "Standby promotion") {
      tab = Number(tab);
      if ((tab !== 1 && tab !== 2) || !this.backupReady || !this.ws3Open || this.promotionInFlight) return false;

      const promoted = this.ws3;
      const key = tab === 2 ? "ws2" : "ws";
      const retired = this[key];
      this.promotionInFlight = tab;
      this.pendingPromotions?.delete(tab);
      this.pendingRespawns?.delete(tab);

      _0x302a2c.stopPingLoop(tab);
      _0x302a2c.stopPingLoop(3);
      if (retired && retired !== promoted) {
        retired.onopen = retired.onmessage = retired.onclose = retired.onerror = null;
        try { retired.close(1000, "Endymion active slot recycled"); } catch (error) {}
      }
      promoted.onopen = promoted.onmessage = promoted.onclose = promoted.onerror = null;

      this[key] = promoted;
      if (tab === 1) this.connected = true; else this.connected2 = true;
      this.ws3 = null;
      this.connected3 = false;
      this.backupReady = false;
      this.backupConnecting = false;
      this.setBackupPhase("Replacing");

      _0x245b10.clearCells(tab);
      if (tab === 1) _0x90a1a7._isAlive = false; else _0x90a1a7._isAlive2 = false;
      this.bindSocket(promoted, tab);
      _0x302a2c.initPingLoop(tab);
      _0x90a1a7.typeID = tab;
      _0x40f48a.alert("Endymion", `Standby Tab 3 promoted into Tab ${tab}: ${reason}`);

      const spawn = () => _0x302a2c.spawnTab(tab);
      setTimeout(spawn, 100);
      setTimeout(() => {
        const alive = tab === 2 ? _0x90a1a7._isAlive2 : _0x90a1a7._isAlive;
        if (!alive) spawn();
      }, 650);

      this.scheduleBackup(900);
      setTimeout(() => {
        if (this.promotionInFlight === tab) this.promotionInFlight = 0;
        this.pumpPromotionQueue();
        this.connectionStatus();
      }, 1500);
      this.connectionStatus();
      return true;
    };

    _0x18a8d1.queuePromotion = function endymionQueuePromotion(tab, reason = "Playable tab died") {
      tab = Number(tab);
      if ((tab !== 1 && tab !== 2) || !this.ip) return false;
      if (!isAutoRespawnEnabled()) return false;
      this.pendingPromotions.add(tab);
      this.lastPromotionReason = reason;
      setTimeout(() => this.pumpPromotionQueue(), 180);
      this.connectionStatus();
      return true;
    };

    _0x18a8d1.setAutoRespawn = function endymionSetAutoRespawn(enabled) {
      const value = enabled !== false;
      localStorage.setItem(AUTO_RESPAWN_KEY, value ? "on" : "off");
      this.autoRespawnGeneration = Number(this.autoRespawnGeneration || 0) + 1;
      if (!value) {
        this.pendingPromotions?.clear();
        this.pendingRespawns?.clear();
        this.lastPromotionReason = "";
      }
      this.connectionStatus?.();
      return value;
    };

    _0x18a8d1.pumpPromotionQueue = function endymionPumpPromotionQueue() {
      if (!isAutoRespawnEnabled()) {
        this.pendingPromotions?.clear();
        this.pendingRespawns?.clear();
        return false;
      }
      if (this.promotionInFlight) return false;
      for (const tab of [...this.pendingPromotions]) {
        const alive = tab === 2 ? _0x90a1a7._isAlive2 : _0x90a1a7._isAlive;
        if (alive) {
          this.pendingPromotions.delete(tab);
          continue;
        }
        if (!this.backupReady || !this.ws3Open) {
          this.scheduleBackup(0);
          return false;
        }
        return this.promoteBackup(tab, this.lastPromotionReason || "Playable tab died");
      }
      return false;
    };

    _0x18a8d1.recycleActiveCell = function endymionRecycleActiveCell() {
      const tab = Number(_0x90a1a7.typeID || 1);
      const alive = tab === 2 ? _0x90a1a7._isAlive2 : _0x90a1a7._isAlive;
      if (!alive) {
        _0x40f48a.warn("Endymion", `Tab ${tab} is not alive.`);
        return false;
      }
      if (!this.backupReady || !this.ws3Open) {
        _0x40f48a.warn("Endymion", "Standby Tab 3 is not ready yet; kill/recycle was not performed.");
        return false;
      }
      if (this.recycleLocks.has(tab)) return false;
      this.recycleLocks.add(tab);
      const promoted = this.promoteBackup(tab, "manual K /kill recycle");
      setTimeout(() => this.recycleLocks.delete(tab), 1800);
      return promoted;
    };

    const originalDead1 = _0x90a1a7.dead;
    _0x90a1a7.dead = function endymionDead1() {
      const wasAlive = this._isAlive;
      const result = originalDead1.apply(this, arguments);
      if (wasAlive && !this._isAlive) _0x18a8d1.queuePromotion(1, "Tab 1 died");
      return result;
    };

    const originalDead2 = _0x90a1a7.dead2;
    _0x90a1a7.dead2 = function endymionDead2() {
      const wasAlive = this._isAlive2;
      const result = originalDead2.apply(this, arguments);
      if (wasAlive && !this._isAlive2) _0x18a8d1.queuePromotion(2, "Tab 2 died");
      return result;
    };

    _0x18a8d1.onClose = function endymionOnClose(tab, socket) {
      const numericTab = Number(tab);
      const current = numericTab === 1 ? this.ws : numericTab === 2 ? this.ws2 : this.ws3;
      if (current !== socket) return false;

      _0x302a2c.stopPingLoop(numericTab);
      if (this.intentionalDisconnect) return false;

      if (numericTab === 3) {
        this.ws3 = null;
        this.connected3 = false;
        this.backupReady = false;
        this.backupConnecting = false;
        this.setBackupPhase("Retrying");
        this.scheduleBackup(1800);
        this.connectionStatus();
        return true;
      }

      if (numericTab !== 1 && numericTab !== 2) return false;
      const wasAlive = numericTab === 2 ? Boolean(_0x90a1a7._isAlive2) : Boolean(_0x90a1a7._isAlive);

      if (numericTab === 1) {
        this.ws = null;
        this.connected = false;
      } else {
        this.ws2 = null;
        this.connected2 = false;
      }
      _0x245b10.clearCells(numericTab);
      _0x40f48a.alert("Endymion", `Tab ${numericTab} disconnected`);
      console.log(`Websocket ${numericTab} closed`);

      // Auto respawn now gates BOTH promotion and post-reconnect spawning.
      // With it OFF, the socket may reconnect normally, but it remains idle
      // until the user explicitly presses Play/switches to that tab.
      if (wasAlive && isAutoRespawnEnabled()) {
        this.pendingRespawns?.add(numericTab);
        if (this.promoteBackup(numericTab, `Tab ${numericTab} disconnected`)) {
          this.connectionStatus();
          return true;
        }
      } else {
        this.pendingRespawns?.delete(numericTab);
        this.pendingPromotions?.delete(numericTab);
      }

      const generation = Number(this.autoRespawnGeneration || 0);
      setTimeout(() => {
        const key = numericTab === 1 ? "ws" : "ws2";
        if (this.intentionalDisconnect || !this.ip || this[key]) return;
        // Reconnect the transport regardless of the Auto respawn toggle. The
        // protocol-init wrapper only spawns it if a still-valid pending marker
        // exists and the toggle is still ON.
        this.createSocket(numericTab);
        if (!isAutoRespawnEnabled() || generation !== Number(this.autoRespawnGeneration || 0)) {
          this.pendingRespawns?.delete(numericTab);
        }
      }, 1000);

      if (!(this.wsOpen || this.ws2Open)) _0x31c9b4.open();
      this.connectionStatus();
      return true;
    };

    const originalDisconnect = _0x18a8d1.disconnect;
    _0x18a8d1.disconnect = function endymionDisconnect() {
      const result = originalDisconnect.apply(this, arguments);
      this.pendingPromotions?.clear();
      this.pendingRespawns?.clear();
      this.promotionInFlight = 0;
      this.setBackupPhase("Waiting");
      return result;
    };

    const originalResetData = _0x18a8d1.resetData;
    _0x18a8d1.resetData = function endymionResetData() {
      const result = originalResetData.apply(this, arguments);
      _0x128142.tabDirections?.clear();
      _0x128142.lastTargets?.clear();
      return result;
    };

    const originalChat = _0x302a2c.chat;
    _0x302a2c.chat = function endymionChat(message, tab) {
      const command = String(message || "").trim().toLowerCase();
      if (command === "/kill" || command === "/recycle") {
        _0x18a8d1.recycleActiveCell();
        return;
      }
      return originalChat.call(this, message, tab);
    };

    document.addEventListener("keydown", event => {
      if (event.code !== "KeyK" || event.repeat || event.ctrlKey || event.altKey || event.metaKey) return;
      if (event.target?.matches?.("input, textarea, select, [contenteditable='true']")) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      _0x18a8d1.recycleActiveCell();
    }, true);

    window.ENDYMION_BUILD = ENDYMION_BUILD;
    window.DARK_ENDYMION = {
      version: ENDYMION_VERSION,
      build: ENDYMION_BUILD,
      status: () => _0x18a8d1.statusSnapshot(),
      kill: () => _0x18a8d1.recycleActiveCell(),
      recycleActiveCell: () => _0x18a8d1.recycleActiveCell(),
      promote: tab => _0x18a8d1.promoteBackup(Number(tab), "console request"),
      setAutoPromoteDead: enabled => _0x18a8d1.setAutoRespawn(enabled),
      setAutoRespawn: enabled => _0x18a8d1.setAutoRespawn(enabled),
      toggleAutoRespawn: () => _0x18a8d1.setAutoRespawn(!isAutoRespawnEnabled()),
      setContinueMovement: enabled => _0x128142.setContinueMovement(enabled),
      toggleContinueMovement: () => _0x128142.setContinueMovement(!isContinueMovementEnabled()),
      settings: () => ({
        autoRespawn: isAutoRespawnEnabled(),
        continueMovement: isContinueMovementEnabled()
      }),
      profile: () => getProfile(Number(_0x50f0c6.selected || 1)),
      ws3: () => ({
        socket: _0x18a8d1.ws3,
        open: Boolean(_0x18a8d1.ws3Open),
        ready: Boolean(_0x18a8d1.backupReady),
        connecting: Boolean(_0x18a8d1.backupConnecting),
        phase: _0x18a8d1.backupPhase || "Waiting"
      })
    };

    console.log(`[Endymion] ${ENDYMION_VERSION} loaded: ${ENDYMION_BUILD}`);
  })();

  // ========================================================================
  // Endymion V3 — Tag-first Team Union
  //
  // The normal game connections remain unchanged:
  //   ws1 = playable tab 1
  //   ws2 = playable tab 2
  //   ws3 = authenticated hot standby only
  //
  // Team Union is a separate, read-only observation layer. It serializes
  // cells already visible to this client, shares them with same-tag peers,
  // reconciles duplicate entity IDs, and plots the result on the minimap and
  // a zoomable full-map canvas. Remote observations are never inserted into
  // cells/cells2/myCells/myCells2, so they cannot alter ownership, camera,
  // spawning, collision, or standby-promotion logic.
  // ========================================================================
  (() => {
    "use strict";

    const VERSION = 3;
    const BUILD = "ENDYMION-V3.0.1-TAG-UNION-GHOST-GUARD-WS3-STANDBY";
    const CHANNEL_NAME = "endymion-v3-team-union";
    const KEYS = Object.freeze({
      enabled: "endymion-v3-team-enabled",
      shareObjects: "endymion-v3-team-share-objects",
      minimap: "endymion-v3-team-minimap",
      gameOverlay: "endymion-v3-team-game-overlay",
      nativeRelay: "endymion-v3-team-native-relay",
      relay: "endymion-v3-team-relay-url",
      secret: "endymion-v3-team-secret",
      installId: "endymion-v3-install-id",
      ghostGuardMigration: "endymion-v3.0.1-ghost-guard-migrated"
    });

    const defaults = Object.freeze({
      enabled: true,
      shareObjects: false,
      showOnMinimap: true,
      // The old full-size game-canvas projection looked like duplicate/ghost
      // cells during split/merge transitions. V3.0.1 keeps it OFF by default
      // and, when enabled, renders lightweight radar markers only.
      showOnGameCanvas: false,
      useNativeTagRelay: true,
      sendIntervalMs: 250,
      collectIntervalMs: 120,
      aggregateIntervalMs: 160,
      peerStaleMs: 3000,
      entityStaleMs: 1100,
      maxEntities: 180,
      maxNativeBytes: 24000,
      fullMapRenderIntervalMs: 50,
      uiIntervalMs: 500,
      radarMaxAgeMs: 700,
      relayUrl: "",
      secret: ""
    });

    const readText = (key, fallback = "") => {
      try {
        const value = localStorage.getItem(key);
        return value == null ? fallback : String(value);
      } catch (_error) {
        return fallback;
      }
    };

    const readBool = (key, fallback) => {
      const value = readText(key, "");
      if (!value) return Boolean(fallback);
      return value !== "off" && value !== "false" && value !== "0";
    };

    const writeText = (key, value) => {
      try { localStorage.setItem(key, String(value)); } catch (_error) {}
    };

    const bootConfig = window.ENDYMION_V3_CONFIG || {};
    const config = {
      ...defaults,
      enabled: readBool(KEYS.enabled, defaults.enabled),
      shareObjects: readBool(KEYS.shareObjects, defaults.shareObjects),
      showOnMinimap: readBool(KEYS.minimap, defaults.showOnMinimap),
      showOnGameCanvas: readBool(KEYS.gameOverlay, defaults.showOnGameCanvas),
      useNativeTagRelay: readBool(KEYS.nativeRelay, defaults.useNativeTagRelay),
      relayUrl: readText(KEYS.relay, String(bootConfig.relayUrl || defaults.relayUrl)).trim(),
      secret: readText(KEYS.secret, String(bootConfig.secret || defaults.secret)).trim().slice(0, 96)
    };

    // One-time safety migration: existing V3.0.0 installs had the full-size
    // game overlay enabled by default. Disable it once so stale remote circles
    // stop appearing as ghost cells. Users can explicitly re-enable the new
    // lightweight radar markers from Tag / Relay Setup.
    if (!readBool(KEYS.ghostGuardMigration, false)) {
      config.showOnGameCanvas = false;
      writeText(KEYS.gameOverlay, "off");
      writeText(KEYS.ghostGuardMigration, "on");
    }

    const randomPart = () => {
      try {
        if (crypto && typeof crypto.randomUUID === "function") {
          return crypto.randomUUID().replace(/-/g, "").slice(0, 18);
        }
      } catch (_error) {}
      return Math.random().toString(36).slice(2, 13) + Date.now().toString(36).slice(-6);
    };

    let installId = readText(KEYS.installId, "");
    if (!installId) {
      installId = randomPart();
      writeText(KEYS.installId, installId);
    }
    let tabId = "";
    try {
      tabId = sessionStorage.getItem("endymion-v3-tab-id") || "";
      if (!tabId) {
        tabId = randomPart().slice(0, 9);
        sessionStorage.setItem("endymion-v3-tab-id", tabId);
      }
    } catch (_error) {
      tabId = randomPart().slice(0, 9);
    }

    const state = {
      initialized: false,
      peerId: `${installId}-${tabId}`,
      room: "",
      tag: "",
      server: "",
      mode: "",
      sequence: 0,
      channel: null,
      relay: null,
      relayState: "LOCAL ONLY",
      reconnectTimer: 0,
      reconnectAttempt: 0,
      lastError: "",
      lastCollectAt: 0,
      lastSendAt: 0,
      lastAggregateAt: 0,
      lastRenderAt: 0,
      lastUiAt: 0,
      localSnapshot: null,
      peers: new Map(),
      remoteEnemies: new Map(),
      remoteTeammates: new Map(),
      teamIds: new Set(),
      teamNames: new Set(),
      dom: {
        overlay: null,
        canvas: null,
        context: null,
        peerSelect: null,
        followButton: null,
        matchButton: null,
        overlayStatus: null,
        settings: null,
        relayInput: null,
        secretInput: null,
        tagInput: null,
        enabledInput: null,
        objectsInput: null,
        minimapInput: null,
        gameOverlayInput: null,
        nativeRelayInput: null,
        settingsStatus: null,
        hudLine: null
      },
      view: {
        visible: false,
        selectedPeer: "team",
        follow: false,
        zoom: 1,
        centerX: 0.5,
        centerY: 0.5,
        dragging: false,
        pointerId: null,
        lastX: 0,
        lastY: 0
      },
      metrics: {
        snapshotsSent: 0,
        snapshotsReceived: 0,
        snapshotsDropped: 0,
        localEntities: 0,
        remoteEnemies: 0,
        remoteTeammates: 0,
        relayBytesSent: 0,
        relayBytesReceived: 0,
        nativeBytesSent: 0,
        nativeBytesReceived: 0,
        nativePacketsSent: 0,
        nativePacketsReceived: 0
      }
    };

    const now = () => Date.now();
    const finite = value => Number.isFinite(Number(value));
    const clamp = (value, min, max) => Math.max(min, Math.min(max, Number(value)));
    const round5 = value => Math.round(Number(value) * 1e5) / 1e5;
    const cleanNick = value => {
      let nick = String(value || "").replace(/[\u0000-\u001f\u007f]/g, "");
      const brace = nick.lastIndexOf("}");
      if (brace >= 0) nick = nick.slice(brace + 1);
      return nick.replace(/%\*\^/g, "").replace(/\s+/g, " ").trim().slice(0, 30);
    };
    const normalizeNick = value => cleanNick(value).toLocaleLowerCase();
    const socketOpen = socket => Boolean(socket && socket.readyState === WebSocket.OPEN);
    const formatMass = value => {
      const mass = Math.max(0, Math.round(Number(value) || 0));
      if (mass >= 1e6) return `${Math.round(mass / 1e5) / 10}m`;
      if (mass >= 1000) return `${Math.round(mass / 100) / 10}k`;
      return String(mass);
    };

    const hash32 = value => {
      let hash = 2166136261;
      const text = String(value || "");
      for (let index = 0; index < text.length; index += 1) {
        hash ^= text.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
      }
      return (hash >>> 0).toString(36);
    };

    const colorToInt = color => {
      const text = String(color || "");
      return /^#[0-9a-f]{6}$/i.test(text) ? parseInt(text.slice(1), 16) : 0x8f98a8;
    };
    const intToColor = value => `#${Math.floor(clamp(value, 0, 0xffffff)).toString(16).padStart(6, "0")}`;
    const peerColor = id => `hsl(${(parseInt(hash32(id), 36) >>> 0) % 360} 82% 62%)`;

    const currentTag = () => String(_0x90a1a7?.tag || _0x14f7b2("#tag").val() || "")
      .trim()
      .slice(0, 32);
    const currentServer = () => String(_0x18a8d1?.ip || "").trim();
    const currentMode = () => String(_0x31c9b4?.gMode || "unknown").trim();

    const primaryBounds = () => {
      const left = Number(_0x996564?.left);
      const top = Number(_0x996564?.top);
      const right = Number(_0x996564?.right);
      const bottom = Number(_0x996564?.bottom);
      if (![left, top, right, bottom].every(Number.isFinite) || right <= left || bottom <= top) return null;
      return { left, top, right, bottom, width: right - left, height: bottom - top };
    };

    const roomFor = (tag, server, mode) => {
      const normalizedTag = String(tag || "").trim().toUpperCase();
      if (!normalizedTag || !server) return "";
      const secret = config.secret || normalizedTag;
      return `e3-${VERSION}-${hash32(`${server}|${mode}|${normalizedTag}|${secret}`)}`;
    };

    const removeStaleRoomData = () => {
      state.peers.clear();
      state.remoteEnemies.clear();
      state.remoteTeammates.clear();
      state.teamIds.clear();
      state.teamNames.clear();
      updatePeerSelect();
    };

    const refreshIdentity = () => {
      const tag = currentTag();
      const server = currentServer();
      const mode = currentMode();
      const room = roomFor(tag, server, mode);
      const changed = room !== state.room;
      state.tag = tag;
      state.server = server;
      state.mode = mode;
      if (!changed) return false;
      state.room = room;
      removeStaleRoomData();
      if (socketOpen(state.relay) && room) sendRelay(joinPacket());
      updateUi(true);
      return true;
    };

    // Tag is the primary social grouping in V3. A native party can still be
    // used by the game server itself, but it no longer overrides the relay
    // room used for teammate list/minimap synchronization.
    const originalComputeRoom = _0x1530af.computeRoom;
    _0x1530af.computeRoom = function endymionV3TagRoom() {
      const tagRoom = this.sanitize("T_", _0x90a1a7?.tag);
      return tagRoom || this.privateRoom || originalComputeRoom.call(this);
    };

    const normalizePoint = (x, y, radius, bounds) => {
      const maxDimension = Math.max(bounds.width, bounds.height);
      return [
        round5((Number(x) - bounds.left) / bounds.width),
        round5((Number(y) - bounds.top) / bounds.height),
        round5(Number(radius) / maxDimension)
      ];
    };

    const localTeamIdentity = () => {
      const names = new Set();
      const ids = new Set();
      const addName = value => {
        const name = normalizeNick(value);
        if (name) names.add(name);
      };
      addName(_0x90a1a7?.nick);
      addName(_0x90a1a7?.nick2);
      try {
        for (const player of _0x12ac51.teamPlayers.values()) addName(player?.nick);
      } catch (_error) {}
      try {
        for (const cell of _0x14d4a3.myCells.values()) ids.add(Number(cell.id));
        for (const cell of _0x14d4a3.myCells2.values()) ids.add(Number(cell.id));
      } catch (_error) {}
      return { names, ids };
    };

    const cellWorldRecord = (cell, tab, bounds, identity) => {
      if (!cell || cell.fadeStartTime || cell.isFood) return null;
      const id = Number(cell.id);
      const radius = Number(finite(cell.animRadius) && Number(cell.animRadius) > 0 ? cell.animRadius : cell.radius);
      let x = Number(finite(cell.animX) ? cell.animX : cell.x);
      let y = Number(finite(cell.animY) ? cell.animY : cell.y);
      if (!Number.isInteger(id) || id <= 0 || !finite(x) || !finite(y) || !finite(radius) || radius <= 0) return null;
      if (Number(tab) === 2) {
        const shift = _0x996564.position;
        x -= Number(shift.x || 0);
        y -= Number(shift.y || 0);
      }
      const point = normalizePoint(x, y, radius, bounds);
      if (point[0] < -0.15 || point[0] > 1.15 || point[1] < -0.15 || point[1] > 1.15) return null;
      const nick = cleanNick(cell.nick);
      const normalizedNick = normalizeNick(nick);
      const own = Boolean(cell.isMine || identity.ids.has(id));
      const teammateKnown = own || Boolean(normalizedNick && identity.names.has(normalizedNick)) || Boolean(cell.isFriend);
      const isVirus = Boolean(cell.isVirus);
      const isEjected = Boolean(cell.isEjected);
      const isPlayer = !isVirus && !isEjected;
      let flags = 0;
      if (isVirus) flags |= 1;
      if (isEjected) flags |= 2;
      if (own) flags |= 4;
      if (isPlayer) flags |= 8;
      if (teammateKnown) flags |= 16;
      if (Number(tab) === 2) flags |= 32;
      return {
        id,
        tab: Number(tab) === 2 ? 2 : 1,
        nx: point[0],
        ny: point[1],
        nr: point[2],
        mass: Math.max(1, Math.round(radius * radius / 100)),
        color: colorToInt(cell.colorHex),
        flags,
        nick,
        updatedAt: Number(cell.lastUpdateTime || now())
      };
    };

    const collectLocalSnapshot = () => {
      const bounds = primaryBounds();
      if (!bounds || !state.room || !config.enabled) return null;
      const identity = localTeamIdentity();
      const entities = new Map();
      const addMap = (map, tab) => {
        if (!(map instanceof Map)) return;
        for (const cell of map.values()) {
          const record = cellWorldRecord(cell, tab, bounds, identity);
          if (!record) continue;
          const previous = entities.get(record.id);
          if (!previous || record.updatedAt >= previous.updatedAt || (record.flags & 4)) entities.set(record.id, record);
        }
      };
      addMap(_0x14d4a3.cells, 1);
      addMap(_0x14d4a3.cells2, 2);

      const rows = [...entities.values()]
        .filter(record => config.shareObjects || (record.flags & 8))
        .sort((a, b) => {
          const ownA = a.flags & 4 ? 1 : 0;
          const ownB = b.flags & 4 ? 1 : 0;
          const playerA = a.flags & 8 ? 1 : 0;
          const playerB = b.flags & 8 ? 1 : 0;
          return ownB - ownA || playerB - playerA || b.mass - a.mass;
        })
        .slice(0, Math.max(80, Number(config.maxEntities) || 520));

      const owned = rows
        .filter(record => record.flags & 4)
        .map(record => [record.tab, record.id, record.nx, record.ny, record.nr, record.mass, record.nick, record.color]);

      const encoded = rows.map(record => [
        record.id,
        record.nx,
        record.ny,
        record.nr,
        record.mass,
        record.color,
        record.flags,
        // Enemy names are not required for the tactical map and account for
        // a large part of the relay payload. Keep names only for owned/tag
        // cells, where they are needed for teammate classification.
        record.flags & (4 | 16) ? record.nick : ""
      ]);

      const view = _0xddb6d6?.viewBounds;
      let viewport = null;
      if (view && [view.left, view.top, view.right, view.bottom].every(finite)) {
        viewport = [
          round5((Number(view.left) - bounds.left) / bounds.width),
          round5((Number(view.top) - bounds.top) / bounds.height),
          round5((Number(view.right) - bounds.left) / bounds.width),
          round5((Number(view.bottom) - bounds.top) / bounds.height)
        ];
      }

      const teamNames = [...identity.names].slice(0, 40);
      state.metrics.localEntities = encoded.length;
      return {
        t: "s",
        v: VERSION,
        r: state.room,
        p: state.peerId,
        q: ++state.sequence,
        ts: now(),
        n: [cleanNick(_0x90a1a7?.nick), cleanNick(_0x90a1a7?.nick2)],
        tn: teamNames,
        vp: viewport,
        o: owned,
        e: encoded
      };
    };

    const joinPacket = () => ({
      t: "j",
      v: VERSION,
      r: state.room,
      p: state.peerId,
      n: [cleanNick(_0x90a1a7?.nick), cleanNick(_0x90a1a7?.nick2)],
      tag: state.tag,
      ts: now()
    });

    const NATIVE_PREFIX = "E3U:";
    const NATIVE_CHAT_TYPE = 250;

    const fitNativePacket = packet => {
      if (!packet || !Array.isArray(packet.e)) return packet;
      let candidate = packet;
      let text = JSON.stringify(candidate);
      if (text.length <= config.maxNativeBytes) return { packet: candidate, text };
      let limit = Math.min(packet.e.length, 220);
      while (limit > 20) {
        candidate = { ...packet, e: packet.e.slice(0, limit) };
        text = JSON.stringify(candidate);
        if (text.length <= config.maxNativeBytes) return { packet: candidate, text };
        limit = Math.floor(limit * 0.72);
      }
      candidate = { ...packet, e: packet.e.slice(0, 20) };
      text = JSON.stringify(candidate);
      return text.length <= config.maxNativeBytes ? { packet: candidate, text } : null;
    };

    const sendNativeTagPacket = packet => {
      if (!config.useNativeTagRelay || !_0x1530af?.isOpen?.() || !state.tag || !state.room) return false;
      const fitted = fitNativePacket(packet);
      if (!fitted) return false;
      const message = NATIVE_PREFIX + fitted.text;
      let bytes;
      try { bytes = unescape(encodeURIComponent(message)); } catch (_error) { return false; }
      if (!bytes || bytes.length > config.maxNativeBytes + NATIVE_PREFIX.length * 4) return false;
      try {
        // Opcode 64 is the relay's existing fire-and-forget chat envelope.
        // Type 250 is reserved by Endymion V3 and is intercepted before the
        // normal chat renderer, so map snapshots never appear as chat text.
        const view = _0x2d5cce.createView(3 + bytes.length);
        view.setUint8(0, 64, true);
        view.setUint8(1, NATIVE_CHAT_TYPE, true);
        for (let index = bytes.length; index--;) view.setUint8(index + 2, bytes.charCodeAt(index), true);
        view.setUint8(bytes.length + 2, 0, true);
        _0x1530af.sendVolatile(view.buffer);
        state.metrics.nativeBytesSent += bytes.length;
        state.metrics.nativePacketsSent += 1;
        return true;
      } catch (error) {
        state.lastError = `Built-in tag relay send failed: ${String(error?.message || error)}`;
        return false;
      }
    };

    const sendRelay = packet => {
      if (!socketOpen(state.relay)) return false;
      try {
        const text = JSON.stringify(packet);
        state.relay.send(text);
        state.metrics.relayBytesSent += text.length;
        return true;
      } catch (error) {
        state.lastError = String(error?.message || error);
        return false;
      }
    };

    const sendPacket = packet => {
      if (!packet) return false;
      let sent = false;
      try {
        // BroadcastChannel is retained for same-browser testing. It is local
        // and does not touch the game/tag transport.
        state.channel?.postMessage(packet);
        sent = true;
      } catch (_error) {}

      // Do not send the same full snapshot through both network relays. When
      // an external relay is connected it takes priority; otherwise use the
      // built-in tag relay. This removes duplicate serialization, traffic and
      // parsing spikes on every client.
      if (socketOpen(state.relay)) sent = sendRelay(packet) || sent;
      else sent = sendNativeTagPacket(packet) || sent;

      if (sent) state.metrics.snapshotsSent += 1;
      return sent;
    };

    const validArray = (value, max) => Array.isArray(value) && value.length <= max;

    const acceptSnapshot = packet => {
      if (!packet || packet.t !== "s" || Number(packet.v) !== VERSION) return false;
      if (!state.room || packet.r !== state.room || packet.p === state.peerId) return false;
      if (typeof packet.p !== "string" || packet.p.length > 90) return false;
      if (!validArray(packet.e, 800) || !validArray(packet.o, 64)) return false;
      const timestamp = now();
      let peer = state.peers.get(packet.p);
      if (peer && Number(packet.q) <= Number(peer.sequence || 0)) return false;
      if (!peer) {
        peer = {
          id: packet.p,
          color: peerColor(packet.p),
          sequence: 0,
          lastSeenAt: 0,
          sourceTimestamp: 0,
          names: [],
          teamNames: [],
          viewport: null,
          owned: new Map(),
          entities: new Map()
        };
        state.peers.set(packet.p, peer);
      }
      peer.sequence = Number(packet.q) || peer.sequence + 1;
      peer.lastSeenAt = timestamp;
      peer.sourceTimestamp = Number(packet.ts) || timestamp;
      peer.names = Array.isArray(packet.n) ? packet.n.map(cleanNick).filter(Boolean).slice(0, 2) : [];
      peer.teamNames = Array.isArray(packet.tn) ? packet.tn.map(normalizeNick).filter(Boolean).slice(0, 40) : [];
      peer.viewport = Array.isArray(packet.vp) && packet.vp.length === 4 && packet.vp.every(finite)
        ? packet.vp.map(Number)
        : null;
      peer.owned = new Map();
      for (const row of packet.o) {
        if (!Array.isArray(row) || row.length < 8) continue;
        const [tab, id, nx, ny, nr, mass, nick, color] = row;
        if (![id, nx, ny, nr, mass, color].every(finite)) continue;
        peer.owned.set(Number(id), {
          tab: Number(tab) === 2 ? 2 : 1,
          id: Number(id),
          nx: Number(nx),
          ny: Number(ny),
          nr: Number(nr),
          mass: Math.max(1, Number(mass)),
          nick: cleanNick(nick),
          colorHex: intToColor(color),
          updatedAt: timestamp
        });
      }
      peer.entities = new Map();
      for (const row of packet.e) {
        if (!Array.isArray(row) || row.length < 8) continue;
        const [id, nx, ny, nr, mass, color, flags, nick] = row;
        if (![id, nx, ny, nr, mass, color, flags].every(finite)) continue;
        const entityId = Number(id);
        if (!Number.isInteger(entityId) || entityId <= 0) continue;
        peer.entities.set(entityId, {
          id: entityId,
          nx: Number(nx),
          ny: Number(ny),
          nr: Number(nr),
          mass: Math.max(1, Number(mass)),
          colorHex: intToColor(color),
          flags: Number(flags) | 0,
          nick: cleanNick(nick),
          updatedAt: timestamp
        });
      }
      state.metrics.snapshotsReceived += 1;
      updatePeerSelect();
      return true;
    };

    const handleTransportPacket = raw => {
      let packet = raw;
      if (raw && typeof raw === "object" && "data" in raw) packet = raw.data;
      if (typeof packet === "string") {
        state.metrics.relayBytesReceived += packet.length;
        try { packet = JSON.parse(packet); } catch (_error) { return false; }
      }
      if (!packet || typeof packet !== "object") return false;
      if (packet.t === "welcome") {
        state.relayState = "CONNECTED";
        updateUi(true);
        return true;
      }
      return acceptSnapshot(packet);
    };

    const originalTagChatV3 = _0x12ac51.chat;
    _0x12ac51.chat = function endymionV3TagData(senderId, type, message, displayName) {
      if (Number(type) === NATIVE_CHAT_TYPE && String(message || "").startsWith(NATIVE_PREFIX)) {
        const text = String(message).slice(NATIVE_PREFIX.length);
        state.metrics.nativeBytesReceived += text.length;
        state.metrics.nativePacketsReceived += 1;
        try {
          return handleTransportPacket(JSON.parse(text));
        } catch (_error) {
          state.metrics.snapshotsDropped += 1;
          return false;
        }
      }
      return originalTagChatV3.apply(this, arguments);
    };

    const closeRelay = () => {
      clearTimeout(state.reconnectTimer);
      state.reconnectTimer = 0;
      const relay = state.relay;
      state.relay = null;
      if (relay) {
        relay.onopen = relay.onmessage = relay.onclose = relay.onerror = null;
        try { relay.close(1000, "Endymion V3 relay reconnect"); } catch (_error) {}
      }
    };

    const scheduleReconnect = () => {
      clearTimeout(state.reconnectTimer);
      if (!config.enabled || !config.relayUrl) return;
      const delay = Math.min(15000, 900 * Math.pow(2, state.reconnectAttempt++));
      state.relayState = `RETRY ${Math.ceil(delay / 1000)}s`;
      state.reconnectTimer = setTimeout(connectRelay, delay);
      updateUi(true);
    };

    const connectRelay = () => {
      closeRelay();
      state.reconnectAttempt = 0;
      const url = String(config.relayUrl || "").trim();
      if (!url) {
        state.relayState = "LOCAL ONLY";
        updateUi(true);
        return false;
      }
      if (location.protocol === "https:" && /^ws:\/\//i.test(url) && !/^ws:\/\/(localhost|127\.0\.0\.1|\[::1\])/i.test(url)) {
        state.lastError = "HTTPS pages require a wss:// Team Union relay.";
        state.relayState = "INVALID URL";
        updateUi(true);
        return false;
      }
      try {
        state.relayState = "CONNECTING";
        const socket = new WebSocket(url);
        state.relay = socket;
        socket.onopen = () => {
          if (state.relay !== socket) return;
          state.reconnectAttempt = 0;
          state.relayState = "CONNECTED";
          if (state.room) sendRelay(joinPacket());
          updateUi(true);
        };
        socket.onmessage = event => {
          if (state.relay !== socket) return;
          handleTransportPacket(event);
        };
        socket.onerror = () => {
          if (state.relay !== socket) return;
          state.lastError = "Team Union relay connection error.";
          state.relayState = "ERROR";
          updateUi(true);
        };
        socket.onclose = event => {
          if (state.relay !== socket) return;
          state.relay = null;
          state.lastError = event.reason || state.lastError;
          scheduleReconnect();
        };
        updateUi(true);
        return true;
      } catch (error) {
        state.lastError = String(error?.message || error);
        state.relayState = "ERROR";
        scheduleReconnect();
        return false;
      }
    };

    const aggregateRemote = timestamp => {
      const localIdentity = localTeamIdentity();
      const teamIds = new Set(localIdentity.ids);
      const teamNames = new Set(localIdentity.names);
      for (const [peerId, peer] of [...state.peers]) {
        if (timestamp - peer.lastSeenAt > config.peerStaleMs) {
          state.peers.delete(peerId);
          continue;
        }
        for (const name of peer.names) {
          const normalized = normalizeNick(name);
          if (normalized) teamNames.add(normalized);
        }
        for (const name of peer.teamNames) if (name) teamNames.add(name);
        for (const id of peer.owned.keys()) teamIds.add(Number(id));
      }

      const groups = new Map();
      for (const peer of state.peers.values()) {
        if (timestamp - peer.lastSeenAt > config.peerStaleMs) continue;
        for (const entity of peer.entities.values()) {
          if (timestamp - entity.updatedAt > config.entityStaleMs) continue;
          let list = groups.get(entity.id);
          if (!list) groups.set(entity.id, list = []);
          list.push({ ...entity, peerId: peer.id, peerColor: peer.color });
        }
      }

      const enemies = new Map();
      const teammates = new Map();
      for (const [id, candidates] of groups) {
        candidates.sort((a, b) => b.updatedAt - a.updatedAt);
        const anchor = candidates[0];
        const maxDistance = Math.max(0.012, anchor.nr * 4.5);
        const coherent = candidates.filter(candidate => Math.hypot(candidate.nx - anchor.nx, candidate.ny - anchor.ny) <= maxDistance);
        const pool = coherent.length ? coherent : [anchor];
        let total = 0, nx = 0, ny = 0, nr = 0;
        for (const candidate of pool) {
          const freshness = Math.max(0.2, 1 - (timestamp - candidate.updatedAt) / config.entityStaleMs);
          const weight = Math.max(0.00001, candidate.nr) * freshness;
          total += weight;
          nx += candidate.nx * weight;
          ny += candidate.ny * weight;
          nr += candidate.nr * weight;
        }
        const metadata = candidates.find(candidate => candidate.nick) || anchor;
        const flags = candidates.reduce((value, candidate) => value | candidate.flags, 0);
        const nick = cleanNick(metadata.nick);
        const normalizedNick = normalizeNick(nick);
        const isVirus = Boolean(flags & 1);
        const isEjected = Boolean(flags & 2);
        const isPlayer = Boolean(flags & 8);
        const isTeam = Boolean(
          teamIds.has(Number(id)) ||
          (flags & 4) ||
          (flags & 16) ||
          (normalizedNick && teamNames.has(normalizedNick))
        );
        const merged = {
          id: Number(id),
          nx: total ? nx / total : anchor.nx,
          ny: total ? ny / total : anchor.ny,
          nr: total ? nr / total : anchor.nr,
          mass: Math.max(...candidates.map(candidate => Number(candidate.mass) || 1)),
          colorHex: metadata.colorHex,
          nick,
          isVirus,
          isEjected,
          isPlayer,
          isTeam,
          peerIds: [...new Set(candidates.map(candidate => candidate.peerId))],
          updatedAt: Math.max(...candidates.map(candidate => candidate.updatedAt)),
          conflict: candidates.some(candidate => Math.hypot(candidate.nx - anchor.nx, candidate.ny - anchor.ny) > maxDistance)
        };
        if (isTeam) teammates.set(Number(id), merged);
        else if (isPlayer || config.shareObjects) enemies.set(Number(id), merged);
      }
      state.remoteEnemies = enemies;
      state.remoteTeammates = teammates;
      state.teamIds = teamIds;
      state.teamNames = teamNames;
      state.metrics.remoteEnemies = enemies.size;
      state.metrics.remoteTeammates = teammates.size;
      updatePeerSelect();
    };

    const localRows = () => {
      const snapshot = state.localSnapshot;
      if (!snapshot || !Array.isArray(snapshot.e)) return [];
      return snapshot.e.map(row => ({
        id: Number(row[0]),
        nx: Number(row[1]),
        ny: Number(row[2]),
        nr: Number(row[3]),
        mass: Number(row[4]),
        colorHex: intToColor(row[5]),
        flags: Number(row[6]) | 0,
        nick: cleanNick(row[7]),
        updatedAt: Number(snapshot.ts || now()),
        local: true
      }));
    };

    const isTeamRow = row => {
      const nick = normalizeNick(row.nick);
      return Boolean((row.flags & 4) || (row.flags & 16) || state.teamIds.has(row.id) || (nick && state.teamNames.has(nick)));
    };

    const mapPoint = (nx, ny, width, height) => {
      const base = Math.min(width, height) * 0.9;
      const scale = base * state.view.zoom;
      return {
        x: width / 2 + (Number(nx) - state.view.centerX) * scale,
        y: height / 2 + (Number(ny) - state.view.centerY) * scale,
        scale
      };
    };

    const drawGrid = (ctx, width, height) => {
      ctx.save();
      ctx.fillStyle = "#060910";
      ctx.fillRect(0, 0, width, height);
      const topLeft = mapPoint(0, 0, width, height);
      const bottomRight = mapPoint(1, 1, width, height);
      ctx.fillStyle = "#090e18";
      ctx.fillRect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);
      ctx.strokeStyle = "rgba(255,255,255,.35)";
      ctx.lineWidth = 2;
      ctx.strokeRect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,.12)";
      ctx.fillStyle = "rgba(255,255,255,.12)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "600 14px Segoe UI,Arial,sans-serif";
      for (let index = 1; index < 5; index += 1) {
        const x = mapPoint(index / 5, 0, width, height).x;
        const y = mapPoint(0, index / 5, width, height).y;
        ctx.beginPath();
        ctx.moveTo(x, topLeft.y);
        ctx.lineTo(x, bottomRight.y);
        ctx.moveTo(topLeft.x, y);
        ctx.lineTo(bottomRight.x, y);
        ctx.stroke();
      }
      for (let row = 0; row < 5; row += 1) {
        for (let col = 0; col < 5; col += 1) {
          const point = mapPoint((col + 0.5) / 5, (row + 0.5) / 5, width, height);
          ctx.fillText(`${String.fromCharCode(65 + row)}${col + 1}`, point.x, point.y);
        }
      }
      ctx.restore();
    };

    const drawViewport = (ctx, viewport, width, height, color, label) => {
      if (!Array.isArray(viewport) || viewport.length !== 4 || !viewport.every(finite)) return;
      const a = mapPoint(viewport[0], viewport[1], width, height);
      const b = mapPoint(viewport[2], viewport[3], width, height);
      ctx.save();
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.72;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([7, 5]);
      ctx.strokeRect(a.x, a.y, b.x - a.x, b.y - a.y);
      if (label && Math.abs(b.x - a.x) > 50) {
        ctx.setLineDash([]);
        ctx.fillStyle = color;
        ctx.font = "600 10px Segoe UI,Arial,sans-serif";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(label.slice(0, 18), a.x + 4, a.y + 4);
      }
      ctx.restore();
    };

    const drawEntity = (ctx, entity, width, height, style = {}) => {
      const point = mapPoint(entity.nx, entity.ny, width, height);
      const radius = clamp(Number(entity.nr) * point.scale, style.minimumRadius || 2.3, style.maximumRadius || 90);
      if (point.x < -radius || point.y < -radius || point.x > width + radius || point.y > height + radius) return;
      const age = Math.max(0, now() - Number(entity.updatedAt || now()));
      const alpha = clamp(1 - age / config.entityStaleMs, 0.2, 1);
      ctx.save();
      ctx.globalAlpha = style.alpha == null ? alpha : style.alpha * alpha;
      ctx.beginPath();
      ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = entity.isVirus || (entity.flags & 1)
        ? "#67f07b"
        : entity.isEjected || (entity.flags & 2)
          ? "#ffc857"
          : (/^#[0-9a-f]{6}$/i.test(entity.colorHex) ? entity.colorHex : "#99a2b1");
      ctx.fill();
      ctx.strokeStyle = style.stroke || (entity.conflict ? "#ffb84d" : "#ff4e6a");
      ctx.lineWidth = style.lineWidth || 1.6;
      ctx.stroke();
      if (!(entity.isVirus || entity.isEjected || (entity.flags & 1) || (entity.flags & 2)) && radius >= 7) {
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `700 ${clamp(radius * 0.55, 8, 16)}px Segoe UI,Arial,sans-serif`;
        ctx.fillText(formatMass(entity.mass), point.x, point.y);
      }
      if (entity.nick && radius >= 8) {
        ctx.fillStyle = "rgba(255,255,255,.95)";
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        ctx.font = "10px Segoe UI,Arial,sans-serif";
        ctx.fillText(cleanNick(entity.nick).slice(0, 18), point.x, point.y - radius - 3);
      }
      ctx.restore();
    };

    const selectedPeer = () => state.view.selectedPeer === "team" ? null : state.peers.get(state.view.selectedPeer);

    const matchSelectedPeerView = () => {
      const peer = selectedPeer();
      if (!peer) {
        state.view.centerX = 0.5;
        state.view.centerY = 0.5;
        state.view.zoom = 1;
        return;
      }
      const viewport = peer.viewport;
      if (Array.isArray(viewport) && viewport.length === 4) {
        const width = Math.max(0.02, Math.abs(viewport[2] - viewport[0]));
        const height = Math.max(0.02, Math.abs(viewport[3] - viewport[1]));
        state.view.centerX = clamp((viewport[0] + viewport[2]) / 2, 0, 1);
        state.view.centerY = clamp((viewport[1] + viewport[3]) / 2, 0, 1);
        state.view.zoom = clamp(0.82 / Math.max(width, height), 1, 18);
        return;
      }
      if (peer.owned.size) {
        let x = 0, y = 0;
        for (const cell of peer.owned.values()) { x += cell.nx; y += cell.ny; }
        state.view.centerX = x / peer.owned.size;
        state.view.centerY = y / peer.owned.size;
        state.view.zoom = 4;
      }
    };

    const updateFollow = () => {
      if (!state.view.follow) return;
      const peer = selectedPeer();
      if (!peer) return;
      if (peer.owned.size) {
        let x = 0, y = 0;
        for (const cell of peer.owned.values()) { x += cell.nx; y += cell.ny; }
        state.view.centerX += (x / peer.owned.size - state.view.centerX) * 0.16;
        state.view.centerY += (y / peer.owned.size - state.view.centerY) * 0.16;
      } else if (peer.viewport) {
        const targetX = (peer.viewport[0] + peer.viewport[2]) / 2;
        const targetY = (peer.viewport[1] + peer.viewport[3]) / 2;
        state.view.centerX += (targetX - state.view.centerX) * 0.16;
        state.view.centerY += (targetY - state.view.centerY) * 0.16;
      }
    };

    const renderFullMap = timestamp => {
      if (!state.view.visible || !state.dom.canvas || !state.dom.context) return;
      const canvas = state.dom.canvas;
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width * devicePixelRatio));
      const height = Math.max(1, Math.round(rect.height * devicePixelRatio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      const ctx = state.dom.context;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      const cssWidth = rect.width;
      const cssHeight = rect.height;
      updateFollow();
      drawGrid(ctx, cssWidth, cssHeight);

      const peer = selectedPeer();
      const visiblePeers = peer ? [peer] : [...state.peers.values()];
      for (const item of visiblePeers) {
        if (timestamp - item.lastSeenAt > config.peerStaleMs) continue;
        drawViewport(ctx, item.viewport, cssWidth, cssHeight, item.color, item.names[0] || "TAG");
        for (const owned of item.owned.values()) {
          drawEntity(ctx, {
            ...owned,
            flags: 4 | (owned.tab === 2 ? 32 : 0),
            isVirus: false,
            isEjected: false
          }, cssWidth, cssHeight, { stroke: item.color, lineWidth: 2.3, minimumRadius: 3.2, alpha: 0.95 });
        }
      }

      if (peer) {
        for (const entity of peer.entities.values()) {
          const team = peer.owned.has(entity.id) || Boolean(entity.flags & 16);
          drawEntity(ctx, entity, cssWidth, cssHeight, {
            stroke: team ? peer.color : "#ff4e6a",
            lineWidth: team ? 2.3 : 1.6
          });
        }
      } else {
        const localMap = new Map();
        for (const row of localRows()) localMap.set(row.id, row);
        for (const row of localMap.values()) {
          const own = Boolean(row.flags & 4);
          const team = isTeamRow(row);
          drawEntity(ctx, row, cssWidth, cssHeight, {
            stroke: own ? (row.flags & 32 ? "#6fe8ff" : "#ff5ebc") : team ? "#64e6a2" : "#ff4e6a",
            lineWidth: own ? 2.8 : team ? 2.2 : 1.5,
            alpha: 1
          });
        }
        for (const entity of state.remoteEnemies.values()) {
          if (localMap.has(entity.id)) continue;
          drawEntity(ctx, entity, cssWidth, cssHeight, { stroke: entity.conflict ? "#ffb84d" : "#ff4e6a", lineWidth: 1.7 });
        }
        for (const entity of state.remoteTeammates.values()) {
          if (localMap.has(entity.id)) continue;
          drawEntity(ctx, entity, cssWidth, cssHeight, { stroke: "#64e6a2", lineWidth: 2.2 });
        }
        if (state.localSnapshot?.vp) drawViewport(ctx, state.localSnapshot.vp, cssWidth, cssHeight, "#ffffff", "YOU");
      }

      if (state.dom.overlayStatus) {
        const label = peer ? (peer.names[0] || "SELECTED TAG PLAYER") : "FULL TEAM UNION";
        state.dom.overlayStatus.textContent = `${label} · ${state.peers.size} PEERS · ${state.remoteEnemies.size} REMOTE ENEMIES · ${Math.round(state.view.zoom * 100)}%`;
      }
    };

    const drawMinimap = (ctx, size, timestamp) => {
      if (!config.enabled || !config.showOnMinimap || !ctx || !size) return;
      ctx.save();
      for (const peer of state.peers.values()) {
        if (timestamp - peer.lastSeenAt > config.peerStaleMs) continue;
        if (peer.viewport) {
          const [left, top, right, bottom] = peer.viewport;
          ctx.strokeStyle = peer.color;
          ctx.globalAlpha = 0.38;
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 3]);
          ctx.strokeRect(left * size, top * size, (right - left) * size, (bottom - top) * size);
          ctx.setLineDash([]);
        }
        for (const cell of peer.owned.values()) {
          const radius = clamp(cell.nr * size, 2.2, 8);
          ctx.globalAlpha = 0.9;
          ctx.beginPath();
          ctx.arc(cell.nx * size, cell.ny * size, radius, 0, Math.PI * 2);
          ctx.fillStyle = peer.color;
          ctx.fill();
          ctx.strokeStyle = "rgba(255,255,255,.9)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      for (const enemy of state.remoteEnemies.values()) {
        const radius = clamp(enemy.nr * size, 1.8, 9);
        const age = timestamp - enemy.updatedAt;
        ctx.globalAlpha = clamp(1 - age / config.entityStaleMs, 0.25, 0.92);
        ctx.beginPath();
        ctx.arc(enemy.nx * size, enemy.ny * size, radius, 0, Math.PI * 2);
        ctx.fillStyle = enemy.isVirus ? "#67f07b" : enemy.isEjected ? "#ffc857" : enemy.colorHex;
        ctx.fill();
        ctx.strokeStyle = enemy.conflict ? "#ffb84d" : "#ff4e6a";
        ctx.lineWidth = 1.2;
        ctx.stroke();
        if (enemy.isPlayer && radius >= 4.8 && enemy.mass >= 500) {
          ctx.fillStyle = "#fff";
          ctx.font = "700 7px Arial,sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(formatMass(enemy.mass), enemy.nx * size, enemy.ny * size);
        }
      }
      ctx.restore();
    };

    const drawGameWorldOverlay = (ctx, canvas, timestamp) => {
      if (
        !config.enabled ||
        !config.showOnGameCanvas ||
        state.view.visible ||
        !ctx ||
        !canvas
      ) return;

      const bounds = primaryBounds();
      if (!bounds || !_0xddb6d6 || !finite(_0xddb6d6.viewport) || Number(_0xddb6d6.viewport) <= 0) return;

      const localIds = new Set();
      const spatial = new Map();
      const gridSize = 0.025;
      const addSpatial = (cell, tab) => {
        if (!cell || cell.fadeStartTime || cell.isFood) return;
        const id = Number(cell.id);
        const radius = Number(finite(cell.animRadius) && Number(cell.animRadius) > 0 ? cell.animRadius : cell.radius);
        let x = Number(finite(cell.animX) ? cell.animX : cell.x);
        let y = Number(finite(cell.animY) ? cell.animY : cell.y);
        if (!Number.isInteger(id) || id <= 0 || !finite(x) || !finite(y) || !finite(radius) || radius <= 0) return;
        if (Number(tab) === 2) {
          const shift = _0x996564.position;
          x -= Number(shift.x || 0);
          y -= Number(shift.y || 0);
        }
        const [nx, ny, nr] = normalizePoint(x, y, radius, bounds);
        localIds.add(id);
        const gx = Math.floor(nx / gridSize);
        const gy = Math.floor(ny / gridSize);
        const key = `${gx}:${gy}`;
        let bucket = spatial.get(key);
        if (!bucket) spatial.set(key, bucket = []);
        bucket.push({ id, nx, ny, nr });
      };

      try {
        for (const cell of _0x14d4a3.cells.values()) addSpatial(cell, 1);
        for (const cell of _0x14d4a3.cells2.values()) addSpatial(cell, 2);
      } catch (_error) {}

      const spatiallyDuplicated = entity => {
        if (localIds.has(Number(entity.id))) return true;
        const gx = Math.floor(Number(entity.nx) / gridSize);
        const gy = Math.floor(Number(entity.ny) / gridSize);
        for (let ox = -1; ox <= 1; ox += 1) {
          for (let oy = -1; oy <= 1; oy += 1) {
            const bucket = spatial.get(`${gx + ox}:${gy + oy}`);
            if (!bucket) continue;
            for (const local of bucket) {
              const radiusRatio = Number(entity.nr) / Math.max(0.000001, Number(local.nr));
              if (radiusRatio < 0.42 || radiusRatio > 2.4) continue;
              const tolerance = Math.max(0.0035, (Number(entity.nr) + Number(local.nr)) * 0.55);
              if (Math.hypot(Number(entity.nx) - local.nx, Number(entity.ny) - local.ny) <= tolerance) return true;
            }
          }
        }
        return false;
      };

      const viewport = Number(_0xddb6d6.viewport);
      const cameraX = Number(_0xddb6d6.x || 0);
      const cameraY = Number(_0xddb6d6.y || 0);

      // The old overlay projected full remote cell circles, which looked like
      // real duplicate cells while a split/merge update was in flight. The
      // replacement is a lightweight radar marker: position + mass only.
      const candidates = [...state.remoteEnemies.values()]
        .filter(entity => (
          entity?.isPlayer &&
          timestamp - Number(entity.updatedAt || 0) <= Number(config.radarMaxAgeMs || 700) &&
          !spatiallyDuplicated(entity)
        ))
        .sort((a, b) => Number(b.mass || 0) - Number(a.mass || 0))
        .slice(0, 80);

      for (const entity of candidates) {
        const worldX = bounds.left + Number(entity.nx) * bounds.width;
        const worldY = bounds.top + Number(entity.ny) * bounds.height;
        const screenX = canvas.width / 2 + (worldX - cameraX) * viewport;
        const screenY = canvas.height / 2 + (worldY - cameraY) * viewport;
        const markerRadius = clamp(5 + Math.log10(Math.max(1, Number(entity.mass) || 1)) * 2.2, 7, 16);
        if (
          screenX < -markerRadius ||
          screenY < -markerRadius ||
          screenX > canvas.width + markerRadius ||
          screenY > canvas.height + markerRadius
        ) continue;

        const age = Math.max(0, timestamp - Number(entity.updatedAt || timestamp));
        const alpha = clamp(1 - age / Number(config.radarMaxAgeMs || 700), 0.18, 0.82);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(screenX, screenY, markerRadius, 0, Math.PI * 2);
        ctx.strokeStyle = entity.conflict ? "#ffb84d" : "#6fe8ff";
        ctx.lineWidth = 1.6;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(screenX, screenY, 2.1, 0, Math.PI * 2);
        ctx.fillStyle = /^#[0-9a-f]{6}$/i.test(entity.colorHex) ? entity.colorHex : "#6fe8ff";
        ctx.fill();

        ctx.globalAlpha = Math.min(0.95, alpha + 0.18);
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        ctx.font = "700 10px Segoe UI,Arial,sans-serif";
        ctx.fillText(formatMass(entity.mass), screenX, screenY - markerRadius - 2);
        ctx.restore();
      }
    };

    const installStyle = () => {
      if (document.getElementById("endymion-v3-style")) return;
      const style = document.createElement("style");
      style.id = "endymion-v3-style";
      style.textContent = `
        #party-token,#create-party,#join-party,#leave-party,#party-context-menu{display:none!important}
        #tag{min-width:118px!important;flex:1!important;border-color:rgba(100,230,162,.6)!important}
        #teamlist-head span{letter-spacing:.04em}
        .endymion-v3-team-buttons{display:flex;gap:4px;margin-bottom:4px}
        .endymion-v3-team-buttons button{flex:1;height:27px;border:1px solid rgba(111,232,255,.55);background:rgba(13,26,39,.92);color:#dff8ff;font:700 10px/1 Arial,sans-serif;cursor:pointer}
        .endymion-v3-team-buttons button:hover{background:rgba(24,57,78,.95)}
        #endymion-v3-team-map{position:fixed;inset:0;z-index:2147483400;background:rgba(2,4,8,.88);backdrop-filter:blur(3px);display:flex;flex-direction:column;color:#eaf2ff;font-family:Segoe UI,Arial,sans-serif}
        #endymion-v3-team-map[hidden],#endymion-v3-settings[hidden]{display:none!important}
        #endymion-v3-team-toolbar{display:flex;align-items:center;gap:7px;padding:8px 10px;background:#090d15;border-bottom:1px solid rgba(255,255,255,.16)}
        #endymion-v3-team-toolbar strong{color:#6fe8ff;letter-spacing:.08em;white-space:nowrap}
        #endymion-v3-team-toolbar select,#endymion-v3-team-toolbar button{height:28px;border:1px solid #36445b;background:#151d2a;color:#eef5ff;padding:0 8px;font:700 10px Segoe UI,Arial,sans-serif}
        #endymion-v3-team-toolbar select{min-width:150px;max-width:240px}
        #endymion-v3-team-overlay-status{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#aab9cf;font-size:11px}
        #endymion-v3-team-canvas{display:block;flex:1;width:100%;height:calc(100vh - 46px);touch-action:none;cursor:grab}
        #endymion-v3-team-canvas.dragging{cursor:grabbing}
        #endymion-v3-settings{position:fixed;z-index:2147483500;left:50%;top:50%;transform:translate(-50%,-50%);width:min(440px,calc(100vw - 24px));background:#0a0e16;border:1px solid rgba(111,232,255,.55);box-shadow:0 15px 60px rgba(0,0,0,.75);color:#eaf2ff;font:12px/1.35 Segoe UI,Arial,sans-serif;padding:14px;box-sizing:border-box}
        #endymion-v3-settings h3{margin:0 0 9px;color:#6fe8ff;letter-spacing:.08em}
        #endymion-v3-settings .e3-row{display:flex;align-items:center;gap:8px;margin:8px 0}
        #endymion-v3-settings label{min-width:92px;color:#aab8cc}
        #endymion-v3-settings input[type=text],#endymion-v3-settings input[type=password]{flex:1;min-width:0;background:#151c29;border:1px solid #354056;color:#fff;padding:7px;font:11px Consolas,monospace}
        #endymion-v3-settings .e3-checks{display:grid;gap:7px;margin:10px 0;color:#d7e0ef}
        #endymion-v3-settings .e3-checks label{display:flex;align-items:center;gap:7px;min-width:0}
        #endymion-v3-settings .e3-actions{display:flex;gap:7px;margin-top:12px}
        #endymion-v3-settings button{height:30px;border:1px solid #354056;background:#182335;color:#fff;padding:0 10px;font-weight:700;cursor:pointer}
        #endymion-v3-settings button.primary{background:#176078;border-color:#53d9f5}
        #endymion-v3-settings-status{margin-top:9px;color:#8fa0b8;font-size:10px;word-break:break-word}
        #endymion-v3-team-hud-line{margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);color:#a8ecff;white-space:normal}
      `;
      document.head.appendChild(style);
    };

    const updatePeerSelect = () => {
      const select = state.dom.peerSelect;
      if (!select) return;
      const current = state.view.selectedPeer;
      const options = [{ value: "team", label: "TEAM UNION" }];
      for (const peer of state.peers.values()) {
        options.push({ value: peer.id, label: peer.names[0] || `Peer ${peer.id.slice(-5)}` });
      }
      const signature = options.map(option => `${option.value}:${option.label}`).join("|");
      if (select.dataset.signature !== signature) {
        select.dataset.signature = signature;
        select.innerHTML = "";
        for (const option of options) {
          const element = document.createElement("option");
          element.value = option.value;
          element.textContent = option.label;
          select.appendChild(element);
        }
      }
      select.value = options.some(option => option.value === current) ? current : "team";
      if (select.value !== current) state.view.selectedPeer = select.value;
    };

    const installOverlay = () => {
      if (state.dom.overlay) return;
      const overlay = document.createElement("div");
      overlay.id = "endymion-v3-team-map";
      overlay.hidden = true;
      overlay.innerHTML = `
        <div id="endymion-v3-team-toolbar">
          <strong>ENDYMION V3 · TEAM UNION</strong>
          <select data-e3-peer></select>
          <button type="button" data-e3-action="fit">FIT MAP</button>
          <button type="button" data-e3-action="match">MATCH VIEW</button>
          <button type="button" data-e3-action="follow">FOLLOW: OFF</button>
          <button type="button" data-e3-action="settings">SETTINGS</button>
          <span id="endymion-v3-team-overlay-status"></span>
          <button type="button" data-e3-action="close">CLOSE</button>
        </div>
        <canvas id="endymion-v3-team-canvas"></canvas>`;
      document.body.appendChild(overlay);
      state.dom.overlay = overlay;
      state.dom.canvas = overlay.querySelector("canvas");
      state.dom.context = state.dom.canvas.getContext("2d");
      state.dom.peerSelect = overlay.querySelector("select[data-e3-peer]");
      state.dom.followButton = overlay.querySelector('button[data-e3-action="follow"]');
      state.dom.matchButton = overlay.querySelector('button[data-e3-action="match"]');
      state.dom.overlayStatus = overlay.querySelector("#endymion-v3-team-overlay-status");

      state.dom.peerSelect.addEventListener("change", () => {
        state.view.selectedPeer = state.dom.peerSelect.value || "team";
        state.view.follow = false;
        if (state.dom.followButton) state.dom.followButton.textContent = "FOLLOW: OFF";
      });
      overlay.addEventListener("click", event => {
        const button = event.target.closest("button[data-e3-action]");
        if (!button) return;
        const action = button.dataset.e3Action;
        if (action === "close") setMapVisible(false);
        if (action === "settings") setSettingsVisible(true);
        if (action === "fit") {
          state.view.centerX = 0.5;
          state.view.centerY = 0.5;
          state.view.zoom = 1;
          state.view.follow = false;
          if (state.dom.followButton) state.dom.followButton.textContent = "FOLLOW: OFF";
        }
        if (action === "match") matchSelectedPeerView();
        if (action === "follow") {
          state.view.follow = !state.view.follow;
          button.textContent = `FOLLOW: ${state.view.follow ? "ON" : "OFF"}`;
          if (state.view.follow) matchSelectedPeerView();
        }
      });

      const canvas = state.dom.canvas;
      canvas.addEventListener("wheel", event => {
        event.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const before = mapPoint(0, 0, rect.width, rect.height);
        const previousZoom = state.view.zoom;
        const factor = Math.exp(-event.deltaY * 0.0015);
        state.view.zoom = clamp(previousZoom * factor, 1, 24);
        if (state.view.zoom === previousZoom) return;
        const base = Math.min(rect.width, rect.height) * 0.9;
        const nx = state.view.centerX + (event.clientX - rect.left - rect.width / 2) / (base * previousZoom);
        const ny = state.view.centerY + (event.clientY - rect.top - rect.height / 2) / (base * previousZoom);
        state.view.centerX = clamp(nx - (event.clientX - rect.left - rect.width / 2) / (base * state.view.zoom), -0.3, 1.3);
        state.view.centerY = clamp(ny - (event.clientY - rect.top - rect.height / 2) / (base * state.view.zoom), -0.3, 1.3);
        state.view.follow = false;
        if (state.dom.followButton) state.dom.followButton.textContent = "FOLLOW: OFF";
        void before;
      }, { passive: false });
      canvas.addEventListener("pointerdown", event => {
        state.view.dragging = true;
        state.view.pointerId = event.pointerId;
        state.view.lastX = event.clientX;
        state.view.lastY = event.clientY;
        state.view.follow = false;
        canvas.classList.add("dragging");
        canvas.setPointerCapture(event.pointerId);
      });
      canvas.addEventListener("pointermove", event => {
        if (!state.view.dragging || state.view.pointerId !== event.pointerId) return;
        const rect = canvas.getBoundingClientRect();
        const base = Math.min(rect.width, rect.height) * 0.9 * state.view.zoom;
        state.view.centerX = clamp(state.view.centerX - (event.clientX - state.view.lastX) / base, -0.3, 1.3);
        state.view.centerY = clamp(state.view.centerY - (event.clientY - state.view.lastY) / base, -0.3, 1.3);
        state.view.lastX = event.clientX;
        state.view.lastY = event.clientY;
      });
      const finishDrag = event => {
        if (state.view.pointerId !== event.pointerId) return;
        state.view.dragging = false;
        state.view.pointerId = null;
        canvas.classList.remove("dragging");
        try { canvas.releasePointerCapture(event.pointerId); } catch (_error) {}
      };
      canvas.addEventListener("pointerup", finishDrag);
      canvas.addEventListener("pointercancel", finishDrag);
      canvas.addEventListener("dblclick", () => {
        state.view.centerX = 0.5;
        state.view.centerY = 0.5;
        state.view.zoom = 1;
      });
      updatePeerSelect();
    };

    const applySettings = () => {
      const tag = String(state.dom.tagInput?.value || "").trim().slice(0, 32);
      config.enabled = Boolean(state.dom.enabledInput?.checked);
      config.shareObjects = Boolean(state.dom.objectsInput?.checked);
      config.showOnMinimap = Boolean(state.dom.minimapInput?.checked);
      config.showOnGameCanvas = Boolean(state.dom.gameOverlayInput?.checked);
      config.useNativeTagRelay = Boolean(state.dom.nativeRelayInput?.checked);
      config.relayUrl = String(state.dom.relayInput?.value || "").trim();
      config.secret = String(state.dom.secretInput?.value || "").trim().slice(0, 96);
      writeText(KEYS.enabled, config.enabled ? "on" : "off");
      writeText(KEYS.shareObjects, config.shareObjects ? "on" : "off");
      writeText(KEYS.minimap, config.showOnMinimap ? "on" : "off");
      writeText(KEYS.gameOverlay, config.showOnGameCanvas ? "on" : "off");
      writeText(KEYS.nativeRelay, config.useNativeTagRelay ? "on" : "off");
      writeText(KEYS.relay, config.relayUrl);
      writeText(KEYS.secret, config.secret);
      if (tag !== currentTag()) {
        _0x14f7b2("#tag").val(tag);
        _0x50f0c6.setTag(tag);
      }
      refreshIdentity();
      connectRelay();
      updateUi(true);
      return snapshot();
    };

    const installSettings = () => {
      if (state.dom.settings) return;
      const settings = document.createElement("div");
      settings.id = "endymion-v3-settings";
      settings.hidden = true;
      settings.innerHTML = `
        <h3>ENDYMION V3 · TAG TEAM UNION</h3>
        <div class="e3-row"><label>Team tag</label><input type="text" data-e3-input="tag" maxlength="32" placeholder="Same tag for every teammate"></div>
        <div class="e3-row"><label>Relay URL</label><input type="text" data-e3-input="relay" placeholder="Optional: wss://your-relay.example/ws"></div>
        <div class="e3-row"><label>Team secret</label><input type="password" data-e3-input="secret" maxlength="96" placeholder="Optional private room secret"></div>
        <div class="e3-checks">
          <label><input type="checkbox" data-e3-input="enabled"> Share my visible map with this tag</label>
          <label><input type="checkbox" data-e3-input="native-relay"> Use the built-in tag relay automatically</label>
          <label><input type="checkbox" data-e3-input="objects"> Share viruses and ejected mass</label>
          <label><input type="checkbox" data-e3-input="minimap"> Plot remote enemies on the minimap</label>
          <label><input type="checkbox" data-e3-input="game-overlay"> Show lightweight remote radar markers on the game view (experimental)</label>
        </div>
        <div class="e3-actions">
          <button type="button" class="primary" data-e3-action="save">SAVE + CONNECT</button>
          <button type="button" data-e3-action="open-map">OPEN TEAM MAP</button>
          <button type="button" data-e3-action="clear">CLEAR REMOTE</button>
          <button type="button" data-e3-action="close">CLOSE</button>
        </div>
        <div id="endymion-v3-settings-status"></div>`;
      document.body.appendChild(settings);
      state.dom.settings = settings;
      state.dom.tagInput = settings.querySelector('[data-e3-input="tag"]');
      state.dom.relayInput = settings.querySelector('[data-e3-input="relay"]');
      state.dom.secretInput = settings.querySelector('[data-e3-input="secret"]');
      state.dom.enabledInput = settings.querySelector('[data-e3-input="enabled"]');
      state.dom.objectsInput = settings.querySelector('[data-e3-input="objects"]');
      state.dom.minimapInput = settings.querySelector('[data-e3-input="minimap"]');
      state.dom.gameOverlayInput = settings.querySelector('[data-e3-input="game-overlay"]');
      state.dom.nativeRelayInput = settings.querySelector('[data-e3-input="native-relay"]');
      state.dom.settingsStatus = settings.querySelector("#endymion-v3-settings-status");
      settings.addEventListener("click", event => {
        const button = event.target.closest("button[data-e3-action]");
        if (!button) return;
        const action = button.dataset.e3Action;
        if (action === "save") applySettings();
        if (action === "close") setSettingsVisible(false);
        if (action === "open-map") {
          setSettingsVisible(false);
          setMapVisible(true);
        }
        if (action === "clear") {
          removeStaleRoomData();
          updateUi(true);
        }
      });
    };

    const setMapVisible = visible => {
      installOverlay();
      state.view.visible = Boolean(visible);
      state.dom.overlay.hidden = !state.view.visible;
      if (state.view.visible) renderFullMap(now());
      return state.view.visible;
    };

    const setSettingsVisible = visible => {
      installSettings();
      state.dom.settings.hidden = !visible;
      if (visible) {
        state.dom.tagInput.value = currentTag();
        state.dom.relayInput.value = config.relayUrl;
        state.dom.secretInput.value = config.secret;
        state.dom.enabledInput.checked = config.enabled;
        state.dom.objectsInput.checked = config.shareObjects;
        state.dom.minimapInput.checked = config.showOnMinimap;
        state.dom.gameOverlayInput.checked = config.showOnGameCanvas;
        state.dom.nativeRelayInput.checked = config.useNativeTagRelay;
      }
      updateUi(true);
      return !state.dom.settings.hidden;
    };

    const installMainMenu = () => {
      const tag = document.getElementById("tag");
      if (tag) {
        tag.placeholder = "Team Tag";
        tag.title = "Players using the same tag share minimap positions and Team Union observations through the built-in tag relay.";
      }
      const title = document.querySelector("#teamlist-head span");
      if (title) title.textContent = "Tag Players";
      const partyMenu = document.getElementById("party-context-menu");
      if (partyMenu) partyMenu.hidden = true;

      let row = document.querySelector(".endymion-v3-team-buttons");
      if (!row) {
        row = document.createElement("div");
        row.className = "endymion-v3-team-buttons";
        row.innerHTML = '<button type="button" id="endymion-v3-map-button">TEAM UNION (F8)</button><button type="button" id="endymion-v3-settings-button">TAG / RELAY SETUP</button>';
        const server = document.getElementById("servers");
        if (server?.parentNode) server.parentNode.insertBefore(row, server);
      }
      const mapButton = document.getElementById("endymion-v3-map-button");
      const settingsButton = document.getElementById("endymion-v3-settings-button");
      if (mapButton && !mapButton.dataset.bound) {
        mapButton.dataset.bound = "1";
        mapButton.addEventListener("click", () => setMapVisible(true));
      }
      if (settingsButton && !settingsButton.dataset.bound) {
        settingsButton.dataset.bound = "1";
        settingsButton.addEventListener("click", () => setSettingsVisible(true));
      }
    };

    const installHudLine = () => {
      const hud = document.getElementById("endymion-connection-status");
      if (!hud) return;
      let line = document.getElementById("endymion-v3-team-hud-line");
      if (!line) {
        line = document.createElement("div");
        line.id = "endymion-v3-team-hud-line";
        line.title = "Click to open Team Union settings.";
        line.style.cursor = "pointer";
        line.addEventListener("click", () => setSettingsVisible(true));
        hud.appendChild(line);
      }
      state.dom.hudLine = line;
    };

    const transportLabel = () => {
      if (config.relayUrl && state.relayState === "CONNECTED") return "EXTERNAL RELAY";
      if (config.useNativeTagRelay && _0x1530af?.isOpen?.() && state.tag) return "TAG RELAY";
      if (config.relayUrl && state.relayState !== "CONNECTED") return state.relayState;
      return "LOCAL ONLY";
    };

    const summary = () => ({
      version: VERSION,
      build: BUILD,
      enabled: config.enabled,
      tag: state.tag,
      room: state.room,
      server: state.server,
      relayUrl: config.relayUrl,
      transport: transportLabel(),
      builtInTagRelay: config.useNativeTagRelay,
      gameOverlay: config.showOnGameCanvas,
      peers: state.peers.size,
      localEntities: state.metrics.localEntities,
      remoteEnemies: state.remoteEnemies.size,
      remoteTeammates: state.remoteTeammates.size,
      ws3Role: "hot-standby-only",
      lastError: state.lastError
    });

    const snapshot = () => ({
      ...summary(),
      peerId: state.peerId,
      selectedPeer: state.view.selectedPeer,
      follow: state.view.follow,
      metrics: { ...state.metrics },
      peers: [...state.peers.values()].map(peer => ({
        id: peer.id,
        names: peer.names.slice(),
        lastSeenAt: peer.lastSeenAt,
        owned: peer.owned.size,
        entities: peer.entities.size,
        viewport: peer.viewport ? peer.viewport.slice() : null
      }))
    });

    const updateUi = force => {
      const timestamp = now();
      if (!force && timestamp - state.lastUiAt < Number(config.uiIntervalMs || 500)) return;
      state.lastUiAt = timestamp;
      installStyle();
      installMainMenu();
      installOverlay();
      installSettings();
      installHudLine();
      updatePeerSelect();
      const data = summary();
      if (state.dom.hudLine) {
        state.dom.hudLine.textContent = state.room
          ? `Tag ${state.tag} · Team Union ${data.transport} · ${data.peers} peers · ${data.remoteEnemies} remote enemies`
          : "Tag Team Union: enter a Team Tag to start";
        state.dom.hudLine.style.color = /TAG RELAY|EXTERNAL RELAY|LOCAL ONLY/.test(data.transport) ? "#a8ecff" : "#ffcf72";
      }
      if (state.dom.settingsStatus) {
        state.dom.settingsStatus.textContent = state.room
          ? `Room ${state.room} · ${data.transport} · ${data.peers} peers · ${data.remoteEnemies} enemies. The built-in tag relay is automatic; the optional wss:// relay is a fallback for servers that filter V3 packets.`
          : "Enter a tag and connect to a game server. Same-tag teammates are joined automatically.";
      }
    };

    const tick = () => {
      if (!state.initialized) return;
      const timestamp = now();
      refreshIdentity();
      if (timestamp - state.lastCollectAt >= config.collectIntervalMs) {
        state.lastCollectAt = timestamp;
        state.localSnapshot = collectLocalSnapshot();
      }
      if (config.enabled && state.localSnapshot && timestamp - state.lastSendAt >= config.sendIntervalMs) {
        state.lastSendAt = timestamp;
        sendPacket(state.localSnapshot);
      }
      if (timestamp - state.lastAggregateAt >= config.aggregateIntervalMs) {
        state.lastAggregateAt = timestamp;
        aggregateRemote(timestamp);
      }
      if (state.view.visible && timestamp - state.lastRenderAt >= Number(config.fullMapRenderIntervalMs || 50)) {
        state.lastRenderAt = timestamp;
        renderFullMap(timestamp);
      }
      updateUi(false);
    };

    const init = () => {
      if (state.initialized) return;
      state.initialized = true;
      installStyle();
      installMainMenu();
      installOverlay();
      installSettings();
      try {
        state.channel = new BroadcastChannel(CHANNEL_NAME);
        state.channel.onmessage = event => handleTransportPacket(event);
      } catch (error) {
        state.lastError = `BroadcastChannel unavailable: ${String(error?.message || error)}`;
      }
      refreshIdentity();
      if (_0x1530af?.updateRoom) _0x1530af.updateRoom();
      if (config.relayUrl) connectRelay();
      document.addEventListener("keydown", event => {
        if (event.repeat || event.ctrlKey || event.altKey || event.metaKey) return;
        if (event.target?.matches?.("input,textarea,select,[contenteditable='true']")) return;
        if (event.code === "F8") {
          event.preventDefault();
          event.stopPropagation();
          setMapVisible(!state.view.visible);
        }
      }, true);
      window.addEventListener("beforeunload", () => {
        closeRelay();
        try { state.channel?.close(); } catch (_error) {}
      }, { once: true });
      updateUi(true);
    };

    const originalCoreInitV3 = _0xb45f1b.init;
    _0xb45f1b.init = function endymionV3CoreInit() {
      const result = originalCoreInitV3.apply(this, arguments);
      init();
      return result;
    };

    const originalCoreRunV3 = _0xb45f1b.run;
    _0xb45f1b.run = function endymionV3CoreRun() {
      const result = originalCoreRunV3.apply(this, arguments);
      tick();
      return result;
    };

    const originalMinimapRunV3 = _0x5cda9b.run;
    _0x5cda9b.run = function endymionV3MinimapRun() {
      const result = originalMinimapRunV3.apply(this, arguments);
      try { drawMinimap(this.ctx, this.size, now()); } catch (error) { state.lastError = String(error?.message || error); }
      return result;
    };

    const originalRendererRunV3 = _0x386cbc.run;
    _0x386cbc.run = function endymionV3RendererRun() {
      const result = originalRendererRunV3.apply(this, arguments);
      try { drawGameWorldOverlay(this.ctx, this.canvas, now()); } catch (error) { state.lastError = String(error?.message || error); }
      return result;
    };

    const api = {
      version: VERSION,
      build: BUILD,
      config,
      state,
      init,
      tick,
      summary,
      snapshot,
      openMap: () => setMapVisible(true),
      closeMap: () => setMapVisible(false),
      toggleMap: () => setMapVisible(!state.view.visible),
      openSettings: () => setSettingsVisible(true),
      reconnect: connectRelay,
      clearRemote: () => { removeStaleRoomData(); updateUi(true); },
      setTag: tag => {
        const value = String(tag || "").trim().slice(0, 32);
        _0x14f7b2("#tag").val(value);
        _0x50f0c6.setTag(value);
        refreshIdentity();
        return summary();
      },
      setRelay: url => {
        config.relayUrl = String(url || "").trim();
        writeText(KEYS.relay, config.relayUrl);
        connectRelay();
        return summary();
      },
      setSecret: secret => {
        config.secret = String(secret || "").trim().slice(0, 96);
        writeText(KEYS.secret, config.secret);
        refreshIdentity();
        removeStaleRoomData();
        if (socketOpen(state.relay) && state.room) sendRelay(joinPacket());
        return summary();
      },
      setEnabled: enabled => {
        config.enabled = enabled !== false;
        writeText(KEYS.enabled, config.enabled ? "on" : "off");
        return summary();
      },
      setMinimap: enabled => {
        config.showOnMinimap = enabled !== false;
        writeText(KEYS.minimap, config.showOnMinimap ? "on" : "off");
        return summary();
      },
      setGameOverlay: enabled => {
        config.showOnGameCanvas = enabled !== false;
        writeText(KEYS.gameOverlay, config.showOnGameCanvas ? "on" : "off");
        return summary();
      },
      setNativeTagRelay: enabled => {
        config.useNativeTagRelay = enabled !== false;
        writeText(KEYS.nativeRelay, config.useNativeTagRelay ? "on" : "off");
        return summary();
      }
    };

    window.ENDYMION_V3 = api;
    window.ENDYMION_TEAM_UNION = api;
    window.ENDYMION_BUILD = BUILD;
    if (window.DARK_ENDYMION) {
      window.DARK_ENDYMION.version = "3.0.1";
      window.DARK_ENDYMION.build = BUILD;
      window.DARK_ENDYMION.teamUnion = api;
    }

    console.log(`[Endymion V3] ${BUILD} loaded`);
  })();

  _0x1c478d.onload = () => (
    _0x14f7b2("#loading-screen").html(
      '<div class="ls-title">Endymion</div><div class="ls-spinner"><span id="ls-icon"><i class="fa fa-solid fa-circle-notch fa-spin"></i></span><span style="display:block;" id="ls-message">Loading...</span></div>',
    ),
    49 > _0xb45f1b.browserVersion()
      ? (_0x14f7b2("#ls-icon").html('<i class="fa fa-chrome" aria-hidden="true"></i>'),
        void _0x14f7b2("#ls-message").text(" Only Chrome version 49 or higher are supported."))
      : (_0x59f59a.init(),
        _0xb45f1b.init(),
        class {
          static ["init"]() {
            this.apiUrl = "";
            this.codeChecked = false;
            this.salt = _0x19d5af.get("profiles", "salt") || "";
            this.Code = _0x19d5af.get("profiles", "MXCode") || "";
            _0x14f7b2("#private-code").val(this.Code);
            this.addEvents();
            this.checkCode();
          }
          static ["addCode"]() {
            this.salt = this.generateCode(5);
            _0x19d5af.set("profiles", "salt", this.salt);
            this.MXCode = this.generateCode(10);
            _0x19d5af.set("profiles", "Code", this.Code);
            this.sendAddCode();
          }
          static ["addEvents"]() {
            _0x14f7b2("#user-code-check").click(() => {
              _0x14f7b2("#userCode").fadeOut(250);
              this.checkCode();
            });
          }
          static ["sendAddCode"]() {}
          static ["checkCode"]() {}
          static ["generateCode"](_0x385be4) {
            var _0x2121bd = "";
            for (var _0xde3000 = 0; _0xde3000 < _0x385be4; _0xde3000++) {
              var _0x2bac44 = Math.floor(62 * Math.random());
              var _0x461243 = (_0x2bac44 += _0x2bac44 > 9 ? (_0x2bac44 < 36 ? 55 : 61) : 48);
              _0x2121bd += String.fromCharCode(_0x461243);
            }
            return _0x2121bd;
          }
          static ["getApiUrl"]() {
            return window.atob(window.atob(window.atob(this.apiUrl)));
          }
        }.init())
  );
})(window, $, document);
