/**
 * An endpoint that offers functionality for the class booking wizard on the "Class and Location" page.
 *
 * When using this endpoint, take into account the {@link Wl_Book_Process_ProcessSpaSid.QUIZ} step.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Info_Info54Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,uid,id_mode";

  /**
   * Week days available for recurring booking. Constants of {@link ADateWeekSid} class.
   *
   * `null` if recurring booking is not available.
   *
   * @get result
   * @type {?number[]}
   */
  this.a_day_available = null;

  /**
   * The keys of users' activity.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Info_Info54Model_a_repeat
   * @property {*} a_week Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   * Empty if appointment must not repeat weekly.
   * @property {*} dl_end Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   * @property {*} i_occurrence Number of occurrences after that appointment repeat must stop.
   * Empty if repeat must not stop after a certain number of occurrences.
   * @property {number} i_period Frequency of appointment repeating.
   * @property {number} id_period Measurement unit of `i_period`. One of {@link ADurationSid} constants.
   * @property {*} is_month `true` if appointment must repeat monthly at the same date.
   * `false` if appointment must repeat monthly at the same week day.
   * `null` if appointment must not repeat monthly.
   */

  /**
   * Information about recurring booking:
   * <dl>
   *   <dt>
   *     int[] [<var>a_week</var>]
   *   </dt>
   *   <dd>
   *     Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   *     Empty if appointment must not repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<var>dl_end</var>]
   *   </dt>
   *   <dd>
   *     Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   *   </dd>
   *   <dt>
   *     int [<var>i_occurrence</var>]
   *   </dt>
   *   <dd>
   *     Number of occurrences after that appointment repeat must stop.
   *     Empty if repeat must not stop after a certain number of occurrences.
   *   </dd>
   *   <dt>
   *     int <var>i_period</var>
   *   </dt>
   *   <dd>
   *     Frequency of appointment repeating.
   *   </dd>
   *   <dt>
   *     int <var>id_period</var>
   *   </dt>
   *   <dd>
   *     Measurement unit of `i_period`. One of {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_month</var>]
   *   </dt>
   *   <dd>
   *     `true` if appointment must repeat monthly at the same date.
   *     `false` if appointment must repeat monthly at the same week day.
   *     `null` if appointment must not repeat monthly.
   *   </dd>
   * </dl>
   *
   * `null` if booking must be not recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Info_Info54Model_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Info_Info54Model_a_resource
   * @property {number} i_index Order number of the asset (maybe from 1 to asset quantity).
   * @property {string} k_resource The key of asset.
   */

  /**
   * A list of assets being booked. Every element has the next structure:
   * <dl>
   *   <dt>int <var>i_index</var></dt>
   *   <dd>Order number of the asset (maybe from 1 to asset quantity).</dd>
   *   <dt>string <var>k_resource</var></dt>
   *   <dd>The key of asset.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_Info_Info54Model_a_resource[]}
   */
  this.a_resource = [];

  /**
   * @typedef {{}} Wl_Book_Process_Info_Info54Model_a_session_all
   * @property {string[]} a_staff List of staff names that are leading this session.
   * @property {string[]} a_virtual_location List of virtual locations.
   * @property {string} dt_date The date/time when session starts in MySQL format and in GMT.
   * @property {*} is_select <tt>true</tt> if this session should be selected when page is initialized;
   * <tt>false</tt> if otherwise.
   * @property {boolean} is_wait `true` if client is added to a wait list, `false` - to an active list.
   * @property {boolean} is_wait_list_unpaid Allow clients to join the wait list unpaid.
   * @property {string} k_class_period The key of the session.
   * @property {string} k_location Location key.
   * @property {boolean} m_price Price of the session.
   * @property {string} s_location The name of the location where the session occurred.
   * @property {string} s_start The date/time when the session starts in human-readable format.
   * Returned in the time zone of the location.
   * @property {string} text_duration String representation of session duration.
   * Duration formatting method {@link Wl_Book_Process_Info_InfoModel._classDurationFormat()}.
   */

  /**
   * A list of all class sessions that can be booked together. Every element has the next structure:
   * <dl>
   *   <dt>
   *     string[] <var>a_staff</var>
   *   </dt>
   *   <dd>
   *     List of staff names that are leading this session.
   *   </dd>
   *   <dt>
   *     string[] <var>a_virtual_location</var>
   *   </dt>
   *   <dd>
   *     List of virtual locations.
   *   </dd>
   *   <dt>
   *     string <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     The date/time when session starts in MySQL format and in GMT.
   *   </dd>
   *   <dt>
   *     boolean <var>is_select</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if this session should be selected when page is initialized;
   *     <tt>false</tt> if otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_wait</var>
   *   </dt>
   *   <dd>
   *     `true` if client is added to a wait list, `false` - to an active list.
   *   </dd>
   *   <dt>
   *     bool <var>is_wait_list_unpaid</var>
   *   </dt>
   *   <dd>
   *     Allow clients to join the wait list unpaid.
   *   </dd>
   *   <dt>
   *     string <var>k_class_period</var>
   *   </dt>
   *   <dd>
   *     The key of the session.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     Location key.
   *   </dd>
   *   <dt>
   *     bool <var>m_price</var>
   *   </dt>
   *   <dd>
   *     Price of the session.
   *   </dd>
   *   <dt>
   *     string <var>s_location</var>
   *   </dt>
   *   <dd>
   *     The name of the location where the session occurred.
   *   </dd>
   *   <dt>
   *     string <var>s_start</var>
   *   </dt>
   *   <dd>
   *     The date/time when the session starts in human-readable format.
   *     Returned in the time zone of the location.
   *   </dd>
   *   <dt>
   *     string <var>text_duration</var>
   *   </dt>
   *   <dd>
   *     String representation of session duration.
   *     Duration formatting method {@link Wl_Book_Process_Info_InfoModel._classDurationFormat()}.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Info_Info54Model_a_session_all[]}
   */
  this.a_session_all = undefined;

  /**
   * The selected sessions.
   *
   * <b>Keys</b> - The class period keys.
   * <b>Values</b> - List of date/time when the session occurred in MySQL format and in GMT.
   *
   * @post post
   * @type {{}}
   */
  this.a_session_select = [];

  /**
   * Selected sessions on the waiting list without pay.
   *
   * Keys - session IDs.
   *
   * Values - index arrays of dates/time when session is occurred. In MySQL format. In GMT.
   *
   * @post post
   * @type {{}}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * @typedef {{}} Wl_Book_Process_Info_Info54Model_a_staff_a_logo
   * @property {number} i_height The image height.
   * @property {number} i_width The image width.
   * @property {string} s_url The image URL.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Info_Info54Model_a_staff
   * @property {Wl_Book_Process_Info_Info54Model_a_staff_a_logo} a_logo The staff member photo:
   * <dl>
   *   <dt>int <tt>i_height</tt></dt>
   *   <dd>The image height.</dd>
   *   <dt>int <tt>i_width</tt></dt>
   *   <dd>The image width.</dd>
   *   <dt>string <tt>s_url</tt></dt>
   *   <dd>The image URL.</dd>
   * </dl>
   * @property {string} s_family The first letter of staff member surname.
   * @property {string} s_staff The staff member's name.
   * @property {string} uid UID of the staff member.
   */

  /**
   * The staff member conducting the session. Every element has the next structure:
   * <dl>
   *   <dt>
   *     array <var>a_logo</var>
   *   </dt>
   *     <dd>
   *     The staff member photo:
   *     <dl>
   *       <dt>int <var>i_height</var></dt>
   *       <dd>The image height.</dd>
   *       <dt>int <var>i_width</var></dt>
   *       <dd>The image width.</dd>
   *       <dt>string <var>s_url</var></dt>
   *       <dd>The image URL.</dd>
   *     </dl>
   *   </dd>
   *   <dt>string <var>s_family</var></dt>
   *   <dd>The first letter of staff member surname.</dd>
   *   <dt>string <var>s_staff</var></dt>
   *   <dd>The staff member's name.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>UID of the staff member.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Info_Info54Model_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * The keys of the bookings made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

  /**
   * Whether the class/event can be booked at this step or not.
   * External process control flag.
   *
   * @post post
   * @type {boolean}
   */
  this.can_book = true;

  /**
   * Date when this class session occurrences stop.
   *
   * @get result
   * @type {string}
   */
  this.dl_end = undefined;

  /**
   * Date/time to which session is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * The date/time of the session the user is booking in MySQL format in the location's timezone.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_local = undefined;

  /**
   * `true` if price for the individual session should be hidden, if client has applicable pricing option to pay for this
   * booking.
   * `false` if price should be shown always.
   *
   * @get result
   * @type {boolean}
   */
  this.hide_price = undefined;

  /**
   * The text of the contract to which the user must agree before book this session.
   * Not empty if business has contract and if user did not agree to this contract.
   *
   * @get result
   * @type {string}
   */
  this.html_contract = undefined;

  /**
   * Class duration in human-readable format.
   *
   * @get result
   * @type {string}
   */
  this.html_duration = undefined;

  /**
   * The special instructions for the class.
   *
   * @get result
   * @type {string}
   */
  this.html_special = undefined;

  /**
   * Special instructions preview for class.
   *
   * @get result
   * @type {string}
   */
  this.html_special_preview = undefined;

  /**
   * Number of available spots.
   *
   * `null` if this information is not available.
   *
   * @get result
   * @type {?number}
   */
  this.i_available = null;

  /**
   * Number of booked spots.
   *
   * `null` if this information is not available.
   *
   * @get result
   * @type {?number}
   */
  this.i_book = null;

  /**
   * The duration of the session in minutes.
   *
   * @get result
   * @type {number}
   */
  this.i_duration = undefined;

  /**
   * Estimated place of reservation on the waiting list.
   *
   * @get result
   * @type {number}
   */
  this.i_wait_spot = 0;

  /**
   * Mode type. One of {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Determines if the user has agreed to the liability release.
   * `true` - if  the user has agreed. Otherwise, this will be.
   * `false` - if the user hasn't agreed or the agreement isn't required.
   *
   * @post post
   * @type {boolean}
   */
  this.is_agree = false;

  /**
   * `true` if recurring booking is available, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_book_repeat_client = undefined;

  /**
   * If client must authorize credit card.
   *
   * @post result
   * @type {boolean}
   */
  this.is_card_authorize = false;

  /**
   * Can the class/event be booked immediately or not.
   *
   * The verification is based on the search for client's promotions and other features of the class/event.
   * But it does not take into account the presence of other mandatory steps.
   * Their presence will be indicated by the {@link Wl_Book_Process_Info_InfoModel.is_next} flag.
   *
   * @post result
   * @type {boolean}
   */
  this.is_force_book = false;

  /**
   * `true` if user pressed 'Pay later'.
   * `false` if user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * `true` - next steps of the wizard are needed (for example, to purchase something to book the selected session).
   * `false` - no need for next steps (all that's needed has already been purchased).
   *
   * @post result
   * @type {boolean}
   */
  this.is_next = undefined;

  /**
   * `true` if event can be paid with pricing option only.
   * `false` if full event purchase or single session purchase are allowed.
   *
   * Copy of {@link \RsClassSql}.<tt>is_promotion_only</tt>.
   *
   * @get result
   * @type {boolean}
   */
  this.is_promotion_only = undefined;

  /**
   * Whether the class can be paid with single session.
   *
   * @get result
   * @type {boolean}
   */
  this.is_single_buy = undefined;

  /**
   * Whether the full text of the special instructions fits within the preview length or not.
   *
   * @get result
   * @type {boolean}
   */
  this.is_special_preview = false;

  /**
   * `true` if class is virtual, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_virtual = undefined;

  /**
   * Key of session which is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * Class period location key.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Login promotion to be used to book a class.
   *
   * Primary key from {@link  \RsLoginProductSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * Session pass to be used to book a class.
   *
   * Primary key from {@link  \Wl\Session\Pass\Sql}.
   *
   * @post post
   * @type {string}
   */
  this.k_session_pass = "";

  /**
   * Price of the session.
   *
   * @get result
   * @type {string}
   */
  this.m_price = undefined;

  /**
   * Whole event cost.
   *
   * @get result
   * @type {string}
   */
  this.m_price_total = undefined;

  /**
   * Event price at an early discount.
   *
   * An empty string if there is no discount.
   *
   * @get result
   * @type {string}
   */
  this.m_price_total_early = undefined;

  /**
   * The class title.
   *
   * @get result
   * @type {string}
   */
  this.s_class = undefined;

  /**
   * The location address.
   *
   * @get result
   * @type {string}
   */
  this.s_location_address = undefined;

  /**
   * The location title.
   *
   * @get result
   * @type {string}
   */
  this.s_location_title = undefined;

  /**
   * User signature.
   *
   * @post post
   * @type {string}
   */
  this.s_signature = "";

  /**
   * The time when the session takes place in the location's time zone. In format `hh:mm`.
   *
   * @get result
   * @type {string}
   */
  this.s_time = undefined;

  /**
   * Room where session takes place.
   *
   * @get result
   * @type {string}
   */
  this.text_room = undefined;

  /**
   * Text representation of the list of staffs.
   * List of staff see {@link Wl_Book_Process_Info_InfoModel.a_staff}.
   *
   * @get result
   * @type {string}
   */
  this.text_staff = undefined;

  /**
   * Timezone abbreviation.
   *
   * @get result
   * @type {string}
   */
  this.text_timezone = undefined;

  /**
   * Key of a user who is making a book.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Info_Info54Model);

/**
 * @inheritDoc
 */
Wl_Book_Process_Info_Info54Model.prototype.config=function()
{
  return {"a_field": {"a_day_available": {"get": {"result": true}},"a_login_activity": {"post": {"result": true}},"a_repeat": {"post": {"post": true}},"a_resource": {"post": {"post": true}},"a_session_all": {"get": {"result": true}},"a_session_select": {"post": {"post": true}},"a_session_wait_list_unpaid": {"post": {"post": true}},"a_staff": {"get": {"result": true}},"a_visit": {"post": {"result": true}},"can_book": {"post": {"post": true}},"dl_end": {"get": {"result": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"dt_date_local": {"get": {"result": true}},"hide_price": {"get": {"result": true}},"html_contract": {"get": {"result": true}},"html_duration": {"get": {"result": true}},"html_special": {"get": {"result": true}},"html_special_preview": {"get": {"result": true}},"i_available": {"get": {"result": true}},"i_book": {"get": {"result": true}},"i_duration": {"get": {"result": true}},"i_wait_spot": {"get": {"result": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_agree": {"post": {"post": true}},"is_book_repeat_client": {"get": {"result": true}},"is_card_authorize": {"post": {"result": true}},"is_force_book": {"post": {"result": true}},"is_force_pay_later": {"post": {"post": true}},"is_next": {"post": {"result": true}},"is_promotion_only": {"get": {"result": true}},"is_single_buy": {"get": {"result": true}},"is_special_preview": {"get": {"result": true}},"is_virtual": {"get": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"result": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"m_price": {"get": {"result": true}},"m_price_total": {"get": {"result": true}},"m_price_total_early": {"get": {"result": true}},"s_class": {"get": {"result": true}},"s_location_address": {"get": {"result": true}},"s_location_title": {"get": {"result": true}},"s_signature": {"post": {"post": true}},"s_time": {"get": {"result": true}},"text_room": {"get": {"result": true}},"text_staff": {"get": {"result": true}},"text_timezone": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Info_Info54Model.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {string} uid Key of a user who is making a book.
 * @param {number} id_mode Mode type. One of {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Info_Info54Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */