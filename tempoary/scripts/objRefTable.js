const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Mikal_3DObject,
		C3.Plugins.Camera3D,
		C3.Plugins.Text,
		C3.Plugins.PlatformInfo,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Camera3D.Acts.LookParallelToLayout,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Camera3D.Exps.CameraX,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Camera3D.Exps.CameraY,
		C3.Plugins.Mikal_3DObject.Acts.SetZElevation,
		C3.Plugins.Mikal_3DObject.Acts.SetDefaultColor,
		C3.Plugins.System.Exps.rgbex,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Camera3D.Acts.RotateCamera,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.fps,
		C3.Plugins.System.Exps.cpuutilisation,
		C3.Plugins.System.Exps.gpuutilisation,
		C3.Plugins.Mikal_3DObject.Exps.Count,
		C3.Plugins.PlatformInfo.Exps.CanvasCssWidth,
		C3.Plugins.PlatformInfo.Exps.CanvasCssHeight,
		C3.Plugins.Mouse.Cnds.OnClick
	];
};
self.C3_JsPropNameTable = [
	{"3DObject": 0},
	{"3DCamera": 0},
	{Text: 0},
	{PlatformInfo: 0},
	{Mouse: 0}
];

self.InstanceType = {
	_3DObject: class extends self.IWorldInstance {},
	_3DCamera: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	PlatformInfo: class extends self.IInstance {},
	Mouse: class extends self.IInstance {}
}