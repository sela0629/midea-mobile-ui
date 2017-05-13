<template>
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
