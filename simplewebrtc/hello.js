sender_report = {
    "received_time": 64714,
    "delay_since_received": 46,
    "local_clock": 1597366470336,
    "track_times_msec": {"hdcam_04_starboard_rear_roof_wide": [13100, 1597366470289]}
}

let [frame_msec, time_of_frame_msec] = Object.entries(sender_report.track_times_msec)[0][1]
console.log(frame_msec, time_of_frame_msec);

let x = 8 * 1024 * 1024 * 1024;
console.log(parseInt(x));
console.log(x | 0);
console.log(Math.trunc(x));
