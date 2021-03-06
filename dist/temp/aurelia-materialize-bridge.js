'use strict';

exports.__esModule = true;
exports.MdWaves = exports.MaterializeFormValidationRenderer = exports.MdStaggeredList = exports.MdFadeinImage = exports.MdTooltip = exports.MdToastService = exports.MdTapTarget = exports.MdTabs = exports.MdSwitch = exports.MdSlider = exports.MdSidenav = exports.MdSidenavCollapse = exports.MdSelect = exports.MdScrollSpy = exports.MdScrollfire = exports.MdScrollfireTarget = exports.ScrollfirePatch = exports.MdRange = exports.MdRadio = exports.MdPushpin = exports.MdProgress = exports.MdParallax = exports.MdPagination = exports.MdNavbar = exports.MdModal = exports.MdModalTrigger = exports.MdInput = exports.MdInputUpdateService = exports.MdPrefix = exports.MdFooter = exports.MdFileInput = exports.MdFab = exports.MdDropdown = exports.MdDropdownElement = exports.MdDatePicker = exports.DatePickerDefaultParser = exports.constants = exports.AttributeManager = exports.MdColors = exports.LightenValueConverter = exports.DarkenValueConverter = exports.MdCollapsible = exports.MdlListSelector = exports.MdCollection = exports.MdCollectionItem = exports.MdCollectionHeader = exports.MdCheckbox = exports.MdChips = exports.MdChip = exports.MdCharCounter = exports.MdCarousel = exports.MdCarouselItem = exports.MdCard = exports.MdButton = exports.MdBox = exports.InstructionFilterValueConverter = exports.MdBreadcrumbs = exports.MdBadge = exports.MdAutoComplete = exports.ConfigBuilder = exports.ClickCounter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class3, _desc, _value, _class4, _descriptor, _dec4, _dec5, _dec6, _dec7, _class6, _desc2, _value2, _class7, _descriptor2, _descriptor3, _dec8, _dec9, _dec10, _class9, _desc3, _value3, _class10, _descriptor4, _dec11, _dec12, _dec13, _class12, _desc4, _value4, _class13, _descriptor5, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class15, _desc5, _value5, _class16, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class18, _desc6, _value6, _class19, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _dec28, _dec29, _dec30, _class21, _desc7, _value7, _class22, _descriptor16, _descriptor17, _dec31, _dec32, _dec33, _dec34, _dec35, _class24, _desc8, _value8, _class25, _descriptor18, _descriptor19, _descriptor20, _dec36, _dec37, _dec38, _class27, _desc9, _value9, _class28, _descriptor21, _dec39, _dec40, _dec41, _class30, _desc10, _value10, _class31, _descriptor22, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _class33, _desc11, _value11, _class34, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _class36, _desc12, _value12, _class37, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _class38, _temp, _dec55, _dec56, _class39, _dec57, _class40, _dec58, _dec59, _class41, _dec60, _dec61, _dec62, _dec63, _dec64, _class42, _desc13, _value13, _class43, _descriptor33, _descriptor34, _descriptor35, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _class45, _dec71, _dec72, _dec73, _dec74, _desc14, _value14, _class46, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _dec75, _dec76, _dec77, _dec78, _dec79, _dec80, _dec81, _dec82, _dec83, _dec84, _class49, _desc15, _value15, _class50, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _dec85, _dec86, _dec87, _dec88, _dec89, _dec90, _dec91, _dec92, _dec93, _dec94, _class52, _desc16, _value16, _class53, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _class54, _temp2, _dec95, _dec96, _dec97, _dec98, _dec99, _dec100, _dec101, _dec102, _dec103, _dec104, _dec105, _dec106, _class55, _desc17, _value17, _class56, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _descriptor62, _descriptor63, _descriptor64, _descriptor65, _class57, _temp3, _dec107, _dec108, _dec109, _dec110, _class58, _desc18, _value18, _class59, _descriptor66, _descriptor67, _dec111, _dec112, _dec113, _dec114, _dec115, _dec116, _class61, _desc19, _value19, _class62, _descriptor68, _descriptor69, _descriptor70, _descriptor71, _dec117, _dec118, _class64, _dec119, _dec120, _class65, _dec121, _class66, _dec122, _dec123, _dec124, _dec125, _dec126, _dec127, _dec128, _dec129, _dec130, _dec131, _dec132, _dec133, _dec134, _dec135, _dec136, _class68, _desc20, _value20, _class69, _descriptor72, _descriptor73, _descriptor74, _descriptor75, _descriptor76, _descriptor77, _descriptor78, _descriptor79, _descriptor80, _descriptor81, _descriptor82, _descriptor83, _descriptor84, _class70, _temp4, _dec137, _dec138, _dec139, _class71, _desc21, _value21, _class72, _descriptor85, _dec140, _dec141, _dec142, _dec143, _dec144, _dec145, _dec146, _dec147, _class74, _desc22, _value22, _class75, _descriptor86, _descriptor87, _descriptor88, _descriptor89, _descriptor90, _descriptor91, _dec148, _dec149, _dec150, _dec151, _dec152, _class77, _desc23, _value23, _class78, _descriptor92, _descriptor93, _descriptor94, _dec153, _dec154, _dec155, _dec156, _dec157, _dec158, _dec159, _dec160, _dec161, _class80, _desc24, _value24, _class81, _descriptor95, _descriptor96, _descriptor97, _descriptor98, _descriptor99, _descriptor100, _descriptor101, _dec162, _dec163, _class83, _dec164, _dec165, _dec166, _dec167, _dec168, _dec169, _dec170, _class84, _desc25, _value25, _class85, _descriptor102, _descriptor103, _descriptor104, _descriptor105, _descriptor106, _dec171, _dec172, _dec173, _dec174, _dec175, _class87, _desc26, _value26, _class88, _descriptor107, _descriptor108, _descriptor109, _dec176, _dec177, _dec178, _dec179, _dec180, _dec181, _dec182, _dec183, _dec184, _class90, _desc27, _value27, _class91, _descriptor110, _descriptor111, _descriptor112, _descriptor113, _descriptor114, _descriptor115, _descriptor116, _class92, _temp5, _dec185, _dec186, _dec187, _dec188, _dec189, _dec190, _class93, _desc28, _value28, _class94, _descriptor117, _descriptor118, _descriptor119, _descriptor120, _class96, _temp6, _dec191, _dec192, _dec193, _dec194, _class97, _desc29, _value29, _class98, _descriptor121, _descriptor122, _dec195, _dec196, _class100, _dec197, _dec198, _dec199, _class102, _desc30, _value30, _class103, _descriptor123, _dec200, _dec201, _dec202, _dec203, _dec204, _dec205, _class105, _desc31, _value31, _class106, _descriptor124, _descriptor125, _descriptor126, _descriptor127, _dec206, _dec207, _dec208, _class108, _desc32, _value32, _class109, _descriptor128, _dec209, _dec210, _dec211, _dec212, _dec213, _dec214, _class111, _desc33, _value33, _class112, _descriptor129, _descriptor130, _descriptor131, _descriptor132, _class113, _temp7, _dec215, _dec216, _dec217, _dec218, _dec219, _dec220, _dec221, _class114, _desc34, _value34, _class115, _descriptor133, _descriptor134, _descriptor135, _descriptor136, _descriptor137, _dec222, _dec223, _dec224, _dec225, _dec226, _dec227, _dec228, _class117, _desc35, _value35, _class118, _descriptor138, _descriptor139, _descriptor140, _descriptor141, _descriptor142, _dec229, _dec230, _dec231, _dec232, _dec233, _dec234, _dec235, _class120, _desc36, _value36, _class121, _descriptor143, _descriptor144, _descriptor145, _descriptor146, _descriptor147, _dec236, _dec237, _dec238, _class123, _desc37, _value37, _class124, _descriptor148, _class125, _temp8, _dec239, _dec240, _dec241, _dec242, _dec243, _dec244, _class126, _desc38, _value38, _class127, _descriptor149, _descriptor150, _descriptor151, _descriptor152, _dec245, _dec246, _dec247, _class129, _desc39, _value39, _class130, _descriptor153, _dec248, _dec249, _dec250, _class132, _desc40, _value40, _class133, _descriptor154, _dec251, _dec252, _dec253, _dec254, _dec255, _class136, _desc41, _value41, _class137, _descriptor155, _descriptor156, _descriptor157;

exports.configure = configure;
exports.getBooleanFromAttributeValue = getBooleanFromAttributeValue;
exports.fireEvent = fireEvent;
exports.fireMaterializeEvent = fireMaterializeEvent;
exports.polyfillElementClosest = polyfillElementClosest;
exports.applyMaterializeDropdownFix = applyMaterializeDropdownFix;

var _aureliaPal = require('aurelia-pal');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaRouter = require('aurelia-router');

var _aureliaBinding = require('aurelia-binding');

var _aureliaTaskQueue = require('aurelia-task-queue');

var _aureliaLogging = require('aurelia-logging');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClickCounter = exports.ClickCounter = function () {
  function ClickCounter() {
    _classCallCheck(this, ClickCounter);

    this.count = 0;
  }

  ClickCounter.prototype.increment = function increment() {
    this.count++;
  };

  return ClickCounter;
}();

var ConfigBuilder = exports.ConfigBuilder = function () {
  function ConfigBuilder() {
    _classCallCheck(this, ConfigBuilder);

    this.globalResources = [];
    this.noWavesAttach = false;
    this.useGlobalResources = true;
    this.useScrollfirePatch = false;
  }

  ConfigBuilder.prototype.useAll = function useAll() {
    return this.useAutoComplete().useBadge().useBox().useBreadcrumbs().useButton().useCard().useCarousel().useCharacterCounter().useCheckbox().useChip().useCollapsible().useCollection().useColors().useDatePicker().useDropdown().useFab().useFile().useFooter().useInput().useModal().useNavbar().usePagination().useParallax().useProgress().usePushpin().useRadio().useRange().useScrollfire().useScrollSpy().useSelect().useSidenav().useSlider().useSwitch().useTabs().useTapTarget().useTooltip().useTransitions().useWaves().useWell();
  };

  ConfigBuilder.prototype.useAutoComplete = function useAutoComplete() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./autocomplete/autocomplete'));
    return this;
  };

  ConfigBuilder.prototype.useBadge = function useBadge() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./badge/badge'));
    return this;
  };

  ConfigBuilder.prototype.useBox = function useBox() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./box/box'));
    return this;
  };

  ConfigBuilder.prototype.useBreadcrumbs = function useBreadcrumbs() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./breadcrumbs/breadcrumbs'));
    return this;
  };

  ConfigBuilder.prototype.useButton = function useButton() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./button/button'));
    return this;
  };

  ConfigBuilder.prototype.useCarousel = function useCarousel() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./carousel/carousel'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./carousel/carousel-item'));
    return this;
  };

  ConfigBuilder.prototype.useCharacterCounter = function useCharacterCounter() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./char-counter/char-counter'));
    return this;
  };

  ConfigBuilder.prototype.useCard = function useCard() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./card/card'));
    return this;
  };

  ConfigBuilder.prototype.useCheckbox = function useCheckbox() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./checkbox/checkbox'));
    return this;
  };

  ConfigBuilder.prototype.useChip = function useChip() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./chip/chip'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./chip/chips'));
    return this;
  };

  ConfigBuilder.prototype.useClickCounter = function useClickCounter() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./click-counter'));
    return this;
  };

  ConfigBuilder.prototype.useCollapsible = function useCollapsible() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collapsible/collapsible'));
    return this;
  };

  ConfigBuilder.prototype.useCollection = function useCollection() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collection/collection'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collection/collection-item'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collection/collection-header'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collection/md-collection-selector'));
    return this;
  };

  ConfigBuilder.prototype.useColors = function useColors() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./colors/md-colors'));
    return this;
  };

  ConfigBuilder.prototype.useDatePicker = function useDatePicker() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./datepicker/datepicker'));
    return this;
  };

  ConfigBuilder.prototype.useDropdown = function useDropdown() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./dropdown/dropdown'));
    return this;
  };

  ConfigBuilder.prototype.useDropdownFix = function useDropdownFix() {
    applyMaterializeDropdownFix();
    return this;
  };

  ConfigBuilder.prototype.useFab = function useFab() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./fab/fab'));
    return this;
  };

  ConfigBuilder.prototype.useFile = function useFile() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./file/file'));
    return this;
  };

  ConfigBuilder.prototype.useFooter = function useFooter() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./footer/footer'));
    return this;
  };

  ConfigBuilder.prototype.useInput = function useInput() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./input/input'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./input/input-prefix'));
    return this;
  };

  ConfigBuilder.prototype.useModal = function useModal() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./modal/modal'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./modal/modal-trigger'));
    return this;
  };

  ConfigBuilder.prototype.useNavbar = function useNavbar() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./navbar/navbar'));
    return this;
  };

  ConfigBuilder.prototype.usePagination = function usePagination() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./pagination/pagination'));
    return this;
  };

  ConfigBuilder.prototype.useParallax = function useParallax() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./parallax/parallax'));
    return this;
  };

  ConfigBuilder.prototype.useProgress = function useProgress() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./progress/progress'));
    return this;
  };

  ConfigBuilder.prototype.usePushpin = function usePushpin() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./pushpin/pushpin'));
    return this;
  };

  ConfigBuilder.prototype.useRadio = function useRadio() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./radio/radio'));
    return this;
  };

  ConfigBuilder.prototype.useRange = function useRange() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./range/range'));
    return this;
  };

  ConfigBuilder.prototype.useScrollfire = function useScrollfire() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./scrollfire/scrollfire'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./scrollfire/scrollfire-target'));
    return this;
  };

  ConfigBuilder.prototype.useScrollSpy = function useScrollSpy() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./scrollspy/scrollspy'));
    return this;
  };

  ConfigBuilder.prototype.useSelect = function useSelect() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./select/select'));
    return this;
  };

  ConfigBuilder.prototype.useSidenav = function useSidenav() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./sidenav/sidenav'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./sidenav/sidenav-collapse'));
    return this;
  };

  ConfigBuilder.prototype.useSlider = function useSlider() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./slider/slider'));

    return this;
  };

  ConfigBuilder.prototype.useSwitch = function useSwitch() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./switch/switch'));
    return this;
  };

  ConfigBuilder.prototype.useTabs = function useTabs() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tabs/tabs'));
    return this;
  };

  ConfigBuilder.prototype.useTapTarget = function useTapTarget() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tap-target/tap-target'));
    return this;
  };

  ConfigBuilder.prototype.useTooltip = function useTooltip() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tooltip/tooltip'));
    return this;
  };

  ConfigBuilder.prototype.useTransitions = function useTransitions() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./transitions/fadein-image'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./transitions/staggered-list'));
    return this;
  };

  ConfigBuilder.prototype.useWaves = function useWaves() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./waves/waves'));
    return this;
  };

  ConfigBuilder.prototype.useWell = function useWell() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./well/md-well.html'));
    return this;
  };

  ConfigBuilder.prototype.preventWavesAttach = function preventWavesAttach() {
    this.noWavesAttach = true;
    return this;
  };

  ConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
    this.useGlobalResources = false;
    return this;
  };

  ConfigBuilder.prototype.withScrollfirePatch = function withScrollfirePatch() {
    this.useScrollfirePatch = true;
    return this;
  };

  return ConfigBuilder;
}();

function applyPolyfills() {
  polyfillElementClosest();
}

function configure(aurelia, configCallback) {
  applyPolyfills();

  var builder = aurelia.container.get(ConfigBuilder);

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
  if (builder.useScrollfirePatch) {
    new ScrollfirePatch().patch();
  }
}

var MdAutoComplete = exports.MdAutoComplete = (_dec = (0, _aureliaTemplating.customAttribute)('md-autocomplete'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class3 = _dec2(_class3 = (_class4 = function () {
  function MdAutoComplete(element) {
    _classCallCheck(this, MdAutoComplete);

    this.input = null;

    _initDefineProp(this, 'values', _descriptor, this);

    this.element = element;
  }

  MdAutoComplete.prototype.attached = function attached() {
    if (this.element.tagName.toLowerCase() === 'input') {
      this.input = this.element;
    } else if (this.element.tagName.toLowerCase() === 'md-input') {
      this.input = this.element.au.controller.viewModel.input;
    } else {
      throw new Error('md-autocomplete must be attached to either an input or md-input element');
    }
    this.refresh();
  };

  MdAutoComplete.prototype.detached = function detached() {
    $(this.input).siblings('.autocomplete-content').off('click');
    $(this.input).siblings('.autocomplete-content').remove();
  };

  MdAutoComplete.prototype.refresh = function refresh() {
    var _this = this;

    this.detached();
    $(this.input).autocomplete({
      data: this.values
    });

    $(this.input).siblings('.autocomplete-content').on('click', function () {
      fireEvent(_this.input, 'change');
    });
  };

  MdAutoComplete.prototype.valuesChanged = function valuesChanged(newValue) {
    this.refresh();
  };

  return MdAutoComplete;
}(), (_descriptor = _applyDecoratedDescriptor(_class4.prototype, 'values', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
})), _class4)) || _class3) || _class3);
var MdBadge = exports.MdBadge = (_dec4 = (0, _aureliaTemplating.customAttribute)('md-badge'), _dec5 = (0, _aureliaDependencyInjection.inject)(Element), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec4(_class6 = _dec5(_class6 = (_class7 = function () {
  function MdBadge(element) {
    _classCallCheck(this, MdBadge);

    _initDefineProp(this, 'isNew', _descriptor2, this);

    _initDefineProp(this, 'caption', _descriptor3, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdBadge.prototype.attached = function attached() {
    var classes = ['badge'];

    if (getBooleanFromAttributeValue(this.isNew)) {
      classes.push('new');
    }

    if (this.caption !== null) {
      this.attributeManager.addAttributes({ 'data-badge-caption': this.caption });
    }

    this.attributeManager.addClasses(classes);
  };

  MdBadge.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['badge', 'new']);
    this.attributeManager.removeAttributes(['data-badge-caption']);
  };

  MdBadge.prototype.newChanged = function newChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.addClasses('new');
    } else {
      this.attributeManager.removeClasses('new');
    }
  };

  MdBadge.prototype.captionChanged = function captionChanged(newValue) {
    if (newValue !== null) {
      this.attributeManager.addAttributes({ 'data-badge-caption': newValue });
    } else {
      this.attributeManager.removeAttributes(['data-badge-caption']);
    }
  };

  return MdBadge;
}(), (_descriptor2 = _applyDecoratedDescriptor(_class7.prototype, 'isNew', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class7.prototype, 'caption', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class7)) || _class6) || _class6);
var MdBreadcrumbs = exports.MdBreadcrumbs = (_dec8 = (0, _aureliaTemplating.customElement)('md-breadcrumbs'), _dec9 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaRouter.Router), _dec10 = (0, _aureliaTemplating.bindable)(), _dec8(_class9 = _dec9(_class9 = (_class10 = function () {
  function MdBreadcrumbs(element, router) {
    _classCallCheck(this, MdBreadcrumbs);

    _initDefineProp(this, 'router', _descriptor4, this);

    this.element = element;
    this.aureliaRouter = router;
  }

  MdBreadcrumbs.prototype.bind = function bind() {
    if (!this.router) {
      this.router = this.aureliaRouter;
    }
    var router = this.router;
    this._childRouter = router;
    while (router.parent) {
      router = router.parent;
    }
    this.router = router;
  };

  MdBreadcrumbs.prototype.routerChanged = function routerChanged() {};

  MdBreadcrumbs.prototype.navigate = function navigate(navigationInstruction) {
    this._childRouter.navigateToRoute(navigationInstruction.config.name);
  };

  return MdBreadcrumbs;
}(), (_descriptor4 = _applyDecoratedDescriptor(_class10.prototype, 'router', [_dec10], {
  enumerable: true,
  initializer: null
})), _class10)) || _class9) || _class9);

var InstructionFilterValueConverter = exports.InstructionFilterValueConverter = function () {
  function InstructionFilterValueConverter() {
    _classCallCheck(this, InstructionFilterValueConverter);
  }

  InstructionFilterValueConverter.prototype.toView = function toView(navigationInstructions) {
    return navigationInstructions.filter(function (i) {
      var result = false;
      if (i.config.title) {
        result = true;
      }
      return result;
    });
  };

  return InstructionFilterValueConverter;
}();

var MdBox = exports.MdBox = (_dec11 = (0, _aureliaTemplating.customAttribute)('md-box'), _dec12 = (0, _aureliaDependencyInjection.inject)(Element), _dec13 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec11(_class12 = _dec12(_class12 = (_class13 = function () {
  function MdBox(element) {
    _classCallCheck(this, MdBox);

    _initDefineProp(this, 'caption', _descriptor5, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdBox.prototype.attached = function attached() {
    this.attributeManager.addClasses('materialboxed');
    if (this.caption) {
      this.attributeManager.addAttributes({ 'data-caption': this.caption });
    }

    $(this.element).materialbox();
  };

  MdBox.prototype.detached = function detached() {
    this.attributeManager.removeAttributes('data-caption');
    this.attributeManager.removeClasses('materialboxed');
  };

  return MdBox;
}(), (_descriptor5 = _applyDecoratedDescriptor(_class13.prototype, 'caption', [_dec13], {
  enumerable: true,
  initializer: null
})), _class13)) || _class12) || _class12);
var MdButton = exports.MdButton = (_dec14 = (0, _aureliaTemplating.customAttribute)('md-button'), _dec15 = (0, _aureliaDependencyInjection.inject)(Element), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec14(_class15 = _dec15(_class15 = (_class16 = function () {
  function MdButton(element) {
    _classCallCheck(this, MdButton);

    _initDefineProp(this, 'disabled', _descriptor6, this);

    _initDefineProp(this, 'flat', _descriptor7, this);

    _initDefineProp(this, 'floating', _descriptor8, this);

    _initDefineProp(this, 'large', _descriptor9, this);

    _initDefineProp(this, 'pulse', _descriptor10, this);

    this.attributeManager = new AttributeManager(element);
  }

  MdButton.prototype.attached = function attached() {
    var classes = [];

    if (getBooleanFromAttributeValue(this.flat)) {
      classes.push('btn-flat');
    }
    if (getBooleanFromAttributeValue(this.floating)) {
      classes.push('btn-floating');
    }
    if (getBooleanFromAttributeValue(this.large)) {
      classes.push('btn-large');
    }

    if (classes.length === 0) {
      classes.push('btn');
    }

    if (getBooleanFromAttributeValue(this.disabled)) {
      classes.push('disabled');
    }

    if (!getBooleanFromAttributeValue(this.flat)) {
      classes.push('accent');
    }
    if (getBooleanFromAttributeValue(this.pulse)) {
      classes.push('pulse');
    }
    this.attributeManager.addClasses(classes);
  };

  MdButton.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['accent', 'btn', 'btn-flat', 'btn-large', 'disabled', 'pulse']);
  };

  MdButton.prototype.disabledChanged = function disabledChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.addClasses('disabled');
    } else {
      this.attributeManager.removeClasses('disabled');
    }
  };

  MdButton.prototype.flatChanged = function flatChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.removeClasses(['btn', 'accent']);
      this.attributeManager.addClasses('btn-flat');
    } else {
      this.attributeManager.removeClasses('btn-flat');
      this.attributeManager.addClasses(['btn', 'accent']);
    }
  };

  MdButton.prototype.pulseChanged = function pulseChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.addClasses('pulse');
    } else {
      this.attributeManager.removeClasses('pulse');
    }
  };

  return MdButton;
}(), (_descriptor6 = _applyDecoratedDescriptor(_class16.prototype, 'disabled', [_dec16], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class16.prototype, 'flat', [_dec17], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class16.prototype, 'floating', [_dec18], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class16.prototype, 'large', [_dec19], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class16.prototype, 'pulse', [_dec20], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class16)) || _class15) || _class15);
var MdCard = exports.MdCard = (_dec21 = (0, _aureliaTemplating.customElement)('md-card'), _dec22 = (0, _aureliaDependencyInjection.inject)(Element), _dec23 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec24 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec25 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec26 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec27 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec21(_class18 = _dec22(_class18 = (_class19 = function () {
  function MdCard(element) {
    _classCallCheck(this, MdCard);

    _initDefineProp(this, 'mdHorizontal', _descriptor11, this);

    _initDefineProp(this, 'mdImage', _descriptor12, this);

    _initDefineProp(this, 'mdReveal', _descriptor13, this);

    _initDefineProp(this, 'mdSize', _descriptor14, this);

    _initDefineProp(this, 'mdTitle', _descriptor15, this);

    this.element = element;
  }

  MdCard.prototype.attached = function attached() {
    this.mdHorizontal = getBooleanFromAttributeValue(this.mdHorizontal);
    this.mdReveal = getBooleanFromAttributeValue(this.mdReveal);
  };

  return MdCard;
}(), (_descriptor11 = _applyDecoratedDescriptor(_class19.prototype, 'mdHorizontal', [_dec23], {
  enumerable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class19.prototype, 'mdImage', [_dec24], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class19.prototype, 'mdReveal', [_dec25], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class19.prototype, 'mdSize', [_dec26], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class19.prototype, 'mdTitle', [_dec27], {
  enumerable: true,
  initializer: null
})), _class19)) || _class18) || _class18);
var MdCarouselItem = exports.MdCarouselItem = (_dec28 = (0, _aureliaDependencyInjection.inject)(Element), _dec29 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec30 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec28(_class21 = (_class22 = function () {
  function MdCarouselItem(element) {
    _classCallCheck(this, MdCarouselItem);

    _initDefineProp(this, 'mdHref', _descriptor16, this);

    _initDefineProp(this, 'mdImage', _descriptor17, this);

    this.element = element;
  }

  MdCarouselItem.prototype.attached = function attached() {};

  return MdCarouselItem;
}(), (_descriptor16 = _applyDecoratedDescriptor(_class22.prototype, 'mdHref', [_dec29], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class22.prototype, 'mdImage', [_dec30], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class22)) || _class21);
var MdCarousel = exports.MdCarousel = (_dec31 = (0, _aureliaTemplating.customElement)('md-carousel'), _dec32 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue), _dec33 = (0, _aureliaTemplating.bindable)(), _dec34 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec35 = (0, _aureliaTemplating.children)('md-carousel-item'), _dec31(_class24 = _dec32(_class24 = (_class25 = function () {
  function MdCarousel(element, taskQueue) {
    _classCallCheck(this, MdCarousel);

    _initDefineProp(this, 'mdIndicators', _descriptor18, this);

    _initDefineProp(this, 'mdSlider', _descriptor19, this);

    _initDefineProp(this, 'items', _descriptor20, this);

    this.element = element;
    this.taskQueue = taskQueue;
  }

  MdCarousel.prototype.attached = function attached() {
    if (getBooleanFromAttributeValue(this.mdSlider)) {
      this.element.classList.add('carousel-slider');
    }

    this.refresh();
  };

  MdCarousel.prototype.itemsChanged = function itemsChanged(newValue) {
    this.refresh();
  };

  MdCarousel.prototype.refresh = function refresh() {
    var _this2 = this;

    if (this.items.length > 0) {
      (function () {
        var options = {
          full_width: getBooleanFromAttributeValue(_this2.mdSlider),
          fullWidth: getBooleanFromAttributeValue(_this2.mdSlider),
          indicators: _this2.mdIndicators
        };

        _this2.taskQueue.queueTask(function () {
          $(_this2.element).carousel(options);
        });
      })();
    }
  };

  return MdCarousel;
}(), (_descriptor18 = _applyDecoratedDescriptor(_class25.prototype, 'mdIndicators', [_dec33], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class25.prototype, 'mdSlider', [_dec34], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class25.prototype, 'items', [_dec35], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class25)) || _class24) || _class24);
var MdCharCounter = exports.MdCharCounter = (_dec36 = (0, _aureliaTemplating.customAttribute)('md-char-counter'), _dec37 = (0, _aureliaDependencyInjection.inject)(Element), _dec38 = (0, _aureliaTemplating.bindable)(), _dec36(_class27 = _dec37(_class27 = (_class28 = function () {
  function MdCharCounter(element) {
    _classCallCheck(this, MdCharCounter);

    _initDefineProp(this, 'length', _descriptor21, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdCharCounter.prototype.attached = function attached() {
    var _this3 = this;

    this.length = parseInt(this.length, 10);

    var tagName = this.element.tagName.toUpperCase();
    if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
      this.attributeManager.addAttributes({ 'data-length': this.length });
      $(this.element).characterCounter();
    } else {
      var elem = $(this.element).find('input,textarea');
      elem.each(function (i, el) {
        $(el).attr('data-length', _this3.length);
      });
      elem.characterCounter();
    }
  };

  MdCharCounter.prototype.detached = function detached() {
    this.attributeManager.removeAttributes(['data-length']);
  };

  return MdCharCounter;
}(), (_descriptor21 = _applyDecoratedDescriptor(_class28.prototype, 'length', [_dec38], {
  enumerable: true,
  initializer: function initializer() {
    return 120;
  }
})), _class28)) || _class27) || _class27);
var MdChip = exports.MdChip = (_dec39 = (0, _aureliaTemplating.customElement)('md-chip'), _dec40 = (0, _aureliaDependencyInjection.inject)(Element), _dec41 = (0, _aureliaTemplating.bindable)(), _dec39(_class30 = _dec40(_class30 = (_class31 = function () {
  function MdChip(element) {
    _classCallCheck(this, MdChip);

    _initDefineProp(this, 'mdClose', _descriptor22, this);

    this.element = element;
  }

  MdChip.prototype.attached = function attached() {
    this.mdClose = getBooleanFromAttributeValue(this.mdClose);
  };

  MdChip.prototype.close = function close() {
    this.element.parentElement.removeChild(this.element);
    fireEvent(this.element, 'close');
  };

  return MdChip;
}(), (_descriptor22 = _applyDecoratedDescriptor(_class31.prototype, 'mdClose', [_dec41], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class31)) || _class30) || _class30);
var MdChips = exports.MdChips = (_dec42 = (0, _aureliaTemplating.customAttribute)('md-chips'), _dec43 = (0, _aureliaDependencyInjection.inject)(Element), _dec44 = (0, _aureliaTemplating.bindable)(), _dec45 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec46 = (0, _aureliaTemplating.bindable)(), _dec47 = (0, _aureliaTemplating.bindable)(), _dec42(_class33 = _dec43(_class33 = (_class34 = function () {
  function MdChips(element) {
    _classCallCheck(this, MdChips);

    _initDefineProp(this, 'autocompleteData', _descriptor23, this);

    _initDefineProp(this, 'data', _descriptor24, this);

    _initDefineProp(this, 'placeholder', _descriptor25, this);

    _initDefineProp(this, 'secondaryPlaceholder', _descriptor26, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-chips');

    this.onChipAdd = this.onChipAdd.bind(this);
    this.onChipDelete = this.onChipDelete.bind(this);
    this.onChipSelect = this.onChipSelect.bind(this);
  }

  MdChips.prototype.attached = function attached() {
    var options = {
      autocompleteData: this.autocompleteData,
      data: this.data,
      placeholder: this.placeholder,
      secondaryPlaceholder: this.secondaryPlaceholder
    };
    $(this.element).material_chip(options);
    $(this.element).on('chip.add', this.onChipAdd);
    $(this.element).on('chip.delete', this.onChipDelete);
    $(this.element).on('chip.select', this.onChipSelect);
  };

  MdChips.prototype.detached = function detached() {};

  MdChips.prototype.onChipAdd = function onChipAdd(e, chip) {
    this.data = $(this.element).material_chip('data');
    fireEvent(this.element, 'change', { operation: 'add', target: chip, data: this.data });
  };

  MdChips.prototype.onChipDelete = function onChipDelete(e, chip) {
    this.data = $(this.element).material_chip('data');
    fireEvent(this.element, 'change', { operation: 'delete', target: chip, data: this.data });
  };

  MdChips.prototype.onChipSelect = function onChipSelect(e, chip) {
    fireEvent(this.element, 'selected', { target: chip });
  };

  return MdChips;
}(), (_descriptor23 = _applyDecoratedDescriptor(_class34.prototype, 'autocompleteData', [_dec44], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class34.prototype, 'data', [_dec45], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class34.prototype, 'placeholder', [_dec46], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class34.prototype, 'secondaryPlaceholder', [_dec47], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class34)) || _class33) || _class33);
var MdCheckbox = exports.MdCheckbox = (_dec48 = (0, _aureliaDependencyInjection.inject)(Element), _dec49 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec50 = (0, _aureliaTemplating.bindable)(), _dec51 = (0, _aureliaTemplating.bindable)(), _dec52 = (0, _aureliaTemplating.bindable)(), _dec53 = (0, _aureliaTemplating.bindable)(), _dec54 = (0, _aureliaTemplating.bindable)(), _dec48(_class36 = (_class37 = (_temp = _class38 = function () {
  function MdCheckbox(element) {
    _classCallCheck(this, MdCheckbox);

    _initDefineProp(this, 'mdChecked', _descriptor27, this);

    _initDefineProp(this, 'mdDisabled', _descriptor28, this);

    _initDefineProp(this, 'mdReadonly', _descriptor29, this);

    _initDefineProp(this, 'mdFilledIn', _descriptor30, this);

    _initDefineProp(this, 'mdMatcher', _descriptor31, this);

    _initDefineProp(this, 'mdModel', _descriptor32, this);

    this.element = element;
    this.controlId = 'md-checkbox-' + MdCheckbox.id++;
  }

  MdCheckbox.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.checkbox);
    if (getBooleanFromAttributeValue(this.mdFilledIn)) {
      this.attributeManager.addClasses('filled-in');
    }
    if (this.mdChecked === null) {
      this.checkbox.indeterminate = true;
    } else {
      this.checkbox.indeterminate = false;
    }
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.checkbox.disabled = true;
    }
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
  };

  MdCheckbox.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['filled-in', 'disabled']);
  };

  MdCheckbox.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.disabled = !!newValue;
    }
  };

  return MdCheckbox;
}(), _class38.id = 0, _temp), (_descriptor27 = _applyDecoratedDescriptor(_class37.prototype, 'mdChecked', [_dec49], {
  enumerable: true,
  initializer: null
}), _descriptor28 = _applyDecoratedDescriptor(_class37.prototype, 'mdDisabled', [_dec50], {
  enumerable: true,
  initializer: null
}), _descriptor29 = _applyDecoratedDescriptor(_class37.prototype, 'mdReadonly', [_dec51], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor30 = _applyDecoratedDescriptor(_class37.prototype, 'mdFilledIn', [_dec52], {
  enumerable: true,
  initializer: null
}), _descriptor31 = _applyDecoratedDescriptor(_class37.prototype, 'mdMatcher', [_dec53], {
  enumerable: true,
  initializer: null
}), _descriptor32 = _applyDecoratedDescriptor(_class37.prototype, 'mdModel', [_dec54], {
  enumerable: true,
  initializer: null
})), _class37)) || _class36);
var MdCollectionHeader = exports.MdCollectionHeader = (_dec55 = (0, _aureliaTemplating.customElement)('md-collection-header'), _dec56 = (0, _aureliaDependencyInjection.inject)(Element), _dec55(_class39 = _dec56(_class39 = function MdCollectionHeader(element) {
  _classCallCheck(this, MdCollectionHeader);

  this.element = element;
}) || _class39) || _class39);
var MdCollectionItem = exports.MdCollectionItem = (_dec57 = (0, _aureliaTemplating.customElement)('md-collection-item'), _dec57(_class40 = function MdCollectionItem() {
  _classCallCheck(this, MdCollectionItem);
}) || _class40);
var MdCollection = exports.MdCollection = (_dec58 = (0, _aureliaTemplating.customElement)('md-collection'), _dec59 = (0, _aureliaDependencyInjection.inject)(Element), _dec58(_class41 = _dec59(_class41 = function () {
  function MdCollection(element) {
    _classCallCheck(this, MdCollection);

    this.element = element;
  }

  MdCollection.prototype.attached = function attached() {
    var header = this.element.querySelector('md-collection-header');
    if (header) {
      this.anchor.classList.add('with-header');
    }
  };

  MdCollection.prototype.getSelected = function getSelected() {
    var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    return items.filter(function (i) {
      return i.au['md-collection-selector'].viewModel.isSelected;
    }).map(function (i) {
      return i.au['md-collection-selector'].viewModel.item;
    });
  };

  MdCollection.prototype.clearSelection = function clearSelection() {
    var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    items.forEach(function (i) {
      return i.au['md-collection-selector'].viewModel.isSelected = false;
    });
  };

  MdCollection.prototype.selectAll = function selectAll() {
    var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    items.forEach(function (i) {
      var vm = i.au['md-collection-selector'].viewModel;
      vm.isSelected = !vm.mdDisabled;
    });
  };

  return MdCollection;
}()) || _class41) || _class41);
var MdlListSelector = exports.MdlListSelector = (_dec60 = (0, _aureliaTemplating.customElement)('md-collection-selector'), _dec61 = (0, _aureliaDependencyInjection.inject)(Element), _dec62 = (0, _aureliaTemplating.bindable)(), _dec63 = (0, _aureliaTemplating.bindable)(), _dec64 = (0, _aureliaBinding.observable)(), _dec60(_class42 = _dec61(_class42 = (_class43 = function () {
  function MdlListSelector(element) {
    _classCallCheck(this, MdlListSelector);

    _initDefineProp(this, 'item', _descriptor33, this);

    _initDefineProp(this, 'mdDisabled', _descriptor34, this);

    _initDefineProp(this, 'isSelected', _descriptor35, this);

    this.element = element;
  }

  MdlListSelector.prototype.isSelectedChanged = function isSelectedChanged(newValue) {
    fireMaterializeEvent(this.element, 'selection-changed', { item: this.item, isSelected: this.isSelected });
  };

  MdlListSelector.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    this.mdDisabled = getBooleanFromAttributeValue(newValue);
  };

  return MdlListSelector;
}(), (_descriptor33 = _applyDecoratedDescriptor(_class43.prototype, 'item', [_dec62], {
  enumerable: true,
  initializer: null
}), _descriptor34 = _applyDecoratedDescriptor(_class43.prototype, 'mdDisabled', [_dec63], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor35 = _applyDecoratedDescriptor(_class43.prototype, 'isSelected', [_dec64], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class43)) || _class42) || _class42);
var MdCollapsible = exports.MdCollapsible = (_dec65 = (0, _aureliaTemplating.customAttribute)('md-collapsible'), _dec66 = (0, _aureliaTemplating.bindable)({ name: 'accordion', defaultValue: false }), _dec67 = (0, _aureliaTemplating.bindable)({ name: 'popout', defaultValue: false }), _dec68 = (0, _aureliaTemplating.bindable)({ name: 'onOpen' }), _dec69 = (0, _aureliaTemplating.bindable)({ name: 'onClose' }), _dec70 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaEventAggregator.EventAggregator), _dec65(_class45 = _dec66(_class45 = _dec67(_class45 = _dec68(_class45 = _dec69(_class45 = _dec70(_class45 = function () {
  function MdCollapsible(element, eventAggregator) {
    _classCallCheck(this, MdCollapsible);

    this.element = element;
    this.eventAggregator = eventAggregator;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdCollapsible.prototype.attached = function attached() {
    this.attributeManager.addClasses('collapsible');
    if (getBooleanFromAttributeValue(this.popout)) {
      this.attributeManager.addClasses('popout');
    }
    this.refresh();
  };

  MdCollapsible.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['collapsible', 'popout']);
    this.attributeManager.removeAttributes(['data-collapsible']);
  };

  MdCollapsible.prototype.refresh = function refresh() {
    var accordion = getBooleanFromAttributeValue(this.accordion);
    var dataCollapsibleAttributeValue = accordion ? 'accordion' : 'expandable';

    this.attributeManager.addAttributes({ 'data-collapsible': dataCollapsibleAttributeValue });

    $(this.element).collapsible({
      accordion: accordion,
      onOpen: this.buildCollapsibleOpenCloseCallbackHandler(this.onOpen),
      onClose: this.buildCollapsibleOpenCloseCallbackHandler(this.onClose)
    });
  };

  MdCollapsible.prototype.accordionChanged = function accordionChanged() {
    this.refresh();
  };

  MdCollapsible.prototype.buildCollapsibleOpenCloseCallbackHandler = function buildCollapsibleOpenCloseCallbackHandler(handler) {
    return typeof handler === 'function' ? function (targetElementJquery) {
      var targetElement = targetElementJquery[0];

      handler(targetElement);
    } : null;
  };

  return MdCollapsible;
}()) || _class45) || _class45) || _class45) || _class45) || _class45) || _class45);

function shadeBlendConvert(p, from, to) {
  if (typeof p != "number" || p < -1 || p > 1 || typeof from != "string" || from[0] != 'r' && from[0] != '#' || typeof to != "string" && typeof to != "undefined") return null;
  var sbcRip = function sbcRip(d) {
    var l = d.length,
        RGB = new Object();
    if (l > 9) {
      d = d.split(",");
      if (d.length < 3 || d.length > 4) return null;
      RGB[0] = i(d[0].slice(4)), RGB[1] = i(d[1]), RGB[2] = i(d[2]), RGB[3] = d[3] ? parseFloat(d[3]) : -1;
    } else {
      switch (l) {case 8:case 6:case 3:case 2:case 1:
          return null;}
      if (l < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (l > 4 ? d[4] + "" + d[4] : "");
      d = i(d.slice(1), 16), RGB[0] = d >> 16 & 255, RGB[1] = d >> 8 & 255, RGB[2] = d & 255, RGB[3] = l == 9 || l == 5 ? r((d >> 24 & 255) / 255 * 10000) / 10000 : -1;
    }
    return RGB;
  };
  var i = parseInt,
      r = Math.round,
      h = from.length > 9,
      h = typeof to == "string" ? to.length > 9 ? true : to == "c" ? !h : false : h,
      b = p < 0,
      p = b ? p * -1 : p,
      to = to && to != "c" ? to : b ? "#000000" : "#FFFFFF",
      f = sbcRip(from),
      t = sbcRip(to);
  if (!f || !t) return null;
  if (h) return "rgb(" + r((t[0] - f[0]) * p + f[0]) + "," + r((t[1] - f[1]) * p + f[1]) + "," + r((t[2] - f[2]) * p + f[2]) + (f[3] < 0 && t[3] < 0 ? ")" : "," + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000 : t[3] < 0 ? f[3] : t[3]) + ")");else return "#" + (0x100000000 + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 255) : t[3] > -1 ? r(t[3] * 255) : f[3] > -1 ? r(f[3] * 255) : 255) * 0x1000000 + r((t[0] - f[0]) * p + f[0]) * 0x10000 + r((t[1] - f[1]) * p + f[1]) * 0x100 + r((t[2] - f[2]) * p + f[2])).toString(16).slice(f[3] > -1 || t[3] > -1 ? 1 : 3);
}

var DarkenValueConverter = exports.DarkenValueConverter = function () {
  function DarkenValueConverter() {
    _classCallCheck(this, DarkenValueConverter);
  }

  DarkenValueConverter.prototype.toView = function toView(value, steps) {
    return shadeBlendConvert(-0.3 * parseFloat(steps, 10), value);
  };

  return DarkenValueConverter;
}();

var LightenValueConverter = exports.LightenValueConverter = function () {
  function LightenValueConverter() {
    _classCallCheck(this, LightenValueConverter);
  }

  LightenValueConverter.prototype.toView = function toView(value, steps) {
    return shadeBlendConvert(0.3 * parseFloat(steps, 10), value);
  };

  return LightenValueConverter;
}();

var MdColors = exports.MdColors = (_dec71 = (0, _aureliaTemplating.bindable)(), _dec72 = (0, _aureliaTemplating.bindable)(), _dec73 = (0, _aureliaTemplating.bindable)(), _dec74 = (0, _aureliaTemplating.bindable)(), (_class46 = function MdColors() {
  _classCallCheck(this, MdColors);

  _initDefineProp(this, 'mdPrimaryColor', _descriptor36, this);

  _initDefineProp(this, 'mdAccentColor', _descriptor37, this);

  _initDefineProp(this, 'mdErrorColor', _descriptor38, this);

  _initDefineProp(this, 'mdSuccessColor', _descriptor39, this);
}, (_descriptor36 = _applyDecoratedDescriptor(_class46.prototype, 'mdPrimaryColor', [_dec71], {
  enumerable: true,
  initializer: null
}), _descriptor37 = _applyDecoratedDescriptor(_class46.prototype, 'mdAccentColor', [_dec72], {
  enumerable: true,
  initializer: null
}), _descriptor38 = _applyDecoratedDescriptor(_class46.prototype, 'mdErrorColor', [_dec73], {
  enumerable: true,
  initializer: function initializer() {
    return '#F44336';
  }
}), _descriptor39 = _applyDecoratedDescriptor(_class46.prototype, 'mdSuccessColor', [_dec74], {
  enumerable: true,
  initializer: null
})), _class46));

var AttributeManager = exports.AttributeManager = function () {
  function AttributeManager(element) {
    _classCallCheck(this, AttributeManager);

    this._colorClasses = ['accent', 'primary'];
    this.addedClasses = [];
    this.addedAttributes = {};

    this.element = element;
  }

  AttributeManager.prototype.addAttributes = function addAttributes(attrs) {
    var _this4 = this;

    var keys = Object.keys(attrs);
    keys.forEach(function (k) {
      if (!_this4.element.getAttribute(k)) {
        _this4.addedAttributes[k] = attrs[k];
        _this4.element.setAttribute(k, attrs[k]);
      } else if (_this4.element.getAttribute(k) !== attrs[k]) {
        _this4.element.setAttribute(k, attrs[k]);
      }
    });
  };

  AttributeManager.prototype.removeAttributes = function removeAttributes(attrs) {
    var _this5 = this;

    if (typeof attrs === 'string') {
      attrs = [attrs];
    }
    attrs.forEach(function (a) {
      if (_this5.element.getAttribute(a) && !!_this5.addedAttributes[a]) {
        _this5.element.removeAttribute(a);
        _this5.addedAttributes[a] = null;
        delete _this5.addedAttributes[a];
      }
    });
  };

  AttributeManager.prototype.addClasses = function addClasses(classes) {
    var _this6 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      var classListHasColor = _this6._colorClasses.filter(function (cc) {
        return _this6.element.classList.contains(cc);
      }).length > 0;
      if (_this6._colorClasses.indexOf(c) > -1 && classListHasColor) {} else {
        if (!_this6.element.classList.contains(c)) {
          _this6.addedClasses.push(c);
          _this6.element.classList.add(c);
        }
      }
    });
  };

  AttributeManager.prototype.removeClasses = function removeClasses(classes) {
    var _this7 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      if (_this7.element.classList.contains(c) && _this7.addedClasses.indexOf(c) > -1) {
        _this7.element.classList.remove(c);
        _this7.addedClasses.splice(_this7.addedClasses.indexOf(c), 1);
      }
    });
  };

  return AttributeManager;
}();

function getBooleanFromAttributeValue(value) {
  return value === true || value === 'true';
}

var constants = exports.constants = {
  eventPrefix: 'md-on-',
  bindablePrefix: 'md-'
};

function fireEvent(element, name) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);

  return event;
}

function fireMaterializeEvent(element, name) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return fireEvent(element, '' + constants.eventPrefix + name, data);
}

function polyfillElementClosest() {
  if (typeof Element.prototype.matches !== 'function') {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }
      return Boolean(elements[index]);
    };
  }

  if (typeof Element.prototype.closest !== 'function') {
    Element.prototype.closest = function closest(selector) {
      var element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }
      return null;
    };
  }
}

var DatePickerDefaultParser = exports.DatePickerDefaultParser = function () {
  function DatePickerDefaultParser() {
    _classCallCheck(this, DatePickerDefaultParser);
  }

  DatePickerDefaultParser.prototype.canParse = function canParse(value) {
    if (value) {
      return true;
    }
    return false;
  };

  DatePickerDefaultParser.prototype.parse = function parse(value) {
    if (value) {
      var result = value.split('/').join('-');
      result = new Date(result);
      return isNaN(result) ? null : result;
    }
    return null;
  };

  return DatePickerDefaultParser;
}();

var MdDatePicker = exports.MdDatePicker = (_dec75 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue, DatePickerDefaultParser), _dec76 = (0, _aureliaTemplating.customAttribute)('md-datepicker'), _dec77 = (0, _aureliaTemplating.bindable)(), _dec78 = (0, _aureliaTemplating.bindable)(), _dec79 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec80 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec81 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec82 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec83 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec84 = (0, _aureliaTemplating.bindable)(), _dec75(_class49 = _dec76(_class49 = (_class50 = function () {
  function MdDatePicker(element, taskQueue, defaultParser) {
    _classCallCheck(this, MdDatePicker);

    _initDefineProp(this, 'container', _descriptor40, this);

    _initDefineProp(this, 'translation', _descriptor41, this);

    _initDefineProp(this, 'value', _descriptor42, this);

    _initDefineProp(this, 'parsers', _descriptor43, this);

    _initDefineProp(this, 'selectMonths', _descriptor44, this);

    _initDefineProp(this, 'selectYears', _descriptor45, this);

    _initDefineProp(this, 'options', _descriptor46, this);

    _initDefineProp(this, 'showErrortext', _descriptor47, this);

    this.calendarIcon = null;

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-datepicker');
    this.taskQueue = taskQueue;
    this.parsers.push(defaultParser);
    this.onCalendarIconClick = this.onCalendarIconClick.bind(this);
  }

  MdDatePicker.prototype.bind = function bind() {
    var _this8 = this;

    this.selectMonths = getBooleanFromAttributeValue(this.selectMonths);
    this.selectYears = parseInt(this.selectYears, 10);
    this.element.classList.add('date-picker');

    var options = {
      selectMonths: this.selectMonths,
      selectYears: this.selectYears,
      onClose: function onClose() {
        $(document.activeElement).blur();
      }
    };
    var i18n = {};

    Object.assign(options, i18n);

    if (this.options) {
      Object.assign(options, this.options);

      if (this.options.onClose) {
        options.onClose = function () {
          _this8.options.onClose();
          $(document.activeElement).blur();
        };
      }
    }
    if (this.container) {
      options.container = this.container;
    }
    this.picker = $(this.element).pickadate(options).pickadate('picker');
    this.picker.on({
      'close': this.onClose.bind(this),
      'set': this.onSet.bind(this)
    });

    if (this.value) {
      this.picker.set('select', this.value);
    }
    if (this.options && this.options.editable) {
      $(this.element).on('keydown', function (e) {
        if (e.keyCode === 13 || e.keyCode === 9) {
          if (_this8.parseDate($(_this8.element).val())) {
            _this8.closeDatePicker();
          } else {
            _this8.openDatePicker();
          }
        } else {
          _this8.value = null;
        }
      });
    } else {
      $(this.element).on('focusin', function () {
        _this8.openDatePicker();
      });
    }
    if (this.options.showIcon) {
      this.element.classList.add('left');
      this.calendarIcon = document.createElement('i');
      this.calendarIcon.classList.add('right');
      this.calendarIcon.classList.add('material-icons');
      this.calendarIcon.textContent = 'today';
      this.element.parentNode.insertBefore(this.calendarIcon, this.element.nextSibling);
      $(this.calendarIcon).on('click', this.onCalendarIconClick);

      options.iconClass = options.iconClass || 'std-icon-fixup';
      this.calendarIcon.classList.add(options.iconClass);
    }

    this.setErrorTextAttribute();
  };

  MdDatePicker.prototype.parseDate = function parseDate(value) {
    if (this.parsers && this.parsers.length && this.parsers.length > 0) {
      for (var _iterator = this.parsers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var parser = _ref;

        if (parser.canParse(value)) {
          var parsedDate = parser.parse(value);
          if (parsedDate !== null) {
            this.picker.set('select', parsedDate);
            return true;
          }
        }
      }
    }
    return false;
  };

  MdDatePicker.prototype.detached = function detached() {
    if (this.options.showIcon) {
      this.element.classList.remove('left');
      $(this.calendarIcon).off('click', this.onCalendarIconClick);
      $(this.calendarIcon).remove();
      this.calendarIcon = null;
    }
    if (this.picker) {
      this.picker.stop();
    }
  };

  MdDatePicker.prototype.openDatePicker = function openDatePicker() {
    $(this.element).pickadate('open');
  };

  MdDatePicker.prototype.closeDatePicker = function closeDatePicker() {
    $(this.element).pickadate('close');
  };

  MdDatePicker.prototype.onClose = function onClose() {
    var selected = this.picker.get('select');
    this.value = selected ? selected.obj : null;
    fireEvent(this.element, 'blur');
  };

  MdDatePicker.prototype.onCalendarIconClick = function onCalendarIconClick(event) {
    event.stopPropagation();
    this.openDatePicker();
  };

  MdDatePicker.prototype.onSet = function onSet(value) {
    if (this.options && this.options.closeOnSelect && value.select) {
      this.value = value.select;
      this.picker.close();
    }
  };

  MdDatePicker.prototype.valueChanged = function valueChanged(newValue) {
    if (this.options.max && newValue > this.options.max) {
      this.value = this.options.max;
    }
    this.log.debug('selectedChanged', this.value);

    this.picker.set('select', this.value);
  };

  MdDatePicker.prototype.showErrortextChanged = function showErrortextChanged() {
    this.setErrorTextAttribute();
  };

  MdDatePicker.prototype.setErrorTextAttribute = function setErrorTextAttribute() {
    var element = this.element;
    if (!element) return;
    this.log.debug('showErrortextChanged: ' + this.showErrortext);
    element.setAttribute('data-show-errortext', getBooleanFromAttributeValue(this.showErrortext));
  };

  return MdDatePicker;
}(), (_descriptor40 = _applyDecoratedDescriptor(_class50.prototype, 'container', [_dec77], {
  enumerable: true,
  initializer: null
}), _descriptor41 = _applyDecoratedDescriptor(_class50.prototype, 'translation', [_dec78], {
  enumerable: true,
  initializer: null
}), _descriptor42 = _applyDecoratedDescriptor(_class50.prototype, 'value', [_dec79], {
  enumerable: true,
  initializer: null
}), _descriptor43 = _applyDecoratedDescriptor(_class50.prototype, 'parsers', [_dec80], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor44 = _applyDecoratedDescriptor(_class50.prototype, 'selectMonths', [_dec81], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor45 = _applyDecoratedDescriptor(_class50.prototype, 'selectYears', [_dec82], {
  enumerable: true,
  initializer: function initializer() {
    return 15;
  }
}), _descriptor46 = _applyDecoratedDescriptor(_class50.prototype, 'options', [_dec83], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor47 = _applyDecoratedDescriptor(_class50.prototype, 'showErrortext', [_dec84], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class50)) || _class49) || _class49);
var MdDropdownElement = exports.MdDropdownElement = (_dec85 = (0, _aureliaTemplating.customElement)('md-dropdown'), _dec86 = (0, _aureliaDependencyInjection.inject)(Element), _dec87 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec88 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec89 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec90 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec91 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec92 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec93 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec94 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec85(_class52 = _dec86(_class52 = (_class53 = (_temp2 = _class54 = function () {
  function MdDropdownElement(element) {
    _classCallCheck(this, MdDropdownElement);

    _initDefineProp(this, 'alignment', _descriptor48, this);

    _initDefineProp(this, 'belowOrigin', _descriptor49, this);

    _initDefineProp(this, 'constrainWidth', _descriptor50, this);

    _initDefineProp(this, 'gutter', _descriptor51, this);

    _initDefineProp(this, 'hover', _descriptor52, this);

    _initDefineProp(this, 'mdTitle', _descriptor53, this);

    _initDefineProp(this, 'inDuration', _descriptor54, this);

    _initDefineProp(this, 'outDuration', _descriptor55, this);

    this.element = element;
    this.controlId = 'md-dropdown-' + MdDropdown.id++;
  }

  MdDropdownElement.prototype.attached = function attached() {
    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10)
    });
  };

  return MdDropdownElement;
}(), _class54.id = 0, _temp2), (_descriptor48 = _applyDecoratedDescriptor(_class53.prototype, 'alignment', [_dec87], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor49 = _applyDecoratedDescriptor(_class53.prototype, 'belowOrigin', [_dec88], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor50 = _applyDecoratedDescriptor(_class53.prototype, 'constrainWidth', [_dec89], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor51 = _applyDecoratedDescriptor(_class53.prototype, 'gutter', [_dec90], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor52 = _applyDecoratedDescriptor(_class53.prototype, 'hover', [_dec91], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor53 = _applyDecoratedDescriptor(_class53.prototype, 'mdTitle', [_dec92], {
  enumerable: true,
  initializer: null
}), _descriptor54 = _applyDecoratedDescriptor(_class53.prototype, 'inDuration', [_dec93], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor55 = _applyDecoratedDescriptor(_class53.prototype, 'outDuration', [_dec94], {
  enumerable: true,
  initializer: function initializer() {
    return 225;
  }
})), _class53)) || _class52) || _class52);
function applyMaterializeDropdownFix() {
  $.fn.dropdown = function (options) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrain_width: true,
      hover: false,
      gutter: 0,
      belowOrigin: false,
      alignment: 'left',
      stopPropagation: false
    };

    if (options === 'open') {
      this.each(function () {
        $(this).trigger('open');
      });
      return false;
    }

    if (options === 'close') {
      this.each(function () {
        $(this).trigger('close');
      });
      return false;
    }

    this.each(function () {
      var origin = $(this);
      var currentOptions = $.extend({}, defaults, options);
      var isFocused = false;

      var activates = $('#' + origin.attr('data-activates'));

      function updateOptions() {
        if (origin.data('induration') !== undefined) {
          currentOptions.inDuration = origin.data('induration');
        }
        if (origin.data('outduration') !== undefined) {
          currentOptions.outDuration = origin.data('outduration');
        }
        if (origin.data('constrainwidth') !== undefined) {
          currentOptions.constrain_width = origin.data('constrainwidth');
        }
        if (origin.data('hover') !== undefined) {
          currentOptions.hover = origin.data('hover');
        }
        if (origin.data('gutter') !== undefined) {
          currentOptions.gutter = origin.data('gutter');
        }
        if (origin.data('beloworigin') !== undefined) {
          currentOptions.belowOrigin = origin.data('beloworigin');
        }
        if (origin.data('alignment') !== undefined) {
          currentOptions.alignment = origin.data('alignment');
        }
        if (origin.data('stoppropagation') !== undefined) {
          currentOptions.stopPropagation = origin.data('stoppropagation');
        }
      }

      updateOptions();

      origin.after(activates);

      function placeDropdown(eventType) {
        if (eventType === 'focus') {
          isFocused = true;
        }

        updateOptions();

        activates.addClass('active');
        origin.addClass('active');

        if (currentOptions.constrain_width === true) {
          activates.css('width', origin.outerWidth());
        } else {
          activates.css('white-space', 'nowrap');
        }

        var windowHeight = window.innerHeight;
        var originHeight = origin.innerHeight();
        var offsetLeft = origin.offset().left;
        var offsetTop = origin.offset().top - $(window).scrollTop();
        var currAlignment = currentOptions.alignment;
        var gutterSpacing = 0;
        var leftPosition = 0;

        var verticalOffset = 0;
        if (currentOptions.belowOrigin === true) {
          verticalOffset = originHeight;
        }

        var scrollYOffset = 0;
        var scrollXOffset = 0;
        var wrapper = origin.parent();
        if (!wrapper.is('body')) {
          if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
            scrollYOffset = wrapper[0].scrollTop;
          }
          if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
            scrollXOffset = wrapper[0].scrollLeft;
          }
        }

        if (offsetLeft + activates.innerWidth() > $(window).width()) {
          currAlignment = 'right';
        } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
          currAlignment = 'left';
        }

        if (offsetTop + activates.innerHeight() > windowHeight) {
          if (offsetTop + originHeight - activates.innerHeight() < 0) {
            var adjustedHeight = windowHeight - offsetTop - verticalOffset;
            activates.css('max-height', adjustedHeight);
          } else {
            if (!verticalOffset) {
              verticalOffset += originHeight;
            }
            verticalOffset -= activates.innerHeight();
          }
        }

        if (currAlignment === 'left') {
          gutterSpacing = currentOptions.gutter;
          leftPosition = origin.position().left + gutterSpacing;
        } else if (currAlignment === 'right') {
          var offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();
          gutterSpacing = -currentOptions.gutter;
          leftPosition = offsetRight + gutterSpacing;
        }

        activates.css({
          position: 'absolute',
          top: origin.position().top + verticalOffset + scrollYOffset,
          left: leftPosition + scrollXOffset
        });

        activates.stop(true, true).css('opacity', 0).slideDown({
          queue: false,
          duration: currentOptions.inDuration,
          easing: 'easeOutCubic',
          complete: function complete() {
            $(this).css('height', '');
          }
        }).animate({ opacity: 1 }, { queue: false, duration: currentOptions.inDuration, easing: 'easeOutSine' });
      }

      function hideDropdown() {
        isFocused = false;
        activates.fadeOut(currentOptions.outDuration);
        activates.removeClass('active');
        origin.removeClass('active');
        setTimeout(function () {
          activates.css('max-height', '');
        }, currentOptions.outDuration);
      }

      if (currentOptions.hover) {
        (function () {
          var open = false;
          origin.unbind('click.' + origin.attr('id'));

          origin.on('mouseenter', function (e) {
            if (open === false) {
              placeDropdown();
              open = true;
            }
          });
          origin.on('mouseleave', function (e) {
            var toEl = e.toElement || e.relatedTarget;
            if (!$(toEl).closest('.dropdown-content').is(activates)) {
              activates.stop(true, true);
              hideDropdown();
              open = false;
            }
          });

          activates.on('mouseleave', function (e) {
            var toEl = e.toElement || e.relatedTarget;
            if (!$(toEl).closest('.dropdown-button').is(origin)) {
              activates.stop(true, true);
              hideDropdown();
              open = false;
            }
          });
        })();
      } else {
        origin.unbind('click.' + origin.attr('id'));
        origin.bind('click.' + origin.attr('id'), function (e) {
          if (!isFocused) {
            if (origin[0] === e.currentTarget && !origin.hasClass('active') && $(e.target).closest('.dropdown-content').length === 0) {
              e.preventDefault();
              if (currentOptions.stopPropagation) {
                e.stopPropagation();
              }
              placeDropdown('click');
            } else if (origin.hasClass('active')) {
              hideDropdown();
              $(document).unbind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'));
            }

            if (activates.hasClass('active')) {
              $(document).bind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'), function (e2) {
                if (!activates.is(e2.target) && !origin.is(e2.target) && !origin.find(e2.target).length) {
                  hideDropdown();
                  $(document).unbind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'));
                }
              });
            }
          }
        });
      }
      origin.on('open', function (e, eventType) {
        placeDropdown(eventType);
      });
      origin.on('close', hideDropdown);
    });
  };

  $(document).ready(function () {
    $('.dropdown-button').dropdown();
  });
}

var MdDropdown = exports.MdDropdown = (_dec95 = (0, _aureliaTemplating.customAttribute)('md-dropdown'), _dec96 = (0, _aureliaDependencyInjection.inject)(Element), _dec97 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec98 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec99 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec100 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec101 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec102 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec103 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec104 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec105 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec106 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec95(_class55 = _dec96(_class55 = (_class56 = (_temp3 = _class57 = function () {
  function MdDropdown(element) {
    _classCallCheck(this, MdDropdown);

    _initDefineProp(this, 'activates', _descriptor56, this);

    _initDefineProp(this, 'ref', _descriptor57, this);

    _initDefineProp(this, 'alignment', _descriptor58, this);

    _initDefineProp(this, 'belowOrigin', _descriptor59, this);

    _initDefineProp(this, 'constrainWidth', _descriptor60, this);

    _initDefineProp(this, 'gutter', _descriptor61, this);

    _initDefineProp(this, 'hover', _descriptor62, this);

    _initDefineProp(this, 'mdTitle', _descriptor63, this);

    _initDefineProp(this, 'inDuration', _descriptor64, this);

    _initDefineProp(this, 'outDuration', _descriptor65, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdDropdown.prototype.attached = function attached() {
    this.handleActivateElement();
    this.contentAttributeManager = new AttributeManager(document.getElementById(this.activates));

    this.attributeManager.addClasses('dropdown-button');
    this.contentAttributeManager.addClasses('dropdown-content');


    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      constrainWidth: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10)
    });
  };

  MdDropdown.prototype.detached = function detached() {
    this.attributeManager.removeAttributes('data-activates');
    this.attributeManager.removeClasses('dropdown-button');
    this.contentAttributeManager.removeClasses('dropdown-content');
  };

  MdDropdown.prototype.handleActivateElement = function handleActivateElement() {
    if (this.ref) {
      var id = this.ref.getAttribute('id');
      if (!id) {
        id = 'md-dropdown-' + MdDropdown.elementId++;
        this.ref.setAttribute('id', id);
        this.activates = id;
      }
      this.id = MdDropdown.elementId++;
    }
    this.attributeManager.addAttributes({ 'data-activates': this.activates });
  };

  return MdDropdown;
}(), _class57.elementId = 0, _temp3), (_descriptor56 = _applyDecoratedDescriptor(_class56.prototype, 'activates', [_dec97], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor57 = _applyDecoratedDescriptor(_class56.prototype, 'ref', [_dec98], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor58 = _applyDecoratedDescriptor(_class56.prototype, 'alignment', [_dec99], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor59 = _applyDecoratedDescriptor(_class56.prototype, 'belowOrigin', [_dec100], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor60 = _applyDecoratedDescriptor(_class56.prototype, 'constrainWidth', [_dec101], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor61 = _applyDecoratedDescriptor(_class56.prototype, 'gutter', [_dec102], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor62 = _applyDecoratedDescriptor(_class56.prototype, 'hover', [_dec103], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor63 = _applyDecoratedDescriptor(_class56.prototype, 'mdTitle', [_dec104], {
  enumerable: true,
  initializer: null
}), _descriptor64 = _applyDecoratedDescriptor(_class56.prototype, 'inDuration', [_dec105], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor65 = _applyDecoratedDescriptor(_class56.prototype, 'outDuration', [_dec106], {
  enumerable: true,
  initializer: function initializer() {
    return 225;
  }
})), _class56)) || _class55) || _class55);
var MdFab = exports.MdFab = (_dec107 = (0, _aureliaTemplating.customElement)('md-fab'), _dec108 = (0, _aureliaDependencyInjection.inject)(Element), _dec109 = (0, _aureliaTemplating.bindable)(), _dec110 = (0, _aureliaTemplating.bindable)(), _dec107(_class58 = _dec108(_class58 = (_class59 = function () {
  function MdFab(element) {
    _classCallCheck(this, MdFab);

    _initDefineProp(this, 'mdFixed', _descriptor66, this);

    _initDefineProp(this, 'mdLarge', _descriptor67, this);

    this.element = element;
  }

  MdFab.prototype.attached = function attached() {
    this.mdFixed = getBooleanFromAttributeValue(this.mdFixed);
    this.mdLarge = getBooleanFromAttributeValue(this.mdLarge);
  };

  return MdFab;
}(), (_descriptor66 = _applyDecoratedDescriptor(_class59.prototype, 'mdFixed', [_dec109], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor67 = _applyDecoratedDescriptor(_class59.prototype, 'mdLarge', [_dec110], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class59)) || _class58) || _class58);
var MdFileInput = exports.MdFileInput = (_dec111 = (0, _aureliaTemplating.customElement)('md-file'), _dec112 = (0, _aureliaDependencyInjection.inject)(Element), _dec113 = (0, _aureliaTemplating.bindable)(), _dec114 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec115 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec116 = (0, _aureliaTemplating.bindable)(), _dec111(_class61 = _dec112(_class61 = (_class62 = function () {
  function MdFileInput(element) {
    _classCallCheck(this, MdFileInput);

    _initDefineProp(this, 'mdCaption', _descriptor68, this);

    _initDefineProp(this, 'mdMultiple', _descriptor69, this);

    _initDefineProp(this, 'mdLabelValue', _descriptor70, this);

    _initDefineProp(this, 'disabled', _descriptor71, this);

    this.files = [];
    this._suspendUpdate = false;

    this.element = element;
    this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
  }

  MdFileInput.prototype.attached = function attached() {
    this.mdMultiple = getBooleanFromAttributeValue(this.mdMultiple);
    $(this.filePath).on('change', this.handleChangeFromNativeInput);
  };

  MdFileInput.prototype.detached = function detached() {
    $(this.element).off('change', this.handleChangeFromNativeInput);
  };

  MdFileInput.prototype.handleChangeFromNativeInput = function handleChangeFromNativeInput() {
    if (!this._suspendUpdate) {
      this._suspendUpdate = true;
      fireEvent(this.filePath, 'change', { files: this.files });
      fireMaterializeEvent(this.filePath, 'change', { files: this.files });
      this._suspendUpdate = false;
    }
  };

  return MdFileInput;
}(), (_descriptor68 = _applyDecoratedDescriptor(_class62.prototype, 'mdCaption', [_dec113], {
  enumerable: true,
  initializer: function initializer() {
    return 'File';
  }
}), _descriptor69 = _applyDecoratedDescriptor(_class62.prototype, 'mdMultiple', [_dec114], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor70 = _applyDecoratedDescriptor(_class62.prototype, 'mdLabelValue', [_dec115], {
  enumerable: true,
  initializer: null
}), _descriptor71 = _applyDecoratedDescriptor(_class62.prototype, 'disabled', [_dec116], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class62)) || _class61) || _class61);
var MdFooter = exports.MdFooter = (_dec117 = (0, _aureliaTemplating.customAttribute)('md-footer'), _dec118 = (0, _aureliaDependencyInjection.inject)(Element), _dec117(_class64 = _dec118(_class64 = function () {
  function MdFooter(element) {
    _classCallCheck(this, MdFooter);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdFooter.prototype.bind = function bind() {
    this.attributeManager.addClasses('page-footer');
  };

  MdFooter.prototype.unbind = function unbind() {
    this.attributeManager.removeClasses('page-footer');
  };

  return MdFooter;
}()) || _class64) || _class64);
var MdPrefix = exports.MdPrefix = (_dec119 = (0, _aureliaTemplating.customAttribute)('md-prefix'), _dec120 = (0, _aureliaDependencyInjection.inject)(Element), _dec119(_class65 = _dec120(_class65 = function () {
  function MdPrefix(element) {
    _classCallCheck(this, MdPrefix);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdPrefix.prototype.bind = function bind() {
    this.attributeManager.addClasses('prefix');
  };

  MdPrefix.prototype.unbind = function unbind() {
    this.attributeManager.removeClasses('prefix');
  };

  return MdPrefix;
}()) || _class65) || _class65);
var MdInputUpdateService = exports.MdInputUpdateService = (_dec121 = (0, _aureliaDependencyInjection.inject)(_aureliaTaskQueue.TaskQueue), _dec121(_class66 = function () {
  function MdInputUpdateService(taskQueue) {
    _classCallCheck(this, MdInputUpdateService);

    this._updateCalled = false;

    this.log = (0, _aureliaLogging.getLogger)('MdInputUpdateService');
    this.taskQueue = taskQueue;
  }

  MdInputUpdateService.prototype.materializeUpdate = function materializeUpdate() {
    this.log.debug('executing Materialize.updateTextFields');
    Materialize.updateTextFields();
    this._updateCalled = false;
  };

  MdInputUpdateService.prototype.update = function update() {
    this.log.debug('update called');
    if (!this._updateCalled) {
      this._updateCalled = true;
      this.taskQueue.queueTask(this.materializeUpdate.bind(this));
    }
  };

  return MdInputUpdateService;
}()) || _class66);
var MdInput = exports.MdInput = (_dec122 = (0, _aureliaTemplating.customElement)('md-input'), _dec123 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue, MdInputUpdateService), _dec124 = (0, _aureliaTemplating.bindable)(), _dec125 = (0, _aureliaTemplating.bindable)(), _dec126 = (0, _aureliaTemplating.bindable)(), _dec127 = (0, _aureliaTemplating.bindable)(), _dec128 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec129 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec130 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec131 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec132 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec133 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec134 = (0, _aureliaTemplating.bindable)(), _dec135 = (0, _aureliaTemplating.bindable)(), _dec136 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec122(_class68 = _dec123(_class68 = (_class69 = (_temp4 = _class70 = function () {
  function MdInput(element, taskQueue, updateService) {
    _classCallCheck(this, MdInput);

    _initDefineProp(this, 'mdLabel', _descriptor72, this);

    _initDefineProp(this, 'mdBlurOnEnter', _descriptor73, this);

    _initDefineProp(this, 'mdDisabled', _descriptor74, this);

    _initDefineProp(this, 'mdReadonly', _descriptor75, this);

    _initDefineProp(this, 'mdPlaceholder', _descriptor76, this);

    _initDefineProp(this, 'mdTextArea', _descriptor77, this);

    _initDefineProp(this, 'mdType', _descriptor78, this);

    _initDefineProp(this, 'mdStep', _descriptor79, this);

    _initDefineProp(this, 'mdValidate', _descriptor80, this);

    _initDefineProp(this, 'mdShowErrortext', _descriptor81, this);

    _initDefineProp(this, 'mdValidateError', _descriptor82, this);

    _initDefineProp(this, 'mdValidateSuccess', _descriptor83, this);

    _initDefineProp(this, 'mdValue', _descriptor84, this);

    this._suspendUpdate = false;

    this.element = element;
    this.taskQueue = taskQueue;
    this.controlId = 'md-input-' + MdInput.id++;
    this.updateService = updateService;
    this.blurOnEnter = this.blurOnEnter.bind(this);
  }

  MdInput.prototype.bind = function bind() {
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
    this.mdTextArea = getBooleanFromAttributeValue(this.mdTextArea);
    this.mdShowErrortext = getBooleanFromAttributeValue(this.mdShowErrortext);
    this.mdBlurOnEnter = getBooleanFromAttributeValue(this.mdBlurOnEnter);
  };

  MdInput.prototype.attached = function attached() {
    if (getBooleanFromAttributeValue(this.mdValidate)) {
      this.input.classList.add('validate');
    }
    if (this.mdValidateError) {
      this.label.setAttribute('data-error', this.mdValidateError);
    }
    if (this.mdValidateSuccess) {
      this.label.setAttribute('data-success', this.mdValidateSuccess);
    }
    if (this.mdPlaceholder) {
      this.input.setAttribute('placeholder', this.mdPlaceholder);
    }
    if (this.mdShowErrortext) {
      this.input.setAttribute('data-show-errortext', this.mdShowErrortext);
    }
    this.updateService.update();

    if (this.mdType === 'time') {
      $(this.input).siblings('label').addClass('active');
    }
    this.attachEventHandlers();
  };

  MdInput.prototype.detached = function detached() {
    this.detachEventHandlers();
  };

  MdInput.prototype.blur = function blur() {
    fireEvent(this.element, 'blur');
  };

  MdInput.prototype.focus = function focus() {
    this.input.focus();
    fireEvent(this.element, 'focus');
  };

  MdInput.prototype.mdValueChanged = function mdValueChanged() {
    if (!$(this.input).is(':focus')) {
      this.updateService.update();
    }
    if (this.mdTextArea) {
      $(this.input).trigger('autoresize');
    }
  };

  MdInput.prototype.attachEventHandlers = function attachEventHandlers() {
    if (this.mdBlurOnEnter) {
      this.element.addEventListener('keyup', this.blurOnEnter);
    }
  };

  MdInput.prototype.detachEventHandlers = function detachEventHandlers() {
    if (this.mdBlurOnEnter) {
      this.element.removeEventListener('keyup', this.blurOnEnter);
    }
  };

  MdInput.prototype.blurOnEnter = function blurOnEnter(e) {
    if (e.keyCode && e.keyCode === 13) {
      this.input.blur();
    }
  };

  return MdInput;
}(), _class70.id = 0, _temp4), (_descriptor72 = _applyDecoratedDescriptor(_class69.prototype, 'mdLabel', [_dec124], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor73 = _applyDecoratedDescriptor(_class69.prototype, 'mdBlurOnEnter', [_dec125], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor74 = _applyDecoratedDescriptor(_class69.prototype, 'mdDisabled', [_dec126], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor75 = _applyDecoratedDescriptor(_class69.prototype, 'mdReadonly', [_dec127], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor76 = _applyDecoratedDescriptor(_class69.prototype, 'mdPlaceholder', [_dec128], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor77 = _applyDecoratedDescriptor(_class69.prototype, 'mdTextArea', [_dec129], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor78 = _applyDecoratedDescriptor(_class69.prototype, 'mdType', [_dec130], {
  enumerable: true,
  initializer: function initializer() {
    return 'text';
  }
}), _descriptor79 = _applyDecoratedDescriptor(_class69.prototype, 'mdStep', [_dec131], {
  enumerable: true,
  initializer: function initializer() {
    return 'any';
  }
}), _descriptor80 = _applyDecoratedDescriptor(_class69.prototype, 'mdValidate', [_dec132], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor81 = _applyDecoratedDescriptor(_class69.prototype, 'mdShowErrortext', [_dec133], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor82 = _applyDecoratedDescriptor(_class69.prototype, 'mdValidateError', [_dec134], {
  enumerable: true,
  initializer: null
}), _descriptor83 = _applyDecoratedDescriptor(_class69.prototype, 'mdValidateSuccess', [_dec135], {
  enumerable: true,
  initializer: null
}), _descriptor84 = _applyDecoratedDescriptor(_class69.prototype, 'mdValue', [_dec136], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class69)) || _class68) || _class68);
var MdModalTrigger = exports.MdModalTrigger = (_dec137 = (0, _aureliaTemplating.customAttribute)('md-modal-trigger'), _dec138 = (0, _aureliaDependencyInjection.inject)(Element), _dec139 = (0, _aureliaTemplating.bindable)(), _dec137(_class71 = _dec138(_class71 = (_class72 = function () {
  function MdModalTrigger(element) {
    _classCallCheck(this, MdModalTrigger);

    _initDefineProp(this, 'dismissible', _descriptor85, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
    this.onComplete = this.onComplete.bind(this);
  }

  MdModalTrigger.prototype.attached = function attached() {
    this.attributeManager.addClasses('modal-trigger');
    $(this.element).leanModal({
      complete: this.onComplete,
      dismissible: getBooleanFromAttributeValue(this.dismissible)
    });
  };

  MdModalTrigger.prototype.detached = function detached() {
    this.attributeManager.removeClasses('modal-trigger');
  };

  MdModalTrigger.prototype.onComplete = function onComplete() {
    fireMaterializeEvent(this.element, 'modal-complete');
  };

  return MdModalTrigger;
}(), (_descriptor85 = _applyDecoratedDescriptor(_class72.prototype, 'dismissible', [_dec139], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class72)) || _class71) || _class71);
var MdModal = exports.MdModal = (_dec140 = (0, _aureliaTemplating.customAttribute)('md-modal'), _dec141 = (0, _aureliaDependencyInjection.inject)(Element), _dec142 = (0, _aureliaTemplating.bindable)(), _dec143 = (0, _aureliaTemplating.bindable)(), _dec144 = (0, _aureliaTemplating.bindable)(), _dec145 = (0, _aureliaTemplating.bindable)(), _dec146 = (0, _aureliaTemplating.bindable)(), _dec147 = (0, _aureliaTemplating.bindable)(), _dec140(_class74 = _dec141(_class74 = (_class75 = function () {
  function MdModal(element) {
    _classCallCheck(this, MdModal);

    _initDefineProp(this, 'dismissible', _descriptor86, this);

    _initDefineProp(this, 'opacity', _descriptor87, this);

    _initDefineProp(this, 'inDuration', _descriptor88, this);

    _initDefineProp(this, 'outDuration', _descriptor89, this);

    _initDefineProp(this, 'startingTop', _descriptor90, this);

    _initDefineProp(this, 'endingTop', _descriptor91, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-modal');
    this.attributeManager = new AttributeManager(this.element);
    this.onComplete = this.onComplete.bind(this);
    this.onReady = this.onReady.bind(this);
  }

  MdModal.prototype.attached = function attached() {
    var options = {
      complete: this.onComplete,
      dismissible: getBooleanFromAttributeValue(this.dismissible),
      endingTop: this.endingTop,
      inDuration: parseInt(this.inDuration, 10),
      opacity: parseFloat(this.opacity),
      outDuration: parseInt(this.outDuration, 10),
      ready: this.onReady,
      startingTop: this.startingTop
    };
    this.log.debug('modal options: ', options);
    this.attributeManager.addClasses('modal');
    $(this.element).modal(options);
  };

  MdModal.prototype.detached = function detached() {
    this.attributeManager.removeClasses('modal');
  };

  MdModal.prototype.onComplete = function onComplete() {
    fireMaterializeEvent(this.element, 'modal-complete');
  };

  MdModal.prototype.onReady = function onReady(modal, trigger) {
    fireMaterializeEvent(this.element, 'modal-ready', { modal: modal, trigger: trigger });
  };

  MdModal.prototype.open = function open() {
    $(this.element).modal('open');
  };

  MdModal.prototype.close = function close() {
    $(this.element).modal('close');
  };

  return MdModal;
}(), (_descriptor86 = _applyDecoratedDescriptor(_class75.prototype, 'dismissible', [_dec142], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor87 = _applyDecoratedDescriptor(_class75.prototype, 'opacity', [_dec143], {
  enumerable: true,
  initializer: function initializer() {
    return 0.5;
  }
}), _descriptor88 = _applyDecoratedDescriptor(_class75.prototype, 'inDuration', [_dec144], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor89 = _applyDecoratedDescriptor(_class75.prototype, 'outDuration', [_dec145], {
  enumerable: true,
  initializer: function initializer() {
    return 200;
  }
}), _descriptor90 = _applyDecoratedDescriptor(_class75.prototype, 'startingTop', [_dec146], {
  enumerable: true,
  initializer: function initializer() {
    return '4%';
  }
}), _descriptor91 = _applyDecoratedDescriptor(_class75.prototype, 'endingTop', [_dec147], {
  enumerable: true,
  initializer: function initializer() {
    return '10%';
  }
})), _class75)) || _class74) || _class74);
var MdNavbar = exports.MdNavbar = (_dec148 = (0, _aureliaTemplating.customElement)('md-navbar'), _dec149 = (0, _aureliaDependencyInjection.inject)(Element), _dec150 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec151 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec152 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec148(_class77 = _dec149(_class77 = (_class78 = function () {
  function MdNavbar(element) {
    _classCallCheck(this, MdNavbar);

    _initDefineProp(this, 'mdExtended', _descriptor92, this);

    _initDefineProp(this, 'mdFixed', _descriptor93, this);

    _initDefineProp(this, 'mdAutoHeight', _descriptor94, this);

    this.element = element;
  }

  MdNavbar.prototype.attached = function attached() {
    this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
    this.navAttributeManager = new AttributeManager(this.nav);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.addClasses('navbar-fixed');
    }
    if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
      this.navAttributeManager.addClasses('md-auto-height');
    }
    if (getBooleanFromAttributeValue(this.mdExtended)) {
      this.navAttributeManager.addClasses('nav-extended');
    }
  };

  MdNavbar.prototype.detached = function detached() {
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.removeClasses('navbar-fixed');
    }
    if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
      this.navAttributeManager.removeClasses('md-auto-height');
    }
    if (getBooleanFromAttributeValue(this.mdExtended)) {
      this.navAttributeManager.removeClasses('nav-extended');
    }
  };

  return MdNavbar;
}(), (_descriptor92 = _applyDecoratedDescriptor(_class78.prototype, 'mdExtended', [_dec150], {
  enumerable: true,
  initializer: null
}), _descriptor93 = _applyDecoratedDescriptor(_class78.prototype, 'mdFixed', [_dec151], {
  enumerable: true,
  initializer: null
}), _descriptor94 = _applyDecoratedDescriptor(_class78.prototype, 'mdAutoHeight', [_dec152], {
  enumerable: true,
  initializer: null
})), _class78)) || _class77) || _class77);
var MdPagination = exports.MdPagination = (_dec153 = (0, _aureliaTemplating.customElement)('md-pagination'), _dec154 = (0, _aureliaDependencyInjection.inject)(Element), _dec155 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec156 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec157 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec158 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec159 = (0, _aureliaTemplating.bindable)(), _dec160 = (0, _aureliaTemplating.bindable)(), _dec161 = (0, _aureliaTemplating.bindable)(), _dec153(_class80 = _dec154(_class80 = (_class81 = function () {
  function MdPagination(element) {
    _classCallCheck(this, MdPagination);

    _initDefineProp(this, 'mdActivePage', _descriptor95, this);

    _initDefineProp(this, 'mdPages', _descriptor96, this);

    _initDefineProp(this, 'mdVisiblePageLinks', _descriptor97, this);

    _initDefineProp(this, 'mdPageLinks', _descriptor98, this);

    _initDefineProp(this, 'mdShowFirstLast', _descriptor99, this);

    _initDefineProp(this, 'mdShowPrevNext', _descriptor100, this);

    _initDefineProp(this, 'mdShowPageLinks', _descriptor101, this);

    this.numberOfLinks = 15;
    this.pages = 5;

    this.element = element;
  }

  MdPagination.prototype.bind = function bind() {
    this.pages = parseInt(this.mdPages, 10);

    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.mdShowFirstLast = getBooleanFromAttributeValue(this.mdShowFirstLast);
    this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
    this.mdPageLinks = this.generatePageLinks();
  };

  MdPagination.prototype.setActivePage = function setActivePage(page) {
    this.mdActivePage = parseInt(page, 10);
    this.mdPageLinks = this.generatePageLinks();
    fireMaterializeEvent(this.element, 'page-changed', this.mdActivePage);
  };

  MdPagination.prototype.setFirstPage = function setFirstPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(1);
    }
  };

  MdPagination.prototype.setLastPage = function setLastPage() {
    if (this.mdActivePage < this.pages) {
      this.setActivePage(this.pages);
    }
  };

  MdPagination.prototype.setPreviousPage = function setPreviousPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(this.mdActivePage - 1);
    }
  };

  MdPagination.prototype.setNextPage = function setNextPage() {
    if (this.mdActivePage < this.pages) {
      this.setActivePage(this.mdActivePage + 1);
    }
  };

  MdPagination.prototype.mdPagesChanged = function mdPagesChanged() {
    this.pages = parseInt(this.mdPages, 10);
    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.setActivePage(1);
  };

  MdPagination.prototype.mdVisiblePageLinksChanged = function mdVisiblePageLinksChanged() {
    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.mdPageLinks = this.generatePageLinks();
  };

  MdPagination.prototype.generatePageLinks = function generatePageLinks() {
    var midPoint = parseInt(this.numberOfLinks / 2, 10);
    var start = Math.max(this.mdActivePage - midPoint, 0);

    if (start + midPoint * 2 > this.pages) start = this.pages - midPoint * 2;
    var end = Math.min(start + this.numberOfLinks, this.pages);

    var list = [];
    for (var i = start; i < end; i++) {
      list.push(i);
    }

    return list;
  };

  return MdPagination;
}(), (_descriptor95 = _applyDecoratedDescriptor(_class81.prototype, 'mdActivePage', [_dec155], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor96 = _applyDecoratedDescriptor(_class81.prototype, 'mdPages', [_dec156], {
  enumerable: true,
  initializer: function initializer() {
    return 5;
  }
}), _descriptor97 = _applyDecoratedDescriptor(_class81.prototype, 'mdVisiblePageLinks', [_dec157], {
  enumerable: true,
  initializer: function initializer() {
    return 15;
  }
}), _descriptor98 = _applyDecoratedDescriptor(_class81.prototype, 'mdPageLinks', [_dec158], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor99 = _applyDecoratedDescriptor(_class81.prototype, 'mdShowFirstLast', [_dec159], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor100 = _applyDecoratedDescriptor(_class81.prototype, 'mdShowPrevNext', [_dec160], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor101 = _applyDecoratedDescriptor(_class81.prototype, 'mdShowPageLinks', [_dec161], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class81)) || _class80) || _class80);
var MdParallax = exports.MdParallax = (_dec162 = (0, _aureliaTemplating.customAttribute)('md-parallax'), _dec163 = (0, _aureliaDependencyInjection.inject)(Element), _dec162(_class83 = _dec163(_class83 = function () {
  function MdParallax(element) {
    _classCallCheck(this, MdParallax);

    this.element = element;
  }

  MdParallax.prototype.attached = function attached() {
    $(this.element).parallax();
  };

  MdParallax.prototype.detached = function detached() {};

  return MdParallax;
}()) || _class83) || _class83);
var MdProgress = exports.MdProgress = (_dec164 = (0, _aureliaTemplating.customElement)('md-progress'), _dec165 = (0, _aureliaDependencyInjection.inject)(Element), _dec166 = (0, _aureliaTemplating.bindable)(), _dec167 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec168 = (0, _aureliaTemplating.bindable)(), _dec169 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec170 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec164(_class84 = _dec165(_class84 = (_class85 = function () {
  function MdProgress(element) {
    _classCallCheck(this, MdProgress);

    _initDefineProp(this, 'mdColor', _descriptor102, this);

    _initDefineProp(this, 'mdPixelSize', _descriptor103, this);

    _initDefineProp(this, 'mdSize', _descriptor104, this);

    _initDefineProp(this, 'mdType', _descriptor105, this);

    _initDefineProp(this, 'mdValue', _descriptor106, this);

    this.element = element;
  }

  MdProgress.prototype.bind = function bind() {};

  MdProgress.prototype.attached = function attached() {
    this.mdPixelSizeChanged(this.mdPixelSize);
  };

  MdProgress.prototype.mdSizeChanged = function mdSizeChanged(newValue) {
    this.mdPixelSize = null;
  };

  MdProgress.prototype.mdPixelSizeChanged = function mdPixelSizeChanged(newValue) {
    if (this.wrapper) {
      newValue = newValue === null || newValue === '' || isNaN(newValue) ? '' : newValue + 'px';
      this.wrapper.style.height = newValue;
      this.wrapper.style.width = newValue;
    }
  };

  return MdProgress;
}(), (_descriptor102 = _applyDecoratedDescriptor(_class85.prototype, 'mdColor', [_dec166], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor103 = _applyDecoratedDescriptor(_class85.prototype, 'mdPixelSize', [_dec167], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor104 = _applyDecoratedDescriptor(_class85.prototype, 'mdSize', [_dec168], {
  enumerable: true,
  initializer: function initializer() {
    return 'big';
  }
}), _descriptor105 = _applyDecoratedDescriptor(_class85.prototype, 'mdType', [_dec169], {
  enumerable: true,
  initializer: function initializer() {
    return 'linear';
  }
}), _descriptor106 = _applyDecoratedDescriptor(_class85.prototype, 'mdValue', [_dec170], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class85)) || _class84) || _class84);
var MdPushpin = exports.MdPushpin = (_dec171 = (0, _aureliaTemplating.customAttribute)('md-pushpin'), _dec172 = (0, _aureliaDependencyInjection.inject)(Element), _dec173 = (0, _aureliaTemplating.bindable)(), _dec174 = (0, _aureliaTemplating.bindable)(), _dec175 = (0, _aureliaTemplating.bindable)(), _dec171(_class87 = _dec172(_class87 = (_class88 = function () {
  function MdPushpin(element) {
    _classCallCheck(this, MdPushpin);

    _initDefineProp(this, 'bottom', _descriptor107, this);

    _initDefineProp(this, 'offset', _descriptor108, this);

    _initDefineProp(this, 'top', _descriptor109, this);

    this.element = element;
  }

  MdPushpin.prototype.attached = function attached() {
    $(this.element).pushpin({
      bottom: this.bottom === Infinity ? Infinity : parseInt(this.bottom, 10),
      offset: parseInt(this.offset, 10),
      top: parseInt(this.top, 10)
    });
  };

  MdPushpin.prototype.detached = function detached() {};

  return MdPushpin;
}(), (_descriptor107 = _applyDecoratedDescriptor(_class88.prototype, 'bottom', [_dec173], {
  enumerable: true,
  initializer: function initializer() {
    return Infinity;
  }
}), _descriptor108 = _applyDecoratedDescriptor(_class88.prototype, 'offset', [_dec174], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor109 = _applyDecoratedDescriptor(_class88.prototype, 'top', [_dec175], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class88)) || _class87) || _class87);
var MdRadio = exports.MdRadio = (_dec176 = (0, _aureliaTemplating.customElement)('md-radio'), _dec177 = (0, _aureliaDependencyInjection.inject)(Element), _dec178 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec179 = (0, _aureliaTemplating.bindable)(), _dec180 = (0, _aureliaTemplating.bindable)(), _dec181 = (0, _aureliaTemplating.bindable)(), _dec182 = (0, _aureliaTemplating.bindable)(), _dec183 = (0, _aureliaTemplating.bindable)(), _dec184 = (0, _aureliaTemplating.bindable)(), _dec176(_class90 = _dec177(_class90 = (_class91 = (_temp5 = _class92 = function () {
  function MdRadio(element) {
    _classCallCheck(this, MdRadio);

    _initDefineProp(this, 'mdChecked', _descriptor110, this);

    _initDefineProp(this, 'mdDisabled', _descriptor111, this);

    _initDefineProp(this, 'mdReadonly', _descriptor112, this);

    _initDefineProp(this, 'mdGap', _descriptor113, this);

    _initDefineProp(this, 'mdModel', _descriptor114, this);

    _initDefineProp(this, 'mdName', _descriptor115, this);

    _initDefineProp(this, 'mdValue', _descriptor116, this);

    this.element = element;
    this.controlId = 'md-radio-' + MdRadio.id++;
  }

  MdRadio.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.radio);
    if (getBooleanFromAttributeValue(this.mdGap)) {
      this.attributeManager.addClasses('with-gap');
    }
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.radio.disabled = true;
    }
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
  };

  MdRadio.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['with-gap', 'disabled']);
  };

  MdRadio.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    if (this.radio) {
      this.radio.disabled = !!newValue;
    }
  };

  return MdRadio;
}(), _class92.id = 0, _temp5), (_descriptor110 = _applyDecoratedDescriptor(_class91.prototype, 'mdChecked', [_dec178], {
  enumerable: true,
  initializer: null
}), _descriptor111 = _applyDecoratedDescriptor(_class91.prototype, 'mdDisabled', [_dec179], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor112 = _applyDecoratedDescriptor(_class91.prototype, 'mdReadonly', [_dec180], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor113 = _applyDecoratedDescriptor(_class91.prototype, 'mdGap', [_dec181], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor114 = _applyDecoratedDescriptor(_class91.prototype, 'mdModel', [_dec182], {
  enumerable: true,
  initializer: null
}), _descriptor115 = _applyDecoratedDescriptor(_class91.prototype, 'mdName', [_dec183], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor116 = _applyDecoratedDescriptor(_class91.prototype, 'mdValue', [_dec184], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class91)) || _class90) || _class90);
var MdRange = exports.MdRange = (_dec185 = (0, _aureliaTemplating.customElement)('md-range'), _dec186 = (0, _aureliaDependencyInjection.inject)(Element), _dec187 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec188 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec189 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec190 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec185(_class93 = _dec186(_class93 = (_class94 = function MdRange(element) {
  _classCallCheck(this, MdRange);

  _initDefineProp(this, 'mdMin', _descriptor117, this);

  _initDefineProp(this, 'mdMax', _descriptor118, this);

  _initDefineProp(this, 'mdStep', _descriptor119, this);

  _initDefineProp(this, 'mdValue', _descriptor120, this);

  this.element = element;
  this.log = (0, _aureliaLogging.getLogger)('md-range');
}, (_descriptor117 = _applyDecoratedDescriptor(_class94.prototype, 'mdMin', [_dec187], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor118 = _applyDecoratedDescriptor(_class94.prototype, 'mdMax', [_dec188], {
  enumerable: true,
  initializer: function initializer() {
    return 100;
  }
}), _descriptor119 = _applyDecoratedDescriptor(_class94.prototype, 'mdStep', [_dec189], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor120 = _applyDecoratedDescriptor(_class94.prototype, 'mdValue', [_dec190], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class94)) || _class93) || _class93);
var ScrollfirePatch = exports.ScrollfirePatch = (_temp6 = _class96 = function () {
  function ScrollfirePatch() {
    _classCallCheck(this, ScrollfirePatch);
  }

  ScrollfirePatch.prototype.patch = function patch() {
    if (!ScrollfirePatch.patched) {
      ScrollfirePatch.patched = true;

      window.Materialize.scrollFire = function (options) {
        var didScroll = false;
        window.addEventListener('scroll', function () {
          didScroll = true;
        });

        setInterval(function () {
          if (didScroll) {
            didScroll = false;

            var windowScroll = window.pageYOffset + window.innerHeight;
            for (var i = 0; i < options.length; i++) {
              var value = options[i];
              var selector = value.selector;
              var offset = value.offset;
              var callback = value.callback;

              var currentElement = document.querySelector(selector);
              if (currentElement !== null) {
                var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

                if (windowScroll > elementOffset + offset) {
                  if (value.done !== true) {
                    if (typeof callback === 'string') {
                      var callbackFunc = new Function(callback);
                      callbackFunc();
                    } else if (typeof callback === 'function') {
                      callback();
                    }
                    value.done = true;
                  }
                }
              }
            }
          }
        }, 100);
      };
    }
  };

  return ScrollfirePatch;
}(), _class96.patched = false, _temp6);
var MdScrollfireTarget = exports.MdScrollfireTarget = (_dec191 = (0, _aureliaTemplating.customAttribute)('md-scrollfire-target'), _dec192 = (0, _aureliaDependencyInjection.inject)(Element), _dec193 = (0, _aureliaTemplating.bindable)(), _dec194 = (0, _aureliaTemplating.bindable)(), _dec191(_class97 = _dec192(_class97 = (_class98 = function MdScrollfireTarget(element) {
  _classCallCheck(this, MdScrollfireTarget);

  _initDefineProp(this, 'callback', _descriptor121, this);

  _initDefineProp(this, 'offset', _descriptor122, this);

  this.element = element;
}, (_descriptor121 = _applyDecoratedDescriptor(_class98.prototype, 'callback', [_dec193], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor122 = _applyDecoratedDescriptor(_class98.prototype, 'offset', [_dec194], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class98)) || _class97) || _class97);
var MdScrollfire = exports.MdScrollfire = (_dec195 = (0, _aureliaTemplating.customAttribute)('md-scrollfire'), _dec196 = (0, _aureliaDependencyInjection.inject)(Element), _dec195(_class100 = _dec196(_class100 = function () {
  function MdScrollfire(element) {
    _classCallCheck(this, MdScrollfire);

    this.targetId = 0;

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-scrollfire');
  }

  MdScrollfire.prototype.attached = function attached() {
    var _this9 = this;

    var targets = $('[md-scrollfire-target]', this.element);
    if (targets.length > 0) {
      (function () {
        _this9.log.debug('targets', targets);
        var self = _this9;
        var options = [];
        targets.each(function (i, el) {
          var target = $(el);
          if (!target.attr('id')) {
            target.attr('id', 'md-scrollfire-target-' + self.targetId++);
          }
          options.push({
            selector: '#' + target.attr('id'),
            callback: target.get(0).au['md-scrollfire-target'].viewModel.callback,
            offset: parseInt(target.get(0).au['md-scrollfire-target'].viewModel.offset, 10)
          });
        });
        if (options.length > 0) {
          _this9.log.debug('configuring scrollFire with these options:', options);
          Materialize.scrollFire(options);
        }
      })();
    }
  };

  return MdScrollfire;
}()) || _class100) || _class100);
var MdScrollSpy = exports.MdScrollSpy = (_dec197 = (0, _aureliaTemplating.customAttribute)('md-scrollspy'), _dec198 = (0, _aureliaDependencyInjection.inject)(Element), _dec199 = (0, _aureliaTemplating.bindable)(), _dec197(_class102 = _dec198(_class102 = (_class103 = function () {
  function MdScrollSpy(element) {
    _classCallCheck(this, MdScrollSpy);

    _initDefineProp(this, 'target', _descriptor123, this);

    this.element = element;
  }

  MdScrollSpy.prototype.attached = function attached() {
    $(this.target, this.element).scrollSpy();
  };

  MdScrollSpy.prototype.detached = function detached() {};

  return MdScrollSpy;
}(), (_descriptor123 = _applyDecoratedDescriptor(_class103.prototype, 'target', [_dec199], {
  enumerable: true,
  initializer: null
})), _class103)) || _class102) || _class102);
var MdSelect = exports.MdSelect = (_dec200 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaBinding.BindingEngine, _aureliaTaskQueue.TaskQueue), _dec201 = (0, _aureliaTemplating.customAttribute)('md-select'), _dec202 = (0, _aureliaTemplating.bindable)(), _dec203 = (0, _aureliaTemplating.bindable)(), _dec204 = (0, _aureliaTemplating.bindable)(), _dec205 = (0, _aureliaTemplating.bindable)(), _dec200(_class105 = _dec201(_class105 = (_class106 = function () {
  function MdSelect(element, bindingEngine, taskQueue) {
    _classCallCheck(this, MdSelect);

    _initDefineProp(this, 'disabled', _descriptor124, this);

    _initDefineProp(this, 'enableOptionObserver', _descriptor125, this);

    _initDefineProp(this, 'label', _descriptor126, this);

    _initDefineProp(this, 'showErrortext', _descriptor127, this);

    this._suspendUpdate = false;
    this.subscriptions = [];
    this.input = null;
    this.dropdownMutationObserver = null;
    this.optionsMutationObserver = null;
    this._taskqueueRunning = false;

    this.element = element;
    this.taskQueue = taskQueue;
    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.log = (0, _aureliaLogging.getLogger)('md-select');
    this.bindingEngine = bindingEngine;
  }

  MdSelect.prototype.attached = function attached() {
    var _this10 = this;

    this.taskQueue.queueTask(function () {
      _this10.createMaterialSelect(false);

      var wrapper = $(_this10.element).parent('.select-wrapper');
      if (_this10.label && !wrapper.siblings("label").length) {
        var div = $('<div class="input-field"></div>');
        var va = _this10.element.attributes.getNamedItem('validate');
        if (va) {
          div.attr(va.name, va.label);
        }
        wrapper.wrap(div);
        $('<label class="md-select-label">' + _this10.label + '</label>').insertAfter(wrapper);
      }
    });
    this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'value').subscribe(this.handleChangeFromViewModel));

    $(this.element).on('change', this.handleChangeFromNativeSelect);
  };

  MdSelect.prototype.detached = function detached() {
    $(this.element).off('change', this.handleChangeFromNativeSelect);
    this.observeVisibleDropdownContent(false);
    this.observeOptions(false);
    this.dropdownMutationObserver = null;
    $(this.element).parent().children(".md-input-validation").remove();
    $(this.element).parent().children('ul#select-options-' + $(this.element).data('select-id')).remove();
    $(this.element).material_select('destroy');
    this.subscriptions.forEach(function (sub) {
      return sub.dispose();
    });
  };

  MdSelect.prototype.refresh = function refresh() {
    var _this11 = this;

    this.taskQueue.queueTask(function () {
      _this11.createMaterialSelect(true);
    });
  };

  MdSelect.prototype.labelChanged = function labelChanged(newValue) {
    this.updateLabel();
  };

  MdSelect.prototype.updateLabel = function updateLabel() {
    if (this.label) {
      var $label = $(this.element).parent('.select-wrapper').siblings('.md-select-label');
      $label.text(this.label);
    }
  };

  MdSelect.prototype.disabledChanged = function disabledChanged(newValue) {
    this.toggleControl(newValue);
  };

  MdSelect.prototype.showErrortextChanged = function showErrortextChanged() {
    this.setErrorTextAttribute();
  };

  MdSelect.prototype.setErrorTextAttribute = function setErrorTextAttribute() {
    var input = this.element.parentElement.querySelector('input.select-dropdown');
    if (!input) return;
    this.log.debug('showErrortextChanged: ' + this.showErrortext);
    input.setAttribute('data-show-errortext', getBooleanFromAttributeValue(this.showErrortext));
  };

  MdSelect.prototype.notifyBindingEngine = function notifyBindingEngine() {
    this.log.debug('selectedOptions changed', arguments);
  };

  MdSelect.prototype.handleChangeFromNativeSelect = function handleChangeFromNativeSelect() {
    if (!this._suspendUpdate) {
      this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
      this._suspendUpdate = true;
      fireEvent(this.element, 'change');
      this._suspendUpdate = false;
    }
  };

  MdSelect.prototype.handleChangeFromViewModel = function handleChangeFromViewModel(newValue) {
    this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
    if (!this._suspendUpdate) {
      this.createMaterialSelect(false);
    }
  };

  MdSelect.prototype.toggleControl = function toggleControl(disable) {
    var $wrapper = $(this.element).parent('.select-wrapper');
    if ($wrapper.length > 0) {
      if (disable) {
        $('.caret', $wrapper).addClass('disabled');
        $('input.select-dropdown', $wrapper).attr('disabled', 'disabled');
        $wrapper.attr('disabled', 'disabled');
      } else {
        $('.caret', $wrapper).removeClass('disabled');
        $('input.select-dropdown', $wrapper).attr('disabled', null);
        $wrapper.attr('disabled', null);
        $('.select-dropdown', $wrapper).dropdown({ 'hover': false, 'closeOnClick': false });
      }
    }
  };

  MdSelect.prototype.createMaterialSelect = function createMaterialSelect(destroy) {
    this.observeVisibleDropdownContent(false);
    this.observeOptions(false);
    if (destroy) {
      $(this.element).material_select('destroy');
    }
    $(this.element).material_select();
    this.toggleControl(this.disabled);
    this.observeVisibleDropdownContent(true);
    this.observeOptions(true);
    this.setErrorTextAttribute();
  };

  MdSelect.prototype.observeVisibleDropdownContent = function observeVisibleDropdownContent(attach) {
    var _this12 = this;

    if (attach) {
      if (!this.dropdownMutationObserver) {
        this.dropdownMutationObserver = _aureliaPal.DOM.createMutationObserver(function (mutations) {
          var isHidden = false;
          for (var _iterator2 = mutations, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref2 = _i2.value;
            }

            var mutation = _ref2;

            if (window.getComputedStyle(mutation.target).getPropertyValue('display') === 'none') {
              isHidden = true;
            }
          }
          if (isHidden) {
            _this12.dropdownMutationObserver.takeRecords();
            _this12.handleBlur();
          }
        });
      }
      this.dropdownMutationObserver.observe(this.element.parentElement.querySelector('.dropdown-content'), {
        attributes: true,
        attributeFilter: ['style']
      });
    } else {
      if (this.dropdownMutationObserver) {
        this.dropdownMutationObserver.disconnect();
        this.dropdownMutationObserver.takeRecords();
      }
    }
  };

  MdSelect.prototype.observeOptions = function observeOptions(attach) {
    var _this13 = this;

    if (getBooleanFromAttributeValue(this.enableOptionObserver)) {
      if (attach) {
        if (!this.optionsMutationObserver) {
          this.optionsMutationObserver = _aureliaPal.DOM.createMutationObserver(function (mutations) {
            _this13.refresh();
          });
        }
        this.optionsMutationObserver.observe(this.element, {
          characterData: true,
          subtree: true
        });
      } else {
        if (this.optionsMutationObserver) {
          this.optionsMutationObserver.disconnect();
          this.optionsMutationObserver.takeRecords();
        }
      }
    }
  };

  MdSelect.prototype.handleBlur = function handleBlur() {
    var _this14 = this;

    if (this._taskqueueRunning) return;
    this._taskqueueRunning = true;
    this.taskQueue.queueTask(function () {
      _this14.log.debug('fire blur event');
      fireEvent(_this14.element, 'blur');
      _this14._taskqueueRunning = false;
    });
  };

  return MdSelect;
}(), (_descriptor124 = _applyDecoratedDescriptor(_class106.prototype, 'disabled', [_dec202], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor125 = _applyDecoratedDescriptor(_class106.prototype, 'enableOptionObserver', [_dec203], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor126 = _applyDecoratedDescriptor(_class106.prototype, 'label', [_dec204], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor127 = _applyDecoratedDescriptor(_class106.prototype, 'showErrortext', [_dec205], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class106)) || _class105) || _class105);
var MdSidenavCollapse = exports.MdSidenavCollapse = (_dec206 = (0, _aureliaTemplating.customAttribute)('md-sidenav-collapse'), _dec207 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaBinding.ObserverLocator), _dec208 = (0, _aureliaTemplating.bindable)(), _dec206(_class108 = _dec207(_class108 = (_class109 = function () {
  function MdSidenavCollapse(element, observerLocator) {
    _classCallCheck(this, MdSidenavCollapse);

    _initDefineProp(this, 'ref', _descriptor128, this);

    this.element = element;
    this.observerLocator = observerLocator;
    this.log = (0, _aureliaLogging.getLogger)('md-sidenav-collapse');
  }

  MdSidenavCollapse.prototype.attached = function attached() {
    var _this15 = this;

    this.ref.whenAttached.then(function () {

      var closeOnClick = _this15.ref.mdFixed && window.innerWidth > 992 ? false : getBooleanFromAttributeValue(_this15.ref.mdCloseOnClick);

      _this15.element.setAttribute('data-activates', _this15.ref.controlId);
      var sideNavConfig = {
        edge: _this15.ref.mdEdge || 'left',

        closeOnClick: closeOnClick,
        menuWidth: parseInt(_this15.ref.mdWidth, 10)
      };

      $(_this15.element).sideNav(sideNavConfig);
    });
  };

  MdSidenavCollapse.prototype.detached = function detached() {};

  MdSidenavCollapse.prototype.show = function show() {
    $(this.element).sideNav('show');
  };

  MdSidenavCollapse.prototype.hide = function hide() {
    $(this.element).sideNav('hide');
  };

  return MdSidenavCollapse;
}(), (_descriptor128 = _applyDecoratedDescriptor(_class109.prototype, 'ref', [_dec208], {
  enumerable: true,
  initializer: null
})), _class109)) || _class108) || _class108);
var MdSidenav = exports.MdSidenav = (_dec209 = (0, _aureliaTemplating.customElement)('md-sidenav'), _dec210 = (0, _aureliaDependencyInjection.inject)(Element), _dec211 = (0, _aureliaTemplating.bindable)(), _dec212 = (0, _aureliaTemplating.bindable)(), _dec213 = (0, _aureliaTemplating.bindable)(), _dec214 = (0, _aureliaTemplating.bindable)(), _dec209(_class111 = _dec210(_class111 = (_class112 = (_temp7 = _class113 = function () {
  function MdSidenav(element) {
    var _this16 = this;

    _classCallCheck(this, MdSidenav);

    _initDefineProp(this, 'mdCloseOnClick', _descriptor129, this);

    _initDefineProp(this, 'mdEdge', _descriptor130, this);

    _initDefineProp(this, 'mdFixed', _descriptor131, this);

    _initDefineProp(this, 'mdWidth', _descriptor132, this);

    this.element = element;
    this.controlId = 'md-sidenav-' + MdSidenav.id++;
    this.log = (0, _aureliaLogging.getLogger)('md-sidenav');
    this.whenAttached = new Promise(function (resolve, reject) {
      _this16.attachedResolver = resolve;
    });
  }

  MdSidenav.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.sidenav);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.attributeManager.addClasses('fixed');
      if (this.mdEdge === 'right') {
        this.attributeManager.addClasses('right-aligned');
      }
    }

    this.attachedResolver();
  };

  MdSidenav.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['fixed', 'right-aligned']);
  };

  MdSidenav.prototype.mdFixedChanged = function mdFixedChanged(newValue) {
    if (this.attributeManager) {
      if (getBooleanFromAttributeValue(newValue)) {
        this.attributeManager.addClasses('fixed');
      } else {
        this.attributeManager.removeClasses('fixed');
      }
    }
  };

  return MdSidenav;
}(), _class113.id = 0, _temp7), (_descriptor129 = _applyDecoratedDescriptor(_class112.prototype, 'mdCloseOnClick', [_dec211], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor130 = _applyDecoratedDescriptor(_class112.prototype, 'mdEdge', [_dec212], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor131 = _applyDecoratedDescriptor(_class112.prototype, 'mdFixed', [_dec213], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor132 = _applyDecoratedDescriptor(_class112.prototype, 'mdWidth', [_dec214], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
})), _class112)) || _class111) || _class111);
var MdSlider = exports.MdSlider = (_dec215 = (0, _aureliaTemplating.customElement)('md-slider'), _dec216 = (0, _aureliaDependencyInjection.inject)(Element), _dec217 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec218 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec219 = (0, _aureliaTemplating.bindable)(), _dec220 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec221 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec215(_class114 = _dec216(_class114 = (_class115 = function () {
  function MdSlider(element) {
    _classCallCheck(this, MdSlider);

    _initDefineProp(this, 'mdFillContainer', _descriptor133, this);

    _initDefineProp(this, 'mdHeight', _descriptor134, this);

    _initDefineProp(this, 'mdIndicators', _descriptor135, this);

    _initDefineProp(this, 'mdInterval', _descriptor136, this);

    _initDefineProp(this, 'mdTransition', _descriptor137, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-slider');
  }

  MdSlider.prototype.attached = function attached() {
    if (getBooleanFromAttributeValue(this.mdFillContainer)) {
      this.element.classList.add('fullscreen');
    }
    this.refresh();
  };

  MdSlider.prototype.pause = function pause() {
    $(this.element).slider('pause');
  };

  MdSlider.prototype.start = function start() {
    $(this.element).slider('start');
  };

  MdSlider.prototype.next = function next() {
    $(this.element).slider('next');
  };

  MdSlider.prototype.prev = function prev() {
    $(this.element).slider('prev');
  };

  MdSlider.prototype.refresh = function refresh() {
    var options = {
      height: parseInt(this.mdHeight, 10),
      indicators: getBooleanFromAttributeValue(this.mdIndicators),
      interval: parseInt(this.mdInterval, 10),
      transition: parseInt(this.mdTransition, 10)
    };
    this.log.debug('refreshing slider, params:', options);
    $(this.element).slider(options);
  };

  MdSlider.prototype.mdIndicatorsChanged = function mdIndicatorsChanged() {
    this.refresh();
  };

  return MdSlider;
}(), (_descriptor133 = _applyDecoratedDescriptor(_class115.prototype, 'mdFillContainer', [_dec217], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor134 = _applyDecoratedDescriptor(_class115.prototype, 'mdHeight', [_dec218], {
  enumerable: true,
  initializer: function initializer() {
    return 400;
  }
}), _descriptor135 = _applyDecoratedDescriptor(_class115.prototype, 'mdIndicators', [_dec219], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor136 = _applyDecoratedDescriptor(_class115.prototype, 'mdInterval', [_dec220], {
  enumerable: true,
  initializer: function initializer() {
    return 6000;
  }
}), _descriptor137 = _applyDecoratedDescriptor(_class115.prototype, 'mdTransition', [_dec221], {
  enumerable: true,
  initializer: function initializer() {
    return 500;
  }
})), _class115)) || _class114) || _class114);
var MdSwitch = exports.MdSwitch = (_dec222 = (0, _aureliaTemplating.customElement)('md-switch'), _dec223 = (0, _aureliaDependencyInjection.inject)(Element), _dec224 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec225 = (0, _aureliaTemplating.bindable)(), _dec226 = (0, _aureliaTemplating.bindable)(), _dec227 = (0, _aureliaTemplating.bindable)(), _dec228 = (0, _aureliaTemplating.bindable)(), _dec222(_class117 = _dec223(_class117 = (_class118 = function () {
  function MdSwitch(element) {
    _classCallCheck(this, MdSwitch);

    _initDefineProp(this, 'mdChecked', _descriptor138, this);

    _initDefineProp(this, 'mdDisabled', _descriptor139, this);

    _initDefineProp(this, 'mdReadonly', _descriptor140, this);

    _initDefineProp(this, 'mdLabelOff', _descriptor141, this);

    _initDefineProp(this, 'mdLabelOn', _descriptor142, this);

    this.element = element;
    this.handleChange = this.handleChange.bind(this);
  }

  MdSwitch.prototype.attached = function attached() {
    this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.checkbox.disabled = true;
    }
    this.checkbox.addEventListener('change', this.handleChange);
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
  };

  MdSwitch.prototype.detached = function detached() {
    this.checkbox.removeEventListener('change', this.handleChange);
  };

  MdSwitch.prototype.handleChange = function handleChange() {
    this.mdChecked = this.checkbox.checked;
    fireEvent(this.element, 'blur');
  };

  MdSwitch.prototype.blur = function blur() {
    fireEvent(this.element, 'blur');
  };

  MdSwitch.prototype.mdCheckedChanged = function mdCheckedChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.checked = !!newValue;
    }
  };

  MdSwitch.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.disabled = !!newValue;
    }
  };

  return MdSwitch;
}(), (_descriptor138 = _applyDecoratedDescriptor(_class118.prototype, 'mdChecked', [_dec224], {
  enumerable: true,
  initializer: null
}), _descriptor139 = _applyDecoratedDescriptor(_class118.prototype, 'mdDisabled', [_dec225], {
  enumerable: true,
  initializer: null
}), _descriptor140 = _applyDecoratedDescriptor(_class118.prototype, 'mdReadonly', [_dec226], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor141 = _applyDecoratedDescriptor(_class118.prototype, 'mdLabelOff', [_dec227], {
  enumerable: true,
  initializer: function initializer() {
    return 'Off';
  }
}), _descriptor142 = _applyDecoratedDescriptor(_class118.prototype, 'mdLabelOn', [_dec228], {
  enumerable: true,
  initializer: function initializer() {
    return 'On';
  }
})), _class118)) || _class117) || _class117);
var MdTabs = exports.MdTabs = (_dec229 = (0, _aureliaTemplating.customAttribute)('md-tabs'), _dec230 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue), _dec231 = (0, _aureliaTemplating.bindable)(), _dec232 = (0, _aureliaTemplating.bindable)(), _dec233 = (0, _aureliaTemplating.bindable)(), _dec234 = (0, _aureliaTemplating.bindable)(), _dec235 = (0, _aureliaTemplating.bindable)(), _dec229(_class120 = _dec230(_class120 = (_class121 = function () {
  function MdTabs(element, taskQueue) {
    _classCallCheck(this, MdTabs);

    _initDefineProp(this, 'fixed', _descriptor143, this);

    _initDefineProp(this, 'onShow', _descriptor144, this);

    _initDefineProp(this, 'responsiveThreshold', _descriptor145, this);

    _initDefineProp(this, 'swipeable', _descriptor146, this);

    _initDefineProp(this, 'transparent', _descriptor147, this);

    this.element = element;
    this.taskQueue = taskQueue;
    this.fireTabSelectedEvent = this.fireTabSelectedEvent.bind(this);
    this.attributeManager = new AttributeManager(this.element);
    this.tabAttributeManagers = [];
  }

  MdTabs.prototype.attached = function attached() {
    var _this17 = this;

    this.attributeManager.addClasses('tabs');

    var children = this.element.querySelectorAll('li');
    [].forEach.call(children, function (child) {
      var setter = new AttributeManager(child);
      setter.addClasses(['tab', 'primary-text']);
      _this17.tabAttributeManagers.push(setter);
    });

    var self = this;
    $(this.element).tabs({
      onShow: function onShow(jQueryElement) {
        if (self.onShow) {
          self.onShow({ element: jQueryElement });
        }
      },
      swipeable: getBooleanFromAttributeValue(this.swipeable),
      responsiveThreshold: this.responsiveThreshold
    });
    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.addEventListener('click', _this17.fireTabSelectedEvent);
    });
  };

  MdTabs.prototype.detached = function detached() {
    var _this18 = this;

    this.attributeManager.removeClasses('tabs');

    this.tabAttributeManagers.forEach(function (setter) {
      setter.removeClasses('tab');
    });
    this.tabAttributeManagers = [];
    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.removeEventListener('click', _this18.fireTabSelectedEvent);
    });
  };

  MdTabs.prototype.refresh = function refresh() {
    var _this19 = this;

    this.taskQueue.queueTask(function () {
      var hrefs = [];
      $('li a', _this19.element).each(function (i, tab) {
        $(tab).parent().addClass('tab');
        hrefs.push($(tab).attr('href'));
      });
      $(hrefs).each(function (i, tab) {
        if (_this19.selectedTab.index != i) {
          $(tab).hide();
        }
      });
      _this19.taskQueue.queueTask(function () {
        $(window).trigger('resize');
      });
    });
  };

  MdTabs.prototype.fixedChanged = function fixedChanged(newValue) {
    if (newValue) {
      this.attributeManager.addClasses('tabs-fixed-width');
    } else {
      this.attributeManager.removeClasses('tabs-fixed-width');
    }
  };

  MdTabs.prototype.transparentChanged = function transparentChanged(newValue) {
    if (newValue) {
      this.attributeManager.addClasses('tabs-transparent');
    } else {
      this.attributeManager.removeClasses('tabs-transparent');
    }
  };

  MdTabs.prototype.fireTabSelectedEvent = function fireTabSelectedEvent(e) {
    var href = e.target.getAttribute('href');
    fireMaterializeEvent(this.element, 'selected', href);
  };

  MdTabs.prototype.selectTab = function selectTab(id) {
    $(this.element).tabs('select_tab', id);
    this.fireTabSelectedEvent({
      target: { getAttribute: function getAttribute() {
          return '#' + id;
        } }
    });
  };

  _createClass(MdTabs, [{
    key: 'selectedTab',
    get: function get() {
      var children = this.element.querySelectorAll('li.tab a');
      var index = -1;
      var href = null;
      [].forEach.call(children, function (a, i) {
        if (a.classList.contains('active')) {
          index = i;
          href = a.href;
          return;
        }
      });
      return { href: href, index: index };
    }
  }]);

  return MdTabs;
}(), (_descriptor143 = _applyDecoratedDescriptor(_class121.prototype, 'fixed', [_dec231], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor144 = _applyDecoratedDescriptor(_class121.prototype, 'onShow', [_dec232], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor145 = _applyDecoratedDescriptor(_class121.prototype, 'responsiveThreshold', [_dec233], {
  enumerable: true,
  initializer: function initializer() {
    return Infinity;
  }
}), _descriptor146 = _applyDecoratedDescriptor(_class121.prototype, 'swipeable', [_dec234], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor147 = _applyDecoratedDescriptor(_class121.prototype, 'transparent', [_dec235], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class121)) || _class120) || _class120);
var MdTapTarget = exports.MdTapTarget = (_dec236 = (0, _aureliaTemplating.customElement)('md-tap-target'), _dec237 = (0, _aureliaDependencyInjection.inject)(Element), _dec238 = (0, _aureliaTemplating.bindable)(), _dec236(_class123 = _dec237(_class123 = (_class124 = (_temp8 = _class125 = function () {
  function MdTapTarget(element) {
    _classCallCheck(this, MdTapTarget);

    _initDefineProp(this, 'mdRef', _descriptor148, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-tap-target');
  }

  MdTapTarget.prototype.bind = function bind() {
    if (!this.mdRef) {
      throw new Error('md-tap-target needs a referenced element');
    } else {
      var id = this.mdRef.getAttribute('id');
      if (!id) {
        id = 'md-tap-target-' + MdTapTarget.controlId++;
        this.mdRef.setAttribute('id', id);
      }
      this.element.setAttribute('data-activates', id);
    }
  };

  MdTapTarget.prototype.open = function open() {
    $(this.element).tapTarget('open');
  };

  MdTapTarget.prototype.close = function close() {
    $(this.element).tapTarget('close');
  };

  return MdTapTarget;
}(), _class125.controlId = 0, _temp8), (_descriptor148 = _applyDecoratedDescriptor(_class124.prototype, 'mdRef', [_dec238], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class124)) || _class123) || _class123);

var MdToastService = exports.MdToastService = function () {
  function MdToastService() {
    _classCallCheck(this, MdToastService);
  }

  MdToastService.prototype.show = function show(message, displayLength, className) {
    return new Promise(function (resolve, reject) {
      Materialize.toast(message, displayLength, className, function () {
        resolve();
      });
    });
  };

  return MdToastService;
}();

var MdTooltip = exports.MdTooltip = (_dec239 = (0, _aureliaTemplating.customAttribute)('md-tooltip'), _dec240 = (0, _aureliaDependencyInjection.inject)(Element), _dec241 = (0, _aureliaTemplating.bindable)(), _dec242 = (0, _aureliaTemplating.bindable)(), _dec243 = (0, _aureliaTemplating.bindable)(), _dec244 = (0, _aureliaTemplating.bindable)(), _dec239(_class126 = _dec240(_class126 = (_class127 = function () {
  function MdTooltip(element) {
    _classCallCheck(this, MdTooltip);

    _initDefineProp(this, 'position', _descriptor149, this);

    _initDefineProp(this, 'delay', _descriptor150, this);

    _initDefineProp(this, 'html', _descriptor151, this);

    _initDefineProp(this, 'text', _descriptor152, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdTooltip.prototype.bind = function bind() {
    this.html = getBooleanFromAttributeValue(this.html);
  };

  MdTooltip.prototype.attached = function attached() {
    this.attributeManager.addClasses('tooltipped');
    this.attributeManager.addAttributes({ 'data-position': this.position, 'data-tooltip': this.text });
    this.initTooltip();
  };

  MdTooltip.prototype.detached = function detached() {
    $(this.element).tooltip('remove');
    this.attributeManager.removeClasses('tooltipped');
    this.attributeManager.removeAttributes(['data-position', 'data-tooltip']);
  };

  MdTooltip.prototype.textChanged = function textChanged() {
    this.attributeManager.addAttributes({ 'data-tooltip': this.text });
    this.initTooltip();
  };

  MdTooltip.prototype.initTooltip = function initTooltip() {
    $(this.element).tooltip('remove');
    $(this.element).tooltip({
      delay: parseInt(this.delay, 10),
      html: this.html
    });
  };

  return MdTooltip;
}(), (_descriptor149 = _applyDecoratedDescriptor(_class127.prototype, 'position', [_dec241], {
  enumerable: true,
  initializer: function initializer() {
    return 'bottom';
  }
}), _descriptor150 = _applyDecoratedDescriptor(_class127.prototype, 'delay', [_dec242], {
  enumerable: true,
  initializer: function initializer() {
    return 50;
  }
}), _descriptor151 = _applyDecoratedDescriptor(_class127.prototype, 'html', [_dec243], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor152 = _applyDecoratedDescriptor(_class127.prototype, 'text', [_dec244], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class127)) || _class126) || _class126);
var MdFadeinImage = exports.MdFadeinImage = (_dec245 = (0, _aureliaTemplating.customAttribute)('md-fadein-image'), _dec246 = (0, _aureliaDependencyInjection.inject)(Element), _dec247 = (0, _aureliaTemplating.bindable)(), _dec245(_class129 = _dec246(_class129 = (_class130 = function () {
  function MdFadeinImage(element) {
    _classCallCheck(this, MdFadeinImage);

    _initDefineProp(this, 'ref', _descriptor153, this);

    this.element = element;
    this.fadeInImage = this.fadeInImage.bind(this);
    this.log = (0, _aureliaLogging.getLogger)('md-fadein-image');
  }

  MdFadeinImage.prototype.attached = function attached() {
    this.element.addEventListener('click', this.fadeInImage);
    this.ensureOpacity();
  };

  MdFadeinImage.prototype.detached = function detached() {
    this.element.removeEventListener('click', this.fadeInImage);
  };

  MdFadeinImage.prototype.fadeInImage = function fadeInImage() {
    Materialize.fadeInImage($(this.ref));
  };

  MdFadeinImage.prototype.ensureOpacity = function ensureOpacity() {
    var opacity = window.getComputedStyle(this.ref).opacity;
    if (opacity !== 0) {
      this.ref.style.opacity = 0;
    }
  };

  return MdFadeinImage;
}(), (_descriptor153 = _applyDecoratedDescriptor(_class130.prototype, 'ref', [_dec247], {
  enumerable: true,
  initializer: null
})), _class130)) || _class129) || _class129);
var MdStaggeredList = exports.MdStaggeredList = (_dec248 = (0, _aureliaTemplating.customAttribute)('md-staggered-list'), _dec249 = (0, _aureliaDependencyInjection.inject)(Element), _dec250 = (0, _aureliaTemplating.bindable)(), _dec248(_class132 = _dec249(_class132 = (_class133 = function () {
  function MdStaggeredList(element) {
    _classCallCheck(this, MdStaggeredList);

    _initDefineProp(this, 'ref', _descriptor154, this);

    this.element = element;
    this.staggerList = this.staggerList.bind(this);
    this.log = (0, _aureliaLogging.getLogger)('md-staggered-list');
  }

  MdStaggeredList.prototype.attached = function attached() {
    this.element.addEventListener('click', this.staggerList);
    this.ensureOpacity();
  };

  MdStaggeredList.prototype.detached = function detached() {
    this.element.removeEventListener('click', this.staggerList);
  };

  MdStaggeredList.prototype.staggerList = function staggerList() {
    Materialize.showStaggeredList($(this.ref));
  };

  MdStaggeredList.prototype.ensureOpacity = function ensureOpacity() {
    var items = this.ref.querySelectorAll('li');
    [].forEach.call(items, function (item) {
      var opacity = window.getComputedStyle(item).opacity;
      if (opacity !== 0) {
        item.style.opacity = 0;
      }
    });
  };

  return MdStaggeredList;
}(), (_descriptor154 = _applyDecoratedDescriptor(_class133.prototype, 'ref', [_dec250], {
  enumerable: true,
  initializer: null
})), _class133)) || _class132) || _class132);

var MaterializeFormValidationRenderer = exports.MaterializeFormValidationRenderer = function () {
  function MaterializeFormValidationRenderer() {
    _classCallCheck(this, MaterializeFormValidationRenderer);

    this.className = 'md-input-validation';
    this.classNameFirst = 'md-input-validation-first';
  }

  MaterializeFormValidationRenderer.prototype.render = function render(instruction) {
    for (var _iterator3 = instruction.unrender, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref4 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref4 = _i3.value;
      }

      var _ref7 = _ref4;
      var result = _ref7.result,
          elements = _ref7.elements;

      for (var _iterator5 = elements, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
        var _ref8;

        if (_isArray5) {
          if (_i5 >= _iterator5.length) break;
          _ref8 = _iterator5[_i5++];
        } else {
          _i5 = _iterator5.next();
          if (_i5.done) break;
          _ref8 = _i5.value;
        }

        var element = _ref8;

        this.remove(element, result);
        this.underlineInput(element, false);
      }
    }
    for (var _iterator4 = instruction.render, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref6;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref6 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref6 = _i4.value;
      }

      var _ref9 = _ref6;
      var result = _ref9.result,
          elements = _ref9.elements;

      for (var _iterator6 = elements, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
        var _ref10;

        if (_isArray6) {
          if (_i6 >= _iterator6.length) break;
          _ref10 = _iterator6[_i6++];
        } else {
          _i6 = _iterator6.next();
          if (_i6.done) break;
          _ref10 = _i6.value;
        }

        var _element = _ref10;

        this.add(_element, result);
        this.underlineInput(_element, true);
      }
    }
  };

  MaterializeFormValidationRenderer.prototype.underlineInput = function underlineInput(element, render) {
    var input = void 0;
    var validationContainer = void 0;
    switch (element.tagName) {
      case 'MD-INPUT':
        {
          input = element.querySelector('input') || element.querySelector('textarea');
          validationContainer = element;
          break;
        }
      case 'SELECT':
        {
          var selectWrapper = element.closest('.select-wrapper');
          if (selectWrapper) {
            input = selectWrapper.querySelector('input');
          }
          validationContainer = selectWrapper;
          break;
        }
      case 'INPUT':
        {
          input = element;
          validationContainer = element.parentElement;
          break;
        }
      default:
        break;
    }
    if (input) {
      if (render) {
        if (validationContainer.querySelectorAll('.' + this.className).length === 0) {
          input.classList.remove('invalid');
          input.classList.add('valid');
        } else {
          input.classList.remove('valid');
          input.classList.add('invalid');
        }
      } else {
        input.classList.remove('valid');
        input.classList.remove('invalid');
      }
    }
  };

  MaterializeFormValidationRenderer.prototype.add = function add(element, result) {
    if (result.valid) {
      return;
    }
    switch (element.tagName) {
      case 'MD-INPUT':
        {
          var label = element.querySelector('label');
          var input = element.querySelector('input') || element.querySelector('textarea');
          if (label) {
            label.removeAttribute('data-error');
          }
          if (input) {
            result.target = input;
            if (input.hasAttribute('data-show-errortext')) {
              this.addMessage(element, result);
            }
          }
          break;
        }
      case 'SELECT':
        {
          var selectWrapper = element.closest('.select-wrapper');
          if (!selectWrapper) {
            return;
          }
          var _input = selectWrapper.querySelector('input');
          if (_input) {
            result.target = _input;
            if (!(_input.hasAttribute('data-show-errortext') && _input.getAttribute('data-show-errortext') === 'false')) {
              this.addMessage(selectWrapper, result);
            }
          }
          break;
        }
      case 'INPUT':
        {
          if (element.hasAttribute('md-datepicker')) {
            if (!(element.hasAttribute('data-show-errortext') && element.getAttribute('data-show-errortext') === 'false')) {
              this.addMessage(element.parentNode, result);
            }
          }
          break;
        }
      default:
        break;
    }
  };

  MaterializeFormValidationRenderer.prototype.remove = function remove(element, result) {
    if (result.valid) {
      return;
    }
    switch (element.tagName) {
      case 'MD-INPUT':
        {
          this.removeMessage(element, result);
          break;
        }
      case 'SELECT':
        {
          var selectWrapper = element.closest('.select-wrapper');
          if (!selectWrapper) {
            return;
          }

          if ($(selectWrapper.parentElement).children().hasClass('md-input-validation')) {
            this.removeMessage(selectWrapper.parentElement, result);
          } else {
            this.removeMessage(selectWrapper, result);
          }
          break;
        }
      case 'INPUT':
        {
          if (element.hasAttribute('md-datepicker')) {
            this.removeMessage(element.parentNode, result);
          }
          break;
        }
      default:
        break;
    }
  };

  MaterializeFormValidationRenderer.prototype.addMessage = function addMessage(element, result) {
    var message = document.createElement('div');
    message.id = 'md-input-validation-' + result.id;
    message.textContent = result.message;
    message.className = this.className;
    if (element.querySelectorAll('.' + this.className).length === 0) {
      message.className += ' ' + this.classNameFirst;
    }
    message.style.opacity = 0;
    element.appendChild(message, element.nextSibling);
    window.getComputedStyle(message).opacity;
    message.style.opacity = 1;
  };

  MaterializeFormValidationRenderer.prototype.removeMessage = function removeMessage(element, result) {
    var message = element.querySelector('#md-input-validation-' + result.id);
    if (message) {
      element.removeChild(message);
    }
  };

  return MaterializeFormValidationRenderer;
}();

var MdWaves = exports.MdWaves = (_dec251 = (0, _aureliaTemplating.customAttribute)('md-waves'), _dec252 = (0, _aureliaDependencyInjection.inject)(Element, ConfigBuilder), _dec253 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec254 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec255 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec251(_class136 = _dec252(_class136 = (_class137 = function () {
  function MdWaves(element, configBuilder) {
    _classCallCheck(this, MdWaves);

    _initDefineProp(this, 'block', _descriptor155, this);

    _initDefineProp(this, 'circle', _descriptor156, this);

    _initDefineProp(this, 'color', _descriptor157, this);

    this.element = element;
    this.configBuilder = configBuilder;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdWaves.prototype.attached = function attached() {
    var classes = ['waves-effect'];
    if (getBooleanFromAttributeValue(this.block)) {
      classes.push('waves-block');
    }
    if (getBooleanFromAttributeValue(this.circle)) {
      classes.push('waves-circle');
    }
    if (this.color) {
      classes.push('waves-' + this.color);
    }

    this.attributeManager.addClasses(classes);
    if (!this.configBuilder.noWavesAttach) {
      Waves.attach(this.element);
    }
  };

  MdWaves.prototype.detached = function detached() {
    var classes = ['waves-effect', 'waves-block'];
    if (this.color) {
      classes.push('waves-' + this.color);
    }

    this.attributeManager.removeClasses(classes);
  };

  return MdWaves;
}(), (_descriptor155 = _applyDecoratedDescriptor(_class137.prototype, 'block', [_dec253], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor156 = _applyDecoratedDescriptor(_class137.prototype, 'circle', [_dec254], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor157 = _applyDecoratedDescriptor(_class137.prototype, 'color', [_dec255], {
  enumerable: true,
  initializer: null
})), _class137)) || _class136) || _class136);