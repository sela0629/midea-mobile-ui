<template>
	<div class="page list">
		<div class="page__hd">
        <h1 class="page__title">List</h1>
        <p class="page__desc">列表</p>
    </div>
		<div class="page__bd">
			<div class="midea-cells__title">带说明的列表项</div>
			<div class="midea-cells">
				<div class="midea-cell">
					<div class="midea-cell__bd"><p>标题文字</p></div>
					<div class="midea-cell__ft">说明文字</div>
				</div>
			</div>
			<div class="midea-cells__title">带图标、说明的列表项</div>
			<div class="midea-cells">
				<div class="midea-cell">
					<div class="midea-cell__hd">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block">
					</div>
					<div class="midea-cell__bd"><p>标题文字</p></div>
					<div class="midea-cell__ft">说明文字</div>
				</div>
				<div class="midea-cell">
					<div class="midea-cell__hd">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block">
					</div>
					<div class="midea-cell__bd"><p>标题文字</p></div>
					<div class="midea-cell__ft">说明文字</div>
				</div>
			</div>
			
			<!-- S 带跳转的列表项 -->
			<div class="midea-cells__title">带跳转的列表项</div>
			<div class="midea-cells">
				<a class="midea-cell midea-cell_access" href="#">
					<div class="midea-cell__bd">cell container</div>
					<div class="midea-cell__ft">说明文字</div>
				</a>
				<a class="midea-cell midea-cell_access" href="#">
					<div class="midea-cell__bd">cell container</div>
					<div class="midea-cell__ft">说明文字</div>
				</a>
			</div>
			<!-- E 带跳转的列表项 -->

		</div>
		<div class="page__ft"></div>
	</div>
</template>

<style lang="scss">
  @import "../../common/global";
	.midea-cells{
		position: relative;
		line-height: 1.5; 
		font-size: 17px;
		background: #fff;
		&__title{
			margin-top: 10px;
			margin-bottom: 10px;
			padding-left: 15px;
			padding-right: 15px;
			color: #999;
			font-size: 14px;
		}
		&:before {
			@include setLine($cell-line-color);
		}
		&:after {
			@include setLine($cell-line-color);
			top: auto;
			bottom: 0;
		}
	}

	.midea-cell {
		padding: 10px 15px;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		
		&:before {
			@include setLine($cell-line-color);
			left: 15px
		}
		&:first-child {
			&:before {
				display: none;
			}
		}
		&__bd {
			-webkit-box-flex: 1;
			-webkit-flex: 1;
			flex: 1;
		}
		&__ft{
			text-align: right;
			color: #999999;
		}
	}

	.midea-cell_access{
		
		color: inherit;
		.midea-cell__ft{
			padding-right: 13px;
			position: relative;
			&:after{
				content : '';
				@include setArrow(6px, #C8C8CD, 2px);
				transform:rotate(46deg);
				position: absolute;
				top: 50%;
				margin-top: -4px;
				right: 2px;
			}
		}
		
	}

</style>
